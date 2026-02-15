import logoImage from '../restaurantLogo.png';

function Header(){
    return(
        <div className="header">
            <img className='logo' src={logoImage} />
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    )
}

export default Header;