import './App.css';
import Header from './Header.jsx';
import Body from './Body.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Error from './Error.jsx';
import RestaurantMenu from './RestaurantMenu.jsx';
// import Grocery from './Grocery.jsx';
import { createBrowserRouter,Outlet } from 'react-router-dom';
import { lazy,Suspense } from 'react';
import Shimmer from './Shimmer.jsx';

function App(){
    return(
        <div className="app">
            <Header />
            <Outlet />
            {/* <Body /> */}
        </div>
    )
}

const Grocery=lazy(()=>import("./Grocery.jsx"));

export const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<App />,
        children:[
            {
                path:"/",
                element:<Body />
            },
            {
                path:"/about",
                element:<About />,
            },
            {
                path:"/contact",
                element:<Contact />,
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading....</h1>} ><Grocery /></Suspense>,
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu />

            }
        ],
        errorElement:<Error />
    },
]);

export default App;