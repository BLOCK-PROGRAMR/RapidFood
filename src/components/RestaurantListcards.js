
//import { useState } from "react";
import ItemList from "./itemList";
//import { useState } from "react";

const RestaurantListcards=(props)=>{
   const {card,showstate,setshowindex}=props;
//const [showstate,setshowstate]=useState(false);
console.log(card);
const handleclick=()=>{
    setshowindex();
}
    return(

<div className="text-center p-4 my-4  w-5/12 mx-auto bg-gray-50 shadow-lg ">
<div className=" flex justify-between cursor-pointer" onClick={handleclick}>
<span className="font-bold text-lg">{card.title}({card.itemCards.length})</span>
<span>{"⬇️"}</span>
</div>
{showstate && <ItemList items={card.itemCards}/>}

</div>

    )
}
export default RestaurantListcards;