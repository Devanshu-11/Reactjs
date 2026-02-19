import { Link } from 'react-router-dom';
import logoImage from '../restaurantLogo.png';
import { useState,useEffect } from 'react';

function Header(){

    // when we changes the state variable using set variable,react re-render component and all updated value will be stored in state variable
    const [btnNameReact,setBtnNameReact]=useState("Login");

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
        <div className="header">
            <img className='logo' src={logoImage} />
            <div className='nav-items'>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About Us</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <button className='login' onClick={()=>{btnNameReact==='Login'?setBtnNameReact('Logout'): setBtnNameReact('Login')}}>{btnNameReact}</button>
                </ul>
            </div>

        </div>
    )
}

export default Header;