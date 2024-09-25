import React from "react";
import UserClass from "./UserClass";

/*const About=()=>{

    return(
        <div className="about-us-container">
      <h2 className="about-us-heading">About Us</h2>
      <p className="about-us-text">Welcome to Nithin Restaurant!</p>
      <p className="about-us-text">We pride ourselves on serving delicious food made from the freshest ingredients. Our chefs are passionate about creating mouthwatering dishes that will leave you coming back for more.</p>
      <p className="about-us-text">At Nithin Restaurant, we believe in providing a warm and welcoming atmosphere for our guests. Whether you're dining in with friends and family or ordering takeout, we strive to make your experience memorable.</p>
      <p className="about-us-text">Thank you for choosing Nithin Restaurant. We look forward to serving you!</p>
      <div>
        <UserClass Name={"Name:Nithinkumar"} Location={"Bellam vzm"}/>
      </div>
    </div>
    )
}
export default About;*/


class About extends React.Component{
  constructor(){
    super();
    console.log("parent clss")

  }

  componentDidMount(){
    console.log("parent component")

  }
  render(){
    console.log("render parent")
    return(
      <div className="about-us-container">
      <h2 className="about-us-heading">About Us</h2>
      <p className="about-us-text">Welcome to Nithin Restaurant!</p>
      <p className="about-us-text">We pride ourselves on serving delicious food made from the freshest ingredients. Our chefs are passionate about creating mouthwatering dishes that will leave you coming back for more.</p>
      <p className="about-us-text">At Nithin Restaurant, we believe in providing a warm and welcoming atmosphere for our guests. Whether you're dining in with friends and family or ordering takeout, we strive to make your experience memorable.</p>
      <p className="about-us-text">Thank you for choosing Nithin Restaurant. We look forward to serving you!</p>
      <div>
        <UserClass Name={"Name:Nithinkumar"} Location={"Bellam vzm"}/>
      </div>
    </div>

    )
  }
}
export default About;