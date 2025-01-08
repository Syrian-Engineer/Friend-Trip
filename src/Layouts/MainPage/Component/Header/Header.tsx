import { useNavigate } from 'react-router-dom'
import './Header.css'
import { useSelector } from 'react-redux';
import { RootState } from '../../../NewTrip/Component/NewTrip/NewTrip';
const Header = () => {
  const ThemePage = useSelector((state:RootState) => state.Theme.ThemePage);

  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate("/newTrip");
  }

  return (
    <header className={`${ThemePage?"bg-white text-black":"bg-black text-white"}    flex items-center justify-around transition duration-300`}>
        <div className="text   w-96   h-64  text-center  ">
            <h1 className='text-6xl font-bold font-sans '>Live Your <span className='font-mono  '> Adventure</span></h1>
            <p className='text-sm font-extralight'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt temporibus perspiciatis n
                eque expedita cum, aut ipsum cumque distinctio perferendis adipisci beatae a
                lias nisi vero accusantium error voluptas libero in ipsam?</p>

            <h3 className='text-2xl mt-1'>Create beautiful <span className='font-mono '>memories</span></h3>
            <button className='text-white mt-5 p-3 rounded-full hover:scale-90 transition duration-300 hover:text-black' onClick={handleClick}>Add New Trip</button>
          </div>
          <div className='relative w-[30rem] h-[20rem] '>
            <div className='slogan w-[25rem] h-[20rem] absolute rounded-full left-0  '>
            </div>
            <img src="/Images/Untitled-3.png" alt=""  className='slogan-img  right-20 absolute w-[25rem] -bottom-5 rounded-full  '/>
          </div>
    </header>
  )
}

export default Header

// absolute right-0 bottom-0 bg-violet-400 border-r-0 rounded-full