import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
// import logo from "./assets/food_app_logo.png";
// import food_1 from "./assets/food_1.jpg";
import Header from "../components/Header";
import Body from "../components/Body";
import About from "../components/About";
import Error from "../components/Error";
import Contact from "../components/Contact";
import Cart from "../components/Cart";
import ResInfo from "../components/ResInfo";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
// import Grocery from "../components/Grocery";

const AppLayout=()=>{
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    )
};

//Lazy Loading
const Grocery = lazy(()=> import("../components/Grocery"));  

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading......</h1>}><Grocery/></Suspense>
            },
            {
                path:"/cart",
                element:<Cart/>
            },
            {
                path:"/restaurants/:resId",
                element:<ResInfo/>
            }
        ],
        errorElement:<Error/>
    }
]);


const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout/>);
root.render(<RouterProvider router={appRouter}/>);

