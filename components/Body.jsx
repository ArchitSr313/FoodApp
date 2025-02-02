// import resList from "../utils/mockData";
import ResCard from "./ResCard";
import { useState,useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body=()=>{
    //local state variable - super powerful variable
    // state variable can be updated only through function
    // const [listOfRestautant, setlistOfRestaurant]=useState(resList);
    const [listOfRestaurant, setlistOfRestaurant]=useState([]);  //passing no data for intial rendering

    const [copyListOfRestaurant, setCopyListOfRestaurant]=useState([]);  //passing no data for intial rendering


    const [searchText, setsearchText]=useState("");


    //normal js varible and updation
    // let list=12;
    // list=13;
    // const list2=[13];
    // list2.push(14);

    useEffect(()=>{
        // console.log("useEffect Rendered");
        fetchData();
    },[]);

    //live API Call
    const fetchData=async ()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.1339874&lng=81.96189790000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        console.log(json);
        //optional chaining '?'
        setlistOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setCopyListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    console.log("body rendered");

    //conditional rendering - when rendering is done based on some condition
    // if(listOfRestautant.length===0){
    //     return <Shimmer/>
    // }

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) return (<h1>It seems you are offline. Check Your Internet 🌐 Connection !!!</h1>)

    return (listOfRestaurant.length === 0) ? <Shimmer/> : (
        <div className="body">
            <div className="filter">
                <div className="search-container">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                        setsearchText(e.target.value);
                    }}/>
                    <button onClick={()=>{
                        //filter the restaurant cards and update the UI
                        //we need search text to do so
                        // console.log(searchText);
                        const filteredRestaurant=listOfRestaurant.filter((res)=>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase()));    //making case insensitive search
                        console.log(filteredRestaurant);
                        setCopyListOfRestaurant(filteredRestaurant);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={()=>{
                    const filterdList=listOfRestaurant.filter((res)=> res.info.avgRating > 4 );
                    setCopyListOfRestaurant(filterdList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {/* {resList.map((restaurant)=>(
                <ResCard key={restaurant.info.id} resData={restaurant}/>))} */}

                {/* Using state variable to make interactive page */}
                {copyListOfRestaurant.map((restaurant)=>(
                <Link to={`/restaurants/${restaurant.info.id}`} key={restaurant.info.id}><ResCard resData={restaurant}/></Link>
                ))}
            </div>
        </div>
    )
};

export default Body;