import Shimmer from "./shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const ResInfo = ()=>{
    
    const { resId } = useParams();

    const resData = useRestaurantMenu(resId); //custom hook

    if(resData === null) return <Shimmer/>;

    // const {} = resData.info;
    const {name, city, locality, areaName, avgRating, cuisines} = resData?.cards[2]?.card?.card?.info;
    // const {itemCards} =resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0];
    // console.log(itemCards);

    const categories = resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c)=> 
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(categories);

    return (
        <div className="res-info text-center">
            <h1 className="font-bold text-2xl">{name}</h1>
            <h3 className="font-medium text-lg">Location : {locality +", " +areaName +", " +city}</h3>
            <h3 className="font-medium text-lg">Rating : {avgRating} 🌟</h3>

            <p className="font-medium text-lg">Cuisines : {cuisines.join(",")}</p>

            {/* categories accordion */}
            <div className="res-menu">
                <ul>
                {categories.map((item)=>(
                       <RestaurantCategory key={categories.categoryId} data = {item.card?.card}/>
                ))}
                </ul>
            </div>
        </div>
    );
};

export default ResInfo;