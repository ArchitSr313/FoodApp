// import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import logo from "../assets/food_app_logo.png";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header =()=>{
    const [btnName, setbtnName]=useState("Login");
    const onlineStatus = useOnlineStatus();
    return (
        <div className="Header flex justify-between bg-amber-50 shadow m-4">
            <div className="logo-container">
                <img className="logo w-30" src={logo} alt="logo"/>
            </div>
            <div className="nav-items">
                <ul className="flex p-4 m-4 items-center font-bold">
                    <li className="p-4">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="p-4"><Link to="/">Home</Link></li>
                    <li className="p-4"><Link to="/about">About Us</Link></li>
                    <li className="p-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="p-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="p-4"><Link to="/cart">Cart</Link></li>
                    <button onClick={ ()=> btnName === "Login" ? setbtnName("Log Out") : setbtnName("Login")} className="login-btn" >
                    {btnName}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header;