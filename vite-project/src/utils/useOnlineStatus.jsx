import { useEffect, useState } from "react";

const useOnlineStatus=()=>{
    const [onlineStatus,setOnlineStatus]=useState(true);

    // check if user is online or not
    useEffect(()=>{

        // for offline status
        window.addEventListener("offline",()=>{
            setOnlineStatus(false);
        });

        // for online status
        window.addEventListener("online",()=>{
            setOnlineStatus(true);
        });
    },[]);

    return onlineStatus;
}

export default useOnlineStatus;