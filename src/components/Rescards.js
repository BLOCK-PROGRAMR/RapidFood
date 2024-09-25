import { useContext } from "react";
import userContext from "./userContext";

const Rescards=(props)=>{
    const{resData}=props;
    const {currentUser}=useContext(userContext);
    //const{photo_url,restaurant_name,food_item,rating,price}=resData
    return(
      
          <div className="m-4 p-4 w-[250] flex-wrap rounded-2xl shadow-md ">
            <img  className="rounded-md"  src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId} alt="food-image"/><br/>
           <h3 className="font-serif font-bold py-2">{resData.info.name}</h3>
           <h4 className="font-serif">{
                resData.info.cuisines.map((data,index)=>(
                  <span key={index}>{data}{index !== resData.info.cuisines.length - 1 ? ', ' : ''}</span>
                ))
            }

          </h4>
          <h4 className="font-serif">{resData.theme}</h4>
          <h4 className="font-serif">{resData.info.areaName}</h4>
          <h4 className="font-serif">{resData.info.locality}</h4>
           <h4 className="font-serif">{resData.info.avgRating}</h4>
           <h4 className="font-serif">{resData.info.costForTwo}</h4>
           <h4>{currentUser}</h4>
          </div>
   
    )
  }

  export const PromotedRestaurantCards=(Rescards)=>{
    return (props)=>{
      return(
        <div>
          <h2>promoted</h2>
          <Rescards {...props}/>
        </div>

      )
    }
  }
  export default Rescards;