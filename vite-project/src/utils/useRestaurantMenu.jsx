import { useState,useEffect } from "react";
import mockResMenu from '../../raw_data/mockResMenu.json';

const useRestaurantMenu=(resId)=>{
    const [resInfo,setResInfo]=useState(null);

    // To fetch the menu cards
    const fetchMenu=async()=>{
        // const data=await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId='+resId);
        // const json=await data.json();

        // just get the mock menu data for the restaurants instead of using the direct api, because most of the time, api gets changes regularly
        const json=mockResMenu;
        setResInfo(json);
        // console.log(json);
    }


    // useEffect Menu
    useEffect(()=>{
        fetchMenu();
    },[]);

    return resInfo;
}

export default useRestaurantMenu;