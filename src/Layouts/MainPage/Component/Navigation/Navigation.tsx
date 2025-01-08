import Nav from "../Nav/Nav";
import "./Navigation.css";
import { FiMessageSquare } from "react-icons/fi";
import { HiMoon, HiOutlineLogout, HiSun } from "react-icons/hi";
import useLogout from "../../../../hooks/UseLogOut";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../NewTrip/Component/NewTrip/NewTrip";
import { setThemePage } from "../../../../Reducers/themePageReducer";

const Navigation = () => {
  const ThemePage = useSelector((state:RootState)=>state.Theme.ThemePage)
  const dispatch = useDispatch();

  const handleTheme = ()=>{
    dispatch(setThemePage(!ThemePage))
    console.log(ThemePage);
    
  }

  const logout = useLogout();

  return (
    <div className="navigation hidden relative lg:flex flex-col w-16 min-h-lvh p-5 items-center overflow-hidden gap-10">
      
        <img
          src="/src/assets/images/IMG_20231025_195533_009.jpg" // Use the profilePic directly
          alt="Profile Pic"
          className="profile-img w-16 border-0 rounded-full"
        />
      

      <div className="flex flex-col gap-20 p-4 text-xl">
        <Nav Icon={ThemePage?HiMoon:HiSun} onClick={handleTheme}/>
        <Nav Icon={FiMessageSquare} />
        <Nav Icon={HiOutlineLogout} onClick={logout} />
      </div>

    </div>
  );
};

export default Navigation;
