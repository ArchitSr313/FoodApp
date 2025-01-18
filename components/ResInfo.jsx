import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { RES_URL } from "../utils/constant";
import { useParams } from "react-router";

const ResInfo = ()=>{
    const [resData, setresData] = useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const { resId } = useParams();

    const fetchData = async ()=>{
        const data = await fetch( RES_URL + resId);
        const json = await data.json();
        // console.log(json);
        setresData(json?.data);
    };

    if(resData === null) return <Shimmer/>;

    // const {} = resData.info;
    const {name, city, locality, areaName, avgRating, cuisines} = resData?.cards[2]?.card?.card?.info;
    const {itemCards} =resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);

    return (
        <div className="res-info">
            <h1>{name}</h1>
            <h3>Location : {locality +", " +areaName +", " +city}</h3>
            <h3>Rating : {avgRating} 🌟</h3>

            <p>Cuisines : {cuisines.join(",")}</p>

            <div className="res-menu">
                <h4>Recommendations</h4>
                <ul>
                {
                    itemCards.map((item)=> (
                        <li key={item.card.info.id}>
                            {item.card.info.name} - {"Rs. "}
                            {item.card.info.defaultPrice/100 || item.card.info.price/100}
                        </li>
                    ))
                }
                </ul>
            </div>
        </div>
    )
};

export default ResInfo;