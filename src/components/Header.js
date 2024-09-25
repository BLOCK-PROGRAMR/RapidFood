import { LOGO_URL } from "../utils/constants";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
import userContext from "./userContext";

const Header=()=>{
  const[btnName,setbtName]=useState("login");
  const onlinestatus=useOnlinestatus();
  const {currentUser}=useContext(userContext);
    return(
      <div className=" flex  justify-between bg-slate-200 font-serif text-lg capitalize shadow-sm sm:bg-green-200">
      <div  className="logo-container">
        <img className="w-24 rounded-xl " src={LOGO_URL} alt="no image" />
      </div>
      <div  className=" ">
        <ul className="flex flex-wrap p-4 m-4 ">
        <li className="mx-6"><Link  to="/">home</Link> </li>
       
        <li className="mx-6"><Link to="/contact">contact</Link></li>
        <li  className="mx-6">
          <Link to="/about">aboutus</Link></li>
        <li className="mx-6">cart</li>
        <li className="mx-6">Internet{onlinestatus?"✅":"☑️"}</li>
        <li className="mx-6"><Link to="/grocery">Grocery</Link></li>
       <button  className="login" onClick={()=>{
        btnName==="login"?setbtName("logout"):setbtName("login")
       }}>
        {btnName}
       </button>
       <li className="font-bold font-serif">{currentUser}</li>
        </ul>
      </div>
      </div>
    )
  }
  export default Header;
 