import logoImage from '../restaurantLogo.png';
import { useState } from 'react';

function Header(){

    // when we changes the state variable using set variable,react re-render component and all updated value will be stored in state variable
    const [btnNameReact,setBtnNameReact]=useState("Login");

    return(
        <div className="header">
            <img className='logo' src={logoImage} />
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className='login' onClick={()=>{btnNameReact==='Login'?setBtnNameReact('Logout'): setBtnNameReact('Login')}}>{btnNameReact}</button>
                </ul>
            </div>

        </div>
    )
}

export default Header;