// src/hooks/useLogout.ts
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import {auth} from "../Configure/firebaseconfig";
import { setSigned } from "../Reducers/isSignedReducer";
import { useNavigate } from "react-router-dom";
import { setUserEmail } from "../Reducers/userReducer";

const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await signOut(auth);
      dispatch(setSigned(false));
      dispatch(setUserEmail(""));
      console.log("Logged Out");
      navigate("/Auth"); // Redirect to login or auth page after logging out
    } catch (err) {
      console.error("Error logging out: ", err);
    }
  };

  return logout;
};

export default useLogout;
