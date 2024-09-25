
import React from "react";
class UserClass extends React.Component{
 constructor(props){
    super(props);
    this.state={
       userinfo:{
        name:"nitin",
        location:"bellam",
        avatar_url:"https://nithin.jpg"
       }
    }
 console.log("child constructor")
 }

 async componentDidMount(){//it acts like a useEffect
    const data=await fetch("https://api.github.com/users/BLOCK-PROGRAMR");
    const json=await data.json();
    console.log(json);
    this.setState({
       userinfo: json,
    });
}
componentDidUpdate(){
    console.log("update the component");
}
componentWillUnmount(){
    console.log("willl amount");
}
render(){
    console.log("render child")
     const {name,location,avatar_url}=this.state.userinfo //destructuring
    return(
        
        <div>
{/** <div><button onClick={()=>{
            this.setState({
                count:this.state.count+1
            })
           }}>count</button>
            <button onClick={()=>{
            this.setState({
                count1:this.state.count1+1
            })
           }}>count1</button></div>*/} 
           <img  src={avatar_url}/>
            <h3>{name}</h3>
            <h3>{location}</h3>
        </div>
    )
}

}
export default UserClass;