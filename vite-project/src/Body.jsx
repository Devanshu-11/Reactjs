import { useState,useEffect } from 'react';
import resFood from '../ResFood.avif';
import resObj from '../raw_data/mockData.json';
import resData from '../raw_data/resMock.json';
import RestaurantCard,{ withPromotedLabel } from './RestaurantCard.jsx';
import Shimmer from './Shimmer.jsx';
import useOnlineStatus from './utils/useOnlineStatus.jsx';
import { Link } from 'react-router-dom';

function Body(){
    // Use State Hooks-
    // It is a function which helps us to add and manage state inside the functional component
    // It basically creates a state variable and Provides a function to update it
    const [listOfRestaurants,setListOfRestaurants]=useState([]);
    const [filteredRestaurants,setFilteredRestaurants]=useState([]);
    const [searchText, setSearchText]=useState("");
    const RestaurantCardPromoted=withPromotedLabel(RestaurantCard);

    // fetch the data
    const fetchData= async()=>{
        // const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        // const json=await data.json();

        // just get the mock data for the restaurants instead of using the direct api, because most of the time, api gets changes regularly
        const json=resData;
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // console.log(json);
    }

    // useEffect Hooks-It helps us to perform side effects in the functional component
    // It takes 2 arguments- a callback function and a dependency array and called after the component gets render
    useEffect(()=>{
        fetchData();
    },[]);

    // Find the top rated restaurants
    const TopRatedRestaurants=()=>{
        // const filteredList=listOfRestaurants.filter((res)=>res.avgRating>4);
        const filteredList=listOfRestaurants.filter((res)=>res?.info?.avgRating>4);

        // so here, whenever a states variable updates, react re-renders the functional component
        // setListOfRestaurants(filteredList);

        // update the filtered code
        setFilteredRestaurants(filteredList);
    }

    // Search for the restrurants
    const searchRestaurants=()=>{
        const filteredRestaurant=listOfRestaurants.filter((res)=>res?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredRestaurants(filteredRestaurant);
        // setListOfRestaurants(filteredRestaurant);
    };

    // custom hooks
    const onlineStatus=useOnlineStatus();
    if(onlineStatus===false){
        return(<h1 >Looks Like you are offline!! Please check your internet connection</h1>)
    }

    // Conditional Rendering
    // if(listOfRestaurants.length===0){
    //     return(<Shimmer />);
    // }

    return listOfRestaurants.length===0?(<Shimmer />):(
        <div className="Body">
            <div className='filter'>
                <div className='search flex flex-col md:flex-row items-center gap-4 m-4 p-4 bg-white rounded-lg shadow-md'>

                    <input type='text' className="flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all placeholder-gray-400" value={searchText} placeholder='Enter the name' onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}/>

                    <button className='bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors shadow-md' onClick={searchRestaurants}>Search</button>
                </div>

                <button className='bg-pink-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-pink-600 transition-colors hover:scale-105 transform font-semibold' onClick={TopRatedRestaurants}>Top Rated Restaurants</button>
            </div>

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

                {filteredRestaurants.map((restaurant)=> (
                    <Link key={restaurant?.info?.id} to={'/restaurants/'+restaurant?.info?.id}>
                        {/* if the restaurant is promoted, then add a promoted label to it */}
                        {restaurant?.info?.Promoted? (<RestaurantCardPromoted resData={restaurant} />):(<RestaurantCard resData={restaurant}/>)}
                    </Link>
                ))};

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

// How mostly website loads the Ui-
// 1- It loads the page 
// 2- It renders the Api and make an api call to it 
// 3- As soon as we get the data, it renders it 
// 4- it prevents the user to not see the blank screen, untill the data gets load
// Also we do not have any problem to do rendering twice, because react renders very fast

// React Router DOM updates the URL and renders the corresponding component without reloading the page and due to this, it is called Single Page Application
// 2 types of routing in web apps-
// 1- client side routing
// 2- server side routing