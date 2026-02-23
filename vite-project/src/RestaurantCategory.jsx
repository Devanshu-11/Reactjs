import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory=({data})=>{
    const [showItems, setShowItems]=useState(false);

    const handleClick=()=>{
        setShowItems(!showItems);
    }

    return(
        <div>
            {/* Header */}
            <div className="w-full bg-gray-100 shadow-lg p-6 my-8 cursor-pointer rounded-lg">
                <div onClick={handleClick}>
                    <span className="text-lg my-4">{data?.title} - ({data.itemCards.length})</span>
                </div>

                {/* Acordian Body */}
                {showItems&& <ItemList items={data.itemCards}/>}
            </div>

        </div>
    )
}

export default RestaurantCategory;