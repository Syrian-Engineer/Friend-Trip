import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import {setUserName } from "../../Reducers/userReducer";
import Navigation from "./Component/Navigation/Navigation";
import Main from "./Component/Main/Main";
import { RootState } from "../NewTrip/Component/NewTrip/NewTrip";
import { useEffect } from "react";

const HomePage = () => {
    const isSigned = useSelector((state:RootState)=>state.Authinticaiton.isSigned)
    const location = useLocation();
    const {userName} = location.state || {}
    
    const dispatch = useDispatch();
        dispatch(setUserName(userName))
    
        useEffect(()=>{
            const handleBeforeUnload =(e: BeforeUnloadEvent)=>{
                e.preventDefault();
                e.returnValue ="";
            }
            window.addEventListener("beforeunload",handleBeforeUnload)

            return ()=>{
                window.removeEventListener("beforeunload",handleBeforeUnload)
            }
        })

    return (
        // Notice
        <div className="flex"  >
            {isSigned && (
                <Navigation/>
            )}
            <Main />
            
            <Outlet  />
      </div>
)
}

export default HomePage