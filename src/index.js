import React,{lazy,Suspense, useState} from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
//import About from "./components/About";
import { createBrowserRouter,Outlet,RouterProvider, } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Restaurantmenu from "./components/Restaurantmenu";
import userContext from "./components/userContext";
import { useState,useEffect } from "react";
//import Footer from "./components/Footer";


const Grocery=lazy(()=>import('./components/Grocery'));
const About=lazy(()=>import("./components/About"));
const App=()=>{
const [user,setuser]=useState("");
useEffect(()=>{
   const data={
    username:"nitinkumar",
   }
   setuser(data.username)
},[])
  return(
    <div className="app">
      <userContext.Provider value={{currentUser:user,setuser}}>
      <Header/>
      <Outlet/>{/**  it is very important tool for changing based on routing!!! */}
      </userContext.Provider>
     
      
    </div>
  )

}


const Approuter=createBrowserRouter([//very important tool
  {
    path:"/",
    element:<App/>,
    children:[  
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<Suspense fallback={<h1>page is rendering!! </h1>}><About/></Suspense>
      },{
        path:"/contact",
        element:<Contact/>
      },{
        path:"/resmenu/:resId",
        element:<Restaurantmenu/>
      },{
        path:"/grocery",
        element:<Suspense fallback={<h1>page is rendering!! </h1>}><Grocery/></Suspense>
      }
    ],

    errorElement:<Error/>
  },
  {
    path:"/co",
    element:<About/>,
    errorElement:<Error/>
  }

  
  
])

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={Approuter}/> )
{/** Router provider is very important tool */}