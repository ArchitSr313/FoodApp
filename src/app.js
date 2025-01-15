import React from "react";
import ReactDOM from "react-dom/client";
// import logo from "./assets/food_app_logo.png";
// import food_1 from "./assets/food_1.jpg";
import Header from "../components/Header";
import Body from "../components/Body";

const AppLayout=()=>{
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
};


const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);