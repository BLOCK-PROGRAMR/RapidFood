
import { useEffect,useState } from "react";

const useOnlinestatus=()=>{
    const [onlinestatus,setonlinestatus]=useState(true);

    useEffect(()=>{
               window.addEventListener('offline',()=>{//adding event listener
                setonlinestatus(false);
               })
               window.addEventListener('online',()=>{
                setonlinestatus(true);
               })
    },[])

return onlinestatus;
}
export default useOnlinestatus;