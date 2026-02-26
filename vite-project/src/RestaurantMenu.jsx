import { useState,useEffect } from "react";
import { useParams } from 'react-router-dom';
import Shimmer from "./Shimmer.jsx";
import mockResMenu from '../raw_data/mockResMenu.json';
import useRestaurantMenu from "./utils/useRestaurantMenu.jsx";
import RestaurantCategory from "./RestaurantCategory.jsx";

const RestaurantMenu=()=>{
    // by default, only first index is 0
    const [showIndex, setShowIndex]=useState(null);
    // const [resInfo,setResInfo]=useState(null);
    const {resId}=useParams();
    const dummy="Dummy Data";

    // custom hooks
    const resInfo=useRestaurantMenu(resId);
    // console.log(resInfo);

    if(!resInfo){
        return <Shimmer />;
    }

    // getting all the categories
    const categories=resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log(categories);

    // get the items cards
    const {itemCards}=resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card||[];

    return(
        <div className="text-center">
            <h1 className="my-4 font-bold text-2xl">{resInfo?.data?.cards[0]?.card?.card?.info?.name}</h1>
            <h3 className="text-lg">{resInfo?.data?.cards[0]?.card?.card?.info?.cuisines.join(", ")}</h3>
            <h3>{resInfo?.data?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3>
            {/* <h2>Menu</h2> */}
            {/* <ul className="res-menu-items"> */}
                {/* <li>{itemCards[0]?.card?.info?.name}</li>
                <li>{itemCards[1]?.card?.info?.name}</li>
                <li>{itemCards[2]?.card?.info?.name}</li>  */}

                {/* {itemCards.map((item,index)=><li key={item?.card?.info?.id}>{item?.card?.info?.name}: Rs.{item?.card?.info?.price/100||item?.card?.info?.defaultPrice/100}</li>)} */}
            {/* </ul> */}

            {/* categories accordions and also a controlled component */}
            {/* Also indirectly calling useState from child to parent component using the function */}
            {categories.map((category,index)=>(<RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card} showItems={index===showIndex?true:false} setShowIndex={()=>setShowIndex(index) } dummy={dummy}/>))}

        </div>
    )
}

export default RestaurantMenu;

// Props Drilling-It means that passing the data through several components just to get it to the one that actually needs it, means we are passing data from parent to deeply nested child component