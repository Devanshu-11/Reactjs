import {CDN_URL} from './utils/constants.jsx';

const RestaurantCard=(props)=>{
    // In case of using props
    // const {resName,cuisine,rating,deliveryTime}=props;

    // In case of using resData
    const {resData}=props;

    return(
        <div className="res-card">
            {/* <img className='res-logo' src={resFood} /> */}

            {/* Previous Version of Passing props */}
            {/* <img className='res-logo' src={CDN_URL+resData.cloudinaryImageId} />
            <h3>{resData.name}</h3>
            <h4>{resData.cuisines.join(", ")}</h4>
            <h4>{resData.avgRating} stars</h4>
            <h4>{resData.costForTwo}</h4>
            <h4>{resData.sla.deliveryTime} minutes</h4> */}

            {/* Passing through the api */}
            <img className='res-logo' src={CDN_URL+resData?.info?.cloudinaryImageId} />
            <h3>{resData?.info?.name}</h3>
            <h4>{resData?.info?.cuisines.join(", ")}</h4>
            <h4>{resData?.info?.avgRating} stars</h4>
            <h4>{resData?.info?.costForTwo}</h4>
            <h4>{resData?.info?.sla?.deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard;