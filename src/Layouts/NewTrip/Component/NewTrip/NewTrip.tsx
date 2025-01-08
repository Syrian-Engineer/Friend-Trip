import React, { useState } from "react";
import DiscriptionPeoples from "../DescriptionPeoples/DescriptionPeoples";
import { useDispatch, useSelector } from "react-redux";
import { setTripLocation, setTripTitle } from "../../../../Reducers/tripReducer";
import Nav from "../Nav/Nav";
import { setCurrentPage } from "../../../../Reducers/currentPageReducer";

export interface RootState {
  trip: {
    tripTitle: string;
    tripLocation: string;
  };
  page: {
    currentPage: number;
  };
  Authinticaiton:{
    isSigned:boolean
  };
  user:{
    userName:string,
    email:string,
    profilePic:string
  };
  Theme:{
    ThemePage:boolean
  }

}

const NewTrip = () => {
  const dispatch = useDispatch();
  const tripTitle = useSelector((state: RootState) => state.trip.tripTitle);
  const tripLocation = useSelector((state: RootState) => state.trip.tripLocation);
  const currentPage = useSelector((state: RootState) => state.page.currentPage);

  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [isFormSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    dispatch(setCurrentPage(2));
  };

  return (
    <div className=" w-full min-h-lvh bg-gray-900 flex justify-center items-center">
      <div className=" relative w-1/2  p-6 rounded-lg bg-white  shadow-lg">
        <div className="absolute top-1  w-full ">
          <Nav currentPage={currentPage} />
        </div>

        {!isFormSubmitted ? (
          <form onSubmit={handleSubmit} className=" flex flex-col items-center space-y-4">
            <label className="text-blue-600 text-lg">Trip Title</label>
            <input
              className="border-2 border-blue-300 rounded-full p-2 w-full hover:outline-none"
              type="text"
              required
              value={tripTitle}
              onChange={(e) => dispatch(setTripTitle(e.target.value))}
            />
            <label className="text-blue-600 text-lg">Trip Location</label>
            <input
              className="border-2 border-blue-300 rounded-full p-2 w-full hover:outline-none"
              type="text"
              required
              value={tripLocation}
              onChange={(e) => dispatch(setTripLocation(e.target.value))}
            />
            <label className="text-blue-600 text-lg">Number of People</label>
            <input
              className="border-2 border-blue-300 rounded-full p-2 w-full hover:outline-none"
              type="number"
              required
              onChange={(e) => setNumberOfPeople(Number(e.target.value))}
            />
            <button
              className="bg-blue-300 text-white p-3 rounded-full w-28 hover:scale-90 transition hover:bg-blue-400 duration-300 hover:text-black"
              type="submit"
            >
              Next
            </button>
          </form>
        ) : (
          <DiscriptionPeoples numberOfPeople={numberOfPeople} />
        )}
      </div>
    </div>
  );
};

export default NewTrip;
