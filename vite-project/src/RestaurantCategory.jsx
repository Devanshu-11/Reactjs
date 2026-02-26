import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory=({data, showItems,setShowIndex, dummy})=>{
    const handleClick=()=>{
        setShowIndex();
    }

    return(
        <div>
            {/* Header */}
            <div className="w-full bg-gray-100 shadow-lg p-6 my-8 cursor-pointer rounded-lg">
                <div onClick={handleClick}>
                    <span className="text-lg my-4">{data?.title} - ({data.itemCards.length})</span>
                </div>

                {/* Acordian Body */}
                {showItems&& <ItemList items={data.itemCards} dummy={dummy} />}
            </div>

        </div>
    )
}

export default RestaurantCategory;