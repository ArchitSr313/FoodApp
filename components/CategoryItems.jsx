import { useDispatch } from "react-redux";
import { IMAGE_CDN } from "../utils/constant";
import { addItems } from "../utils/cartSlice";
const CategoryItems = ({items})=>{
    const dispatch = useDispatch();
    const handleAddItems = (item)=>{
        //dispatch an action
        dispatch(addItems(item));
    };

    return (
        <div>
                {items.map((item)=>
                <div key={item.card.info.id} className="p-2 m-2 border-b text-left flex justify-between">
                    <div className="w-9/12">
                        <span className="font-semibold">{item.card.info.name}</span>
                        <span className="font-semibold"> - ₹ {item.card.info.price/100}</span>
                        <p className="text-green-600 font-medium">{item.card.info.ratings.aggregatedRating.rating} 🌟</p>
                    </div>
                    <div className="w-3/12 relative">
                        <img className="w-full" src={IMAGE_CDN + item.card.info.imageId}/>
                        <button className="absolute top-0 left-0 bg-black text-white p-1 rounded-lg" 
                        onClick={()=> handleAddItems(item)}>
                            Add +
                        </button>
                    </div>
                </div>
                )
                }
        </div>
    )
};

export default CategoryItems;