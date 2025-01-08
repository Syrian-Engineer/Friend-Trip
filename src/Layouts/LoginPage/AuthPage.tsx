import './AuthPage.css'
import { signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../../Configure/firebaseconfig";
import { useDispatch, useSelector } from 'react-redux';
import { setSigned } from '../../Reducers/isSignedReducer';
import { RootState } from '../NewTrip/Component/NewTrip/NewTrip';
import { setProfilePic, setUserEmail } from '../../Reducers/userReducer';


const AuthPage = () => {
  const [userName, setUserName] = useState<string>("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const isSigned = useSelector((state:RootState)=>state.Authinticaiton.isSigned)

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const email = user.email;
      const profileUrl= user.photoURL

      // To Save the User Information In State Globally
      if(email){
        dispatch(setUserEmail(email))
        console.log(email);
        
      }
      if(profileUrl){
        dispatch(setProfilePic(profileUrl))
      }
      dispatch(setSigned(true));
      
     } catch (err) {
      console.error(err);
    }
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signInWithGoogle();    
    console.log("Submitted");
  };

  // Use effect to navigate once the state updates
  useEffect(()=>{
    if(isSigned){
      navigate("/",{
        state:{userName}
      })
    }
  },[isSigned,userName,navigate])

  const handleVisitor = ()=>{
    navigate("/")
  }
  return (
    <div className="login-page">
      <header>
        <h2>Friends Trip</h2>
        <i>From <b>Engineer Koussai</b> </i>
      </header>

      <form onSubmit={handleLogin}>
        <div className="userName">
          <label htmlFor="userName">UserName</label>
          <input
            type="text"
            value={userName}
            id="userName"
            required
            className='z-10'
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <button 
        className='hover:text-black hover:scale-90 duration-500'
        type="submit">LogIn</button>
      <p 
      className=' absolute bottom-20 bg-gradient-to-l from-[#078e9f] to-[#b4aeae] text-transparent bg-clip-text hover:cursor-pointer z-10 hover:scale-125 transition duration-300 '
      onClick={handleVisitor}
      >Or Stay As A Visitor</p>
      </form>
    </div>
  );
};

export default AuthPage;




