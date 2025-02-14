import { IMAGE_CDN } from "../utils/constant";
const CategoryItems = ({items})=>{
    return (
        <div>
                {items.map((item)=>
                <div key={item.card.info.id} className="p-2 m-2 border-b text-left flex justify-between">
                    <div className="w-9/12">
                        <span className="font-semibold">{item.card.info.name}</span>
                        <span className="font-semibold"> - ₹ {item.card.info.price/100}</span>
                        <p className="text-green-600 font-medium">{item.card.info.ratings.aggregatedRating.rating} 🌟</p>
                    </div>
                    <div className="w-3/12">
                        <img src={IMAGE_CDN + item.card.info.imageId}/>
                        {/* <div className="absolute mb-16">
                            <button className="bg-black text-white p-2 rounded-lg">Add +</button>
                        </div> */}
                    </div>
                </div>
                )
                }
        </div>
    )
};

export default CategoryItems;