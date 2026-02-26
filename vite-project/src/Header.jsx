import { Link } from 'react-router-dom';
import { useState,useEffect, useContext } from 'react';
import logoImage from '../restaurantLogo.png';
import useOnlineStatus from './utils/useOnlineStatus.jsx';
import UserContext from './utils/UserContext.jsx';

function Header(){

    // when we changes the state variable using set variable,react re-render component and all updated value will be stored in state variable
    const [btnNameReact,setBtnNameReact]=useState("Login");
    const onlineStatus=useOnlineStatus();

    // getting the user context data
    const {loggedInUser}=useContext(UserContext);

    // useEffect hooks
    // if does not have dependency array, it will render every time, my component gets render
    // useEffect(()=>{
    //     console.log("useEffect is called");
    // });

    // if variable is there in the dependency array, then useEffect is called every time, when btnNameReact is updated
    // useEffect(()=>{
    //     console.log("useEffect is called");
    // },[btnNameReact]);

    // if dependency array is empty, then it will called on only initial render and just once
    // useEffect(()=>{
    //     console.log("useEffect is called");
    // },[]);

    return(
        <div className="flex justify-between items-center bg-pink-100 shadow-md px-6 py-3 h-28">
            <div className='logo-container'>
                <img className='w-20 rounded-lg' src={logoImage} />
            </div>

            <div className='nav-items'>
                <ul className='flex items-center gap-6 font-medium text-gray-700 m-0 p-0'>
                    <li className={`${onlineStatus ? "text-green-600" : "text-red-600"} font-semibold`}>Status: {onlineStatus? "online": "offline"}</li>

                    <li className='hover:text-pink-600 cursor-pointer'>
                        <Link to='/'>Home</Link>
                    </li>

                    <li className='hover:text-pink-600 cursor-pointer'>
                        <Link to='/about'>About Us</Link>
                    </li>

                    <li className='hover:text-pink-600 cursor-pointer'>
                        <Link to='/contact'>Contact Us</Link>
                    </li>

                    <li className='hover:text-pink-600 cursor-pointer'>
                        <Link to='/grocery'>Grocery</Link>
                    </li>

                    <li className='hover:text-pink-600 cursor-pointer'>Cart</li>

                    <button className='text-gray-700 hover:text-pink-600 cursor-pointer text-base px-1 py-0.5' onClick={()=>{btnNameReact==='Login'?setBtnNameReact('Logout'): setBtnNameReact('Login')}}>{btnNameReact}</button>

                    {/* use the context api here */}
                    <li className='hover:text-pink-600 cursor-pointer'>{loggedInUser}</li>
                </ul>
            </div>

        </div>
    )
}

export default Header;