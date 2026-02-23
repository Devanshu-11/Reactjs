import {CDN_URL} from './utils/constants.jsx';

const RestaurantCard=(props)=>{
    // In case of using props
    // const {resName,cuisine,rating,deliveryTime}=props;

    // In case of using resData
    const {resData}=props;

    return(
        <div className="res-card bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow min-h-110">
            {/* <img className='res-logo' src={resFood} /> */}

            {/* Previous Version of Passing props */}
            {/* <img className='res-logo' src={CDN_URL+resData.cloudinaryImageId} />
            <h3>{resData.name}</h3>
            <h4>{resData.cuisines.join(", ")}</h4>
            <h4>{resData.avgRating} stars</h4>
            <h4>{resData.costForTwo}</h4>
            <h4>{resData.sla.deliveryTime} minutes</h4> */}

            {/* Passing through the api */}
            <img className='res-logo w-32 h-32 object-cover rounded-lg mb-4' src={CDN_URL+resData?.info?.cloudinaryImageId} />
            <h3 className="text-lg font-semibold mb-1 text-gray-800">{resData?.info?.name}</h3>
            <h4 className="text-sm text-gray-500 mb-2">{resData?.info?.cuisines.join(", ")}</h4>
            <h4 className="text-sm text-yellow-500 font-medium mb-1">{resData?.info?.avgRating} stars</h4>
            <h4 className="text-sm text-gray-600 mb-1">{resData?.info?.costForTwo}</h4>
            <h4 className="text-sm text-gray-600">{resData?.info?.sla?.deliveryTime} minutes</h4>
        </div>
    )
}

// Higher order component
// input- Restaurant Card and output will be promoted restaurant card and basically taken the restaurant card as a input and returning a new component and a component is a function which returns some jsx
export const withPromotedLabel=(RestaurantCard)=>{
    return (props)=>{
        return(
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-md">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;