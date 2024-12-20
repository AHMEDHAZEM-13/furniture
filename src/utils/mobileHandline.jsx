import React, { createContext, useEffect, useState } from "react";

const MobileHandlerContext = createContext();
 MobileHandlerProvider = ({ children }) => {
    const [isMobile, setIsMobile] = useState();
    const[openmune, setOpenMune] = useState(false);
    const isMobileHandler = (e)=>{
        setIsMobile(e.matches);
    };
    useEffect(()=>{
        window.matchMedia("(max-width: 1024)").addEventListener("change", isMobileHandler);
        setIsMobile(window.matchMedia("(max-width: 1024)").matches);
    })
    return <MobileHandlerContext.Provider value={{isMobile , openmune, setOpenMune}}>{children}</MobileHandlerContext.Provider>
};
export {MobileHandlerContext, MobileHandlerProvider};