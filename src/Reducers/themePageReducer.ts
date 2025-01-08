import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface themeState{
    ThemePage:boolean
}

const initialState:themeState = {
    ThemePage:true
}


const themeSlice = createSlice({
    name:"Theme",
    initialState,
    reducers:{
        setThemePage:(state,action:PayloadAction<boolean>) => {
            state.ThemePage=action.payload
        }
    }
}) 
 
export const {setThemePage} = themeSlice.actions


export default themeSlice.reducer