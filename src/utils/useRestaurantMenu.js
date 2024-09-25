import { useState,useEffect } from "react";

import { Menu_url } from "./constants";

const useRestaurantMenu=(resId)=>{
    const [resInfo,setresInfo]=useState(null);

    useEffect(()=>{
            fetchdata();

    },[]);

    const fetchdata=async()=>{
        const data=await fetch(Menu_url+resId);
        const json=await data.json();
    setresInfo(json.data);

    }
    return resInfo;
}
export default useRestaurantMenu;