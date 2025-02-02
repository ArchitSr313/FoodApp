import { useState, useEffect } from "react";
import { RES_URL } from "../utils/constant";


const useRestaurantMenu = (resId)=>{
    const [resData, setresData] = useState(null);

    useEffect(()=>{
        fetchData();
    },[]);


    const fetchData = async ()=>{
        const data = await fetch( RES_URL + resId);
        const json = await data.json();
        // console.log(json);
        setresData(json?.data);
    };
    return resData;
}

export default useRestaurantMenu;