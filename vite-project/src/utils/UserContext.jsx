import { createContext } from "react";

// we will give some piece of information that will holds
const UserContext=createContext({
    loggedInUser: "Default user"
});

export default UserContext;