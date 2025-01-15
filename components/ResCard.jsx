import { IMAGE_CDN } from "../utils/constant";

const ResCard=(props)=>{
    const {resData}=props;
    const {name, cuisines, avgRating,cloudinaryImageId}=resData?.info;
    const {slaString}=resData.info.sla;
    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img className="res-img" src={IMAGE_CDN + cloudinaryImageId}/>
            {/* <div className="res-card-info"> */}
                <h3>{name}</h3>
                <h4 id="cuisine_info">{cuisines.join(",")}</h4>
                <h4>{avgRating} 🌟</h4>
                <h4>{slaString}</h4>
            {/* </div> */}
        </div>
    )
};

export default ResCard;