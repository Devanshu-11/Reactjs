import resFood from '../ResFood.avif';
import resObj from '../raw_data/mockData.json';

const RestaurantCard=(props)=>{
    // In case of using props
    // const {resName,cuisine,rating,deliveryTime}=props;

    // In case of using resData
    const {resData}=props;

    return(
        <div className="res-card">
            {/* <img className='res-logo' src={resFood} /> */}

            <img className='res-logo' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+resData.cloudinaryImageId} />
            <h3>{resData.name}</h3>
            <h4>{resData.cuisines.join(", ")}</h4>
            <h4>{resData.avgRating} stars</h4>
            <h4>{resData.costForTwo}</h4>
            <h4>{resData.sla.deliveryTime} minutes</h4>
        </div>
    )
}

function Body(){
    return(
        <div className="Body">
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
                {resObj.map((restaurant)=> (<RestaurantCard key={restaurant.id} resData={restaurant}/>))}

            </div>
        </div>
    )
}

export default Body;