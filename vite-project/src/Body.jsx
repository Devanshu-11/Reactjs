import { useState } from 'react';
import resFood from '../ResFood.avif';
import resObj from '../raw_data/mockData.json';
import RestaurantCard from './RestaurantCard.jsx';

function Body(){
    // Use State Hooks-
    // It is a function which helps us to add and manage state inside the functional component
    // It basically creates a state variable and Provides a function to update it
    

    const [listOfRestaurants,useListOfRestaurants]=useState(resObj);
    const TopRatedRestaurants=()=>{
        const filteredList=listOfRestaurants.filter((res)=>res.avgRating>4);

        // so here, whenever a states variable updates, react re-renders the component
        useListOfRestaurants(filteredList);
    }

    return(
        <div className="Body">
            <div className='filter'>
                <button className='filter-btn' onClick={TopRatedRestaurants}>Top Rated Restaurants</button>
            </div>

            <div className="search">Search</div>

            <div className="res-container">
                {/* Props- Just passing an argument to the function and props means properties */}
                {/* here we are doing is that passing the properties to the components */}

                {/* Basic props  */}
                {/* <RestaurantCard resName="Meghana Foods" cuisine="Biryani, North Indian,Asian"/> */}

                {/* using the resData */}
                {/* <RestaurantCard resData={resObj[0]}/>
                <RestaurantCard resData={resObj[1]}/>
                <RestaurantCard resData={resObj[2]}/>
                <RestaurantCard resData={resObj[3]}/>
                <RestaurantCard resData={resObj[4]}/> */}

                {/* Using the map function */}
                {/* here we have use key because if key is not there and we have to insert the cards, then it will re-renders all the cards because it will not know where to insert it but if we give them unique id, then it not renders all the restaurant cards instead renders only that restaurant card we have to insert */}
                {/* {resObj.map((restaurant)=> (<RestaurantCard key={restaurant.id} resData={restaurant}/>))} */}

                {listOfRestaurants.map((restaurant)=> (<RestaurantCard key={restaurant.id} resData={restaurant}/>))};

            </div>
        </div>
    )
}

export default Body;

// Virtual Dom- representation of actual dom
// Reconciliation Algorithm-
// 1- Creates a virtual copy of real dom 
// 2- Updates that virtual copy first 
// 3- Compares it with the previous version of virtual dom
// 4- Updates only the changed parts in the real DOM
// The real benifit of virtual dom is that only changes code base will be re-renders