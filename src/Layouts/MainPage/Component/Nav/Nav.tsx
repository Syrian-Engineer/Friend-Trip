import React from "react"
import "./Nav.css"

interface Props{
    Icon:React.ComponentType;
    onClick?:()=>void
}


const Nav = ({Icon,onClick}:Props) => {
  return (
    <div className="nav relative  flex items-center gap-3 overflow-hidden text-white w-fit" onClick={onClick}>
        {Icon  && <Icon  />}
    </div>
  )
}

export default Nav