import { IMAGE_CDN } from "../utils/constant";

const ResCard=(props)=>{
    const {resData}=props;
    const {name, cuisines, avgRating,cloudinaryImageId}=resData?.info;
    const {slaString}=resData.info.sla;
    return (
        <div className="res-card w-[250px] m-4 p-4 bg-gray-300 rounded-xl hover:bg-gray-200 shadow-lg">
            <img className="res-img rounded-md" src={IMAGE_CDN + cloudinaryImageId}/>
            {/* <div className="res-card-info"> */}
                <h3 className="py-2 font-bold text-l">{name}</h3>
                <h4 id="cuisine_info" className="py-2">{cuisines.join(", ")}</h4>
                <h4>{avgRating} 🌟</h4>
                <h4>{slaString}</h4>
            {/* </div> */}
        </div>
    )
};

// High Order Components - takes a component as input and returns enhanced component
export const withNonVegLabel = (ResCard) =>{
    return (props)=>{
        return (
            <div>
                <label className="absolute bg-red-600 text-sm text-white ml-8 mt-4 p-1 rounded-2xl">Non-Veg</label>
                <ResCard {...props}/>
            </div>
        );
    };
};

export default ResCard;