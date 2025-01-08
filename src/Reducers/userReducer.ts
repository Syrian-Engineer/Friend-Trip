import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface userState{
    userName:string,
    email:string,
    profilePic:string
}

const initialState:userState = {
    userName:"",
    email:"",
    profilePic:""
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUserName :(state , action : PayloadAction<string>) =>{
            state.userName = action.payload
        },
        setUserEmail :(state,action: PayloadAction<string>)=>{
            state.email = action.payload
        },
        setProfilePic :(state,action :PayloadAction<string>)=>{
            state.profilePic=action.payload
        }
    }
})

export const {setUserName,setUserEmail,setProfilePic} = userSlice.actions

export default userSlice.reducer
    
    
