import { useState } from "react";
import CategoryItems from "./CategoryItems";
const RestaurantCategory = ({data})=>{
    console.log(data);
    const [showItems, setshowItems] = useState(false);

    const clickHandler =()=>{
        setshowItems(!showItems);
    };
    return (
        <div>
            {/* Header */}
            <div className="w-6/12 mx-auto my-4 bg-amber-100 shadow-lg p-4">
                <div className="flex justify-between cursor-pointer" onClick={clickHandler}>
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    <span>⬇️</span>
                </div>
                {/* Accordion Content */}
               {showItems && <CategoryItems items ={data.itemCards}/>}
            </div>
        </div>
    )
};

export default RestaurantCategory;