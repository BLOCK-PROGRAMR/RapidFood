# parcel
-dev build
-local server
-HMR =hot module replacement
-file watching algorithms-witten in c++
-caching -faster builder
-image optimization
-minification
-bundling
-compressing
-consistent hashing
-code splitting
- differntial bundling -support older browsers
-diagnostic
-error handling
-https

# design
/* 
 header:
       -logo
       -navitems
  body:
      -search bar
      -restaurant-container
         -restaurantacard
  footer:
      -copyrights
      -disclamier

*/
# notes
//not using keys(not acceptable)  <<index(good)<<<id(much better and this is the good practice);



 # episode -7 notes:
   > In this episode learn react-router-dom package super powers will learn like
                                    >createBrowserRouter used to create routers(const Approuter=([{path,element,child,errorELement}])) 
                                    >Another big power is ReactProvider is used to access the routing methods (syntax is <ReactProvider router={Approuter}>)
                                    >another two important big powers is <Outlet/> and <Link  to:""></Link>





                                     const [resinfo,setresinfo]=useState(null);
   const {resId} =useParams();//destructuring is very important
   
  
# redux toolkit:
    1.Install @reduxtoolkit and react-redux;
    2.build our store
    3.connect our store to app
    4.slice(sartsile)
    5.dispatch(action)
    6.selector(subscribed to the store)