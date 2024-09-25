
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantListcards from "./RestaurantListcards";

import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";

const Restaurantmenu=()=>{
  const [showindex,setshowindex]=useState(null);
   const {resId} =useParams();//destructuring is very important
    const resinfo=useRestaurantMenu(resId);//custom hooks
if(resinfo===null){
  return <Shimmer/>
}
const {name,cuisines,areaName}=resinfo?.cards[2]?.card?.card?.info;
const {itemCards}=resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
//console.log(resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card.title);
const categories = resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((A) => {
  return A?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
});

//console.log("data");
//console.log(categories);


//;
  return (
          <div className="text-center ">
            
            <h1 className="font-serif font-bold my-1 p-1 text-2xl">
              {name}
            </h1>
            <h2 className="font-serif font-medium">{cuisines.join(",")}</h2>
            <h4 className="font-serif font-medium">{areaName}</h4>

         
           {categories.map((data,index)=> <div> <RestaurantListcards  card={data?.card?.card}
               showstate={index===showindex?true:false}
               setshowindex={()=>{setshowindex(index)}}//control and uncontrol methods
               //lifting state up concept in advanced search react dev new documentation
           
           /></div>)}
            </div>
        

                 
        
  )
}
export default Restaurantmenu;