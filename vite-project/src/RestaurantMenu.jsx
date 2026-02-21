import { useState,useEffect } from "react";
import Shimmer from "./Shimmer.jsx";
import mockResMenu from '../raw_data/mockResMenu.json';
import useRestaurantMenu from "./utils/useRestaurantMenu.jsx";
import { useParams } from 'react-router-dom';

const RestaurantMenu=()=>{
    // const [resInfo,setResInfo]=useState(null);
    const {resId}=useParams();

    // custom hooks
    const resInfo=useRestaurantMenu(resId);

    if(!resInfo){
        return <Shimmer />;
    }

    // get the items cards
    const {itemCards}=resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card||[];

    return(
        <div className="menu">
            <h1>{resInfo?.data?.cards[0]?.card?.card?.info?.name}</h1>
            <h3>{resInfo?.data?.cards[0]?.card?.card?.info?.cuisines.join(", ")}</h3>
            <h3>{resInfo?.data?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul className="res-menu-items">
                {/* <li>{itemCards[0]?.card?.info?.name}</li>
                <li>{itemCards[1]?.card?.info?.name}</li>
                <li>{itemCards[2]?.card?.info?.name}</li>  */}

                {itemCards.map((item,index)=><li key={item?.card?.info?.id}>{item?.card?.info?.name}: Rs.{item?.card?.info?.price/100||item?.card?.info?.defaultPrice/100}</li>)}
            </ul>
        </div>
    )
}

export default RestaurantMenu;