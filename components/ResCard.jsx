import { IMAGE_CDN } from "../utils/constant";

const ResCard=(props)=>{
    const {resData}=props;
    const {name, cuisines, avgRating,cloudinaryImageId}=resData?.info;
    const {slaString}=resData.info.sla;
    return (
        <div className="res-card w-[250px] m-4 p-4 bg-gray-300 rounded-xl hover:bg-amber-300 shadow">
            <img className="res-img rounded-md" src={IMAGE_CDN + cloudinaryImageId}/>
            {/* <div className="res-card-info"> */}
                <h3 className="py-2 font-bold text-l">{name}</h3>
                <h4 id="cuisine_info">{cuisines.join(",")}</h4>
                <h4>{avgRating} 🌟</h4>
                <h4>{slaString}</h4>
            {/* </div> */}
        </div>
    )
};

export default ResCard;