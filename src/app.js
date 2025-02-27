import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/Header";
import Body from "../components/Body";
import About from "../components/About";
import Error from "../components/Error";
import Contact from "../components/Contact";
import Cart from "../components/Cart";
import ResInfo from "../components/ResInfo";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import UserContext from "../utils/UserContext";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
// import Grocery from "../components/Grocery";

const AppLayout=()=>{
    const [userName, setUserName] = useState(null);

    // authentication
    useEffect(()=>{
        //make an API call and send username and passoword
        const data = {name : "Archit"};
        setUserName(data.name);
    },[]);

    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedUser : userName, setUserName}}>
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
        </UserContext.Provider>
        </Provider>
    );
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

