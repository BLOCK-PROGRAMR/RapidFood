import React, { useState, useEffect, useContext } from "react";
//import ReactDOM from "react-dom/client";
import Shimmer from "./Shimmer";
import Rescards,{PromotedRestaurantCards}from "./Rescards";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
import userContext from "./userContext";

const Body= () => {
  const [listdata, setReslist] = useState([]);
  const [searchdata, setSearchdata] = useState("");
  const [searchdatafound,setsearchdatafound]=useState(false);
  const [filter_list,setfilter_list]=useState([]);
const Restaurant_promoted=PromotedRestaurantCards(Rescards);

  
  useEffect(() => {
    fetchdata();
    console.log("response is taken");
  }, []);


  const fetchdata = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.1066576&lng=83.39555059999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    console.log(json);
    setReslist(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setfilter_list(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  };

  // Updated function name to handleSearch
  const handleSearch = (e) => {
    setSearchdata(e.target.value);
    setsearchdatafound(false);
  };

  // Updated function name to search
  const search = () => {
    // Updated to use setSearchdata instead of setReslist
    const search_filter = listdata.filter(obj => obj.info.name.toLowerCase().includes(searchdata.toLowerCase()));
    setfilter_list(search_filter);
   
      setsearchdatafound(search_filter.length===0);
    

  };

  const filterFood = () => {
    const filter_data = listdata.filter(res => res.info.avgRating > 4.5);
    setfilter_list(filter_data);
    console.log(filter_data);
    
  };

  // New function to reset data 
  const resetData = () => {
    fetchdata();  
    setReslist("")
    setsearchdatafound(false);
  };
  //search data
  const onlinestatus=useOnlinestatus();
  if(onlinestatus===false){
    return(<h1>you are offline!!! check your internet connection🛜🛜</h1>);
  }
  const {currentUser,setuser}=useContext(userContext);//using use context to change the data globally
   
  return listdata.length === 0 ? (<Shimmer />) : (
    <div>
      <div className="flex m-4 p-4 justify-center">
        <div >
          <label className="font-serif text-lg">Search:</label>
          <input  type="text" className="mx-4 px-4 h-8 my-2 " onChange={handleSearch} value={searchdata}/>
          <button  className="bg-green-200  mx-4 my-1 px-4 py-2 rounded-lg shadow-lg" onClick={search}>search</button>
        </div> 
        <div> <button  className="bg-green-200  mx-4 my-1 px-4 py-2 rounded-lg shadow-lg " onClick={filterFood}>Filter Food</button></div>
        
        {/* New button to reset data */}
        <div> <button   className="bg-green-200  mx-4 my-1 px-4 py-2 rounded-lg shadow-lg" onClick={resetData}>Reset</button></div>

        <div className="px-4 my-2">
          <label className="text-lg font-serif  capitalize">username:</label>
          <input  type="text" value={currentUser} onChange={(e)=>{setuser(e.target.value)}} className="border-2 w-50 h-8"/>
        </div>
        
      </div>
      <div className="flex flex-wrap justify-center ">
        {
  searchdatafound?(<p className="searchp ">data not found</p>):
  (filter_list.map((resObj) =><Link key={resObj.info.id} to={"/resmenu/" + resObj.info.id}>
  {resObj.info.promted?(<Restaurant_promoted resData={resObj}/>):<Rescards resData={resObj} />}
  
</Link> ))
        }
      
      </div>
    </div>
  );
};


export default Body;
