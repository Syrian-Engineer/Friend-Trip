import { useSelector } from "react-redux"
import Body from "../Body/Body"
import Header from "../Header/Header"
import NavBar from "../NavBar/NavBar"
import "./Main.css"
import { RootState } from "../../../NewTrip/Component/NewTrip/NewTrip"

const Main = () => {
  const themePage = useSelector((state:RootState) => state.Theme.ThemePage)
  return (
    <div className={` ${themePage?"bg-white text-black":"text-white bg-black"} main-page   relative flex flex-col gap-16 w-full min-h-[60rem] transition duration-300`}>
        <NavBar />
        <Header />
        <Body />
    </div>
  )
}

export default Main