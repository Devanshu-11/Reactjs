import { createBrowserRouter,Outlet } from 'react-router-dom';
import { lazy,Suspense, useEffect, useState } from 'react';
import { useContext } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Header from './Header.jsx';
import Body from './Body.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Error from './Error.jsx';
import RestaurantMenu from './RestaurantMenu.jsx';
// import Grocery from './Grocery.jsx';
import Shimmer from './Shimmer.jsx';
import UserContext from './utils/UserContext.jsx';
import appStore from './utils/appStore.jsx';
import Cart from './Cart.jsx';

// Redux Toolkit-
// Redux is needed to manage global state across an app in a predictable and centralized way
// We dispatch an action. Redux receives that action and passes it to the reducer. The reducer then updates the global state
// Selector-It is used to read the specific data from the global state and this phenomenon is known as subscribing to the store

function App(){
    const [userName, setUserName]=useState();

    // useEffect hook
    useEffect(()=>{
        const data={
            name: "Devanshu",
        }

        setUserName(data.name);
    },[]);

    return(
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
                <div className="app">

                    {/* We can also do that here */}
                    {/* <UserContext.Provider value={{loggedInUser: "Elon Musk", setUserName}}> */}
                        <Header />
                    {/* </UserContext.Provider> */}
                    <Outlet />

                    {/* <Body /> */}
                </div>
            </UserContext.Provider>
        </Provider>
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
                element:<Body />,
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
                element:<RestaurantMenu />,

            },
            {
                path:"/cart",
                element:<Cart />,
            }
        ],
        errorElement:<Error />,
    },
]);

export default App;