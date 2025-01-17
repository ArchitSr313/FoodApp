import React from "react";
import ReactDOM from "react-dom/client";
// import logo from "./assets/food_app_logo.png";
// import food_1 from "./assets/food_1.jpg";
import Header from "../components/Header";
import Body from "../components/Body";
import About from "../components/About";
import Error from "../components/Error";
import { createBrowserRouter, RouterProvider } from "react-router";

const AppLayout=()=>{
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>
    },
    {
        path:"/about",
        element:<About/>,
    },
]);


const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout/>);
root.render(<RouterProvider router={appRouter}/>);

