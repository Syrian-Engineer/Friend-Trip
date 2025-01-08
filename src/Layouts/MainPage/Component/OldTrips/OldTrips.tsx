import { useState, useEffect } from "react";
import { db } from "../../../../Configure/firebaseconfig";
import { collection, getDocs } from "firebase/firestore";
import { useSelector } from "react-redux";
import { RootState } from "../../../NewTrip/Component/NewTrip/NewTrip";

interface Trip {
  Id: string;
  names: string[];
  tripLocation: string;
  tripTitle: string;
}

const OldTrips = () => {
  const tripCollectionRef = collection(db, "Trips");
  const [trips ,setTrips] = useState<Trip[]>([]);
  const [filteredTrips, setFilteredTrips] = useState<Trip[]>([]);
  const userEmail = useSelector((state: RootState) => state.user.email); // Get user email from Redux
  const ThemePage = useSelector((state:RootState) => state.Theme.ThemePage);

  console.log(trips);
  

  // Fetch all trips from Firestore
  const getAllTrips = async () => {
    try {
      const querySnapshot = await getDocs(tripCollectionRef); // Get all documents from the "Trips" collection
      const allTrips: Trip[] = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        // id: doc.id, // Ensure you get the document id
      })) as Trip[];

      // After fetching all trips, filter them based on the email
      const filtered = allTrips.filter((trip) => trip.Id === userEmail);
      setTrips(allTrips); // Optionally store all trips if needed for other use cases
      setFilteredTrips(filtered); // Store the filtered trips based on userEmail

      console.log("All trips:", allTrips); // For debugging
      console.log("Filtered trips:", filtered); // For debugging
    } catch (err) {
      console.error("Error fetching trips:", err);
    }
  };

  useEffect(() => {
    if (userEmail) {
      getAllTrips(); // Fetch trips when userEmail is available
    }
  }, [userEmail]);

  return (
    <div className={`oldtrip ${ThemePage?"bg-white text-black":"bg-black text-white"} flex flex-col items-center gap-6 min-h-full w-full  transition duration-300 `}>
      {/* <!-- Header Section --> */}
      <div className="w-1/2 h-1/4 flex flex-col items-center p-6 gap-4">
        <h1 className="text-6xl font-semibold text-blue-900">Old Trips</h1>
      </div>

      {/* <!-- Trip Cards Section --> */}
      <div className="w-full h-fit rounded-xl ">
        <ul className="flex gap-6 flex-wrap overflow-x-auto py-6 px-4">
          {filteredTrips.map((trip) => (
            <li
              key={trip.Id} // Use 'id' as the unique key for each trip
              className="w-72 h-60 p-4 bg-blue-200 rounded-xl mb-6 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h1 className="text-2xl text-blue-700 font-semibold">{trip.tripTitle}</h1>
              <h3 className="text-blue-600">{trip.tripLocation}</h3>
              <div className="mt-2">
                {trip.names.map((name, index) => (
                  <p key={index} className="text-blue-500">
                    {name}
                  </p>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OldTrips;
 