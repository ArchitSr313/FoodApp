// import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import logo from "../assets/food_app_logo.png";
import { Link } from "react-router";

const Header =()=>{
    const [btnName, setbtnName]=useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo} alt="logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <button onClick={ ()=> btnName === "Login" ? setbtnName("Log Out") : setbtnName("Login")} className="login-btn" >
                    {btnName}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header;