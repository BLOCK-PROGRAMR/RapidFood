import {Reslist} from "../utils/Mockdata";
import { useState } from "react";
   

const Filter=()=>{
    const[listdata,setReslist]=useState([Reslist]);
     return(
         <div className="check-btn">
            <button  onClick={()=>{
            const filterdata=listdata.filter(res=>
                res.rating>4.7);
                setReslist(filterdata);
            }}> click</button>

         </div>
     )

}
export default Filter;