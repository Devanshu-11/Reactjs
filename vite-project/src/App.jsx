import './App.css';
import Header from './Header.jsx';
import Body from './Body.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Error from './Error.jsx';
import RestaurantMenu from './RestaurantMenu.jsx';
import { createBrowserRouter,Outlet } from 'react-router-dom';

function App(){
    return(
        <div className="app">
            <Header />
            <Outlet />
            {/* <Body /> */}
        </div>
    )
}

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
                path:"/restaurants/:resId",
                element:<RestaurantMenu />

            }
        ],
        errorElement:<Error />
    },
]);

export default App;