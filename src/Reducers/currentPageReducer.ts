import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface currentPageState{
    currentPage:number
}

const initialState:currentPageState = {
    currentPage: 1
}

const pageSlice = createSlice({
    name:"page",
    initialState,
    reducers:{
        setCurrentPage:(state , action : PayloadAction<number>)=>{
            state.currentPage = action.payload
        }

    } 
})

export const{setCurrentPage} = pageSlice.actions

export default pageSlice.reducer