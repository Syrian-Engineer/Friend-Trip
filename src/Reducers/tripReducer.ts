import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TripState {
    tripTitle:string,
    tripLocation:string
}

const initialState: TripState = {
    tripTitle: "",
    tripLocation: "",
  };

  const tripSlice =createSlice({
    name:"trip",
    initialState,
    reducers:{
        setTripTitle: (state, action: PayloadAction<string>) => {
            state.tripTitle = action.payload;
          },
        setTripLocation: (state,action :  PayloadAction<string>) => {
            state.tripLocation = action.payload;
        }
    }
  })

  // Export actions for use in components'
  export const {setTripTitle , setTripLocation} = tripSlice.actions

  export default tripSlice.reducer
  