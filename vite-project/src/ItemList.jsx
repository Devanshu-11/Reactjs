import {CDN_URL} from './utils/constants.jsx';

const ItemList=({items})=>{
    return(
        <div className='bg-white rounded-xl shadow-md'>
            {items.map(item=> (
                <div key={item?.card?.info?.id} className="p-5 m-4 border-b border-gray-100 flex items-start gap-4 ">
                    <div>
                        <img src={CDN_URL+ item?.card?.info?.imageId} className='w-24 h-24 object-cover rounded-lg shadow-sm'></img>
                        <button className='mt-3 px-4 py-1.5 bg-green-500 text-white text-sm font-semibold rounded-lg shadow-sm hover:cursor-pointer'>Add +</button>
                    </div>

                    <div className='flex flex-col'>
                        <div className="p-2">
                            <span className="block text-lg font-semibold text-gray-800">{item?.card?.info?.name}</span>
                            <span className="block text-green-600 font-medium mt-1">- {item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100} Ruppees</span>
                        </div >

                        <p className="text-sm text-gray-600 leading-relaxed px-2">{item?.card?.info?.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList;