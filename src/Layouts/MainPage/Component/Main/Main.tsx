import Body from "../Body/Body"
import Header from "../Header/Header"
import NavBar from "../NavBar/NavBar"
import "./Main.css"

const Main = () => {
  return (
    <div className=" main-page   relative flex flex-col gap-16 w-full min-h-[60rem] text-white  ">
        <NavBar />
        <Header />
        <Body />
    </div>
  )
}

export default Main