import React, { useEffect, useState } from "react";

const NetConn = () =>{
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    const name = "maran"
    const updateNetStatus = () =>{
        setIsOnline(navigator.onLine);
    };

    useEffect(()=>{
        window.addEventListener('online', updateNetStatus);
        window.addEventListener('offline', updateNetStatus);
        
        return()=>{
            window.removeEventListener('online', updateNetStatus);
            window.removeEventListener('offline', updateNetStatus);

        }
    },[])
    

    return(
        <>
            {!isOnline?alert("you are in offline"):""}  
            
        </>
    )
}

export default NetConn