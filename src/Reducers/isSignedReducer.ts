import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface SignedState{
    isSigned:boolean
}

const initialState:SignedState={
    isSigned:false
}

const SignedSlice = createSlice({
    name:"Authinticaiton",
    initialState,
    reducers:{
        setSigned:(state,action:PayloadAction<boolean>) => {
            state.isSigned=action.payload
        }
    }
})

export const {setSigned} = SignedSlice.actions
export default SignedSlice.reducer