import React from "react";
import ReactDOM from "react-dom";

const parent=React.createElement('div',{id:"parent"},
[React.createElement('div',{id:"child"},[React.createElement('h1',{},"im nithinkumar"),React.createElement("h2",{},"im a react developer and fullstackdevleoper")]),
React.createElement('div',{id:"child"},[React.createElement('h1',{},"i nithinkumar"),React.createElement("h2",{},"im a react developer")])]);
    console.log(parent);
const heading=React.createElement('h1',{},"hello nithin welcome to react!!");
        const root=ReactDOM.createRoot(document.getElementById('root'));
     //   const root=ReactDOM.createElement(document.getElementById('root'))
      //  root.render(heading);
      root.render(parent);