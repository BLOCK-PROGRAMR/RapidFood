import {CDN_URL}  from "../utils/constants"

const ItemList=({items})=>{
    console.log(items)
return(
   <div>

     {items.map((item)=>{
    return(
        <div className="flex justify-between w-9/12" id={item.card.info.id} >
           <div>    
           <span className="p-2">{item.card.info.name}--</span>
           <span>{"₹"}{item.card.info.price/100}</span>
           <p className="text-xs p-2">{item.card.info.description}</p>
            </div>
            <div  className="p2 m2 border-b-2 text-left w-3/12">
             {item.card.info.imageId !='null' ? (
                        <img src={CDN_URL + item.card.info.imageId} className="w-full" alt={item.card.info.name} />
                    ) : (
                        <div>No image</div>
                    )}</div>
            
            </div>
            )
            
     })}

   </div>
)

}
export default ItemList;