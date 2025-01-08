import { useEffect, useState } from "react";
import "./NavBarItems.css"

interface Props{
    title:string,
}


const NavBarItems = ({title}:Props) => {
    const [register,setRegister] = useState(false);
    useEffect(()=>{
        if(title === "Register")
        {
            setRegister(true);
        }else{
            setRegister(false)
        }
    },[title])
  return (
    
    <>
        {register ? (
            
                <div className="bg-[#015C92] p-3   flex  gap-20 rounded-full   items-center hover:cursor-pointer hover:scale-90 transition duration-300 hover:text-black">
                    <p className="">{title}</p>
                 </div>
        ):(
        <div className="flex gap-20 items-center hover:cursor-pointer">
            <p>{title}</p>
        </div>
        )}
        
    </>
    
  )
}

export default NavBarItems