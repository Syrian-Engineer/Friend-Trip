import { useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";
import NavBarItems from "../NavBarItems/NavBarItems";
import "./NavBar.css";
import {  useSelector } from "react-redux";
import { RootState } from "../../../NewTrip/Component/NewTrip/NewTrip";
import useLogout from "../../../../hooks/UseLogOut";

const NavBar = () => {
  const navigate = useNavigate();
  const isSigned = useSelector((state:RootState)=>state.Authinticaiton.isSigned)
  const logout = useLogout();
  const handleClick = ()=>{
    navigate("/Auth")
  }

  return (
    <div className="header w-full  bg-blue-400  relative flex items-center justify-between p-10 ">
      {/* Logo now positioned at the left edge of the NavBar */}
      
        <div>
          <Logo/>
        </div>
      

      <div className="hidden md:flex justify-between w-2/3">
        <NavBarItems title="Discover" />
        <NavBarItems title="Services" />
        <NavBarItems title="Community" />
        <NavBarItems title="About Us" />
        <div className="flex gap-6">
        {isSigned && <div onClick={logout}>
          <NavBarItems title="LogOut" />
        </div>}
        {!isSigned && <div onClick={handleClick}>
          <NavBarItems title="Register" />
        </div>}
        </div>
      </div>
      <div className="links relative block md:hidden ">
                    <span className="icon w-7 flex flex-wrap justify-end">
                        <span className="w-full"></span>
                        <span className="w-2/3 "></span>
                        <span className="w-full"></span>
                    </span>
                    <ul className="hidden p-0 m-0 absolute min-w-48 right-0">
                        <li><a href="#services">Services</a></li>
                        <li><a href="#protofoil">Protofoil</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
      </div>    
    </div>
  );
};

export default NavBar;
