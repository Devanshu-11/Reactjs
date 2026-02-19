import { useEffect } from "react";

const RestaurantMenu=()=>{
    useEffect(()=>{
        fetchMenu();
    },[]);

    

    return(
        <div className="menu">
            <h1>Name of the restaurant</h1>
            <h2>Menu</h2>
            <ul className="res-menu-items">
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet Coke</li>

            </ul>
        </div>
    )
}

export default RestaurantMenu;