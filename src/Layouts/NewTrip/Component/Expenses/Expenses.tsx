import { useState } from 'react';
import { Person } from '../DescriptionPeoples/DescriptionPeoples';
import UpdateItems from '../UpdateItems/UpdateItems';
import Transactions from '../Transactions/Transactions';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../../Configure/firebaseconfig';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../../../Reducers/currentPageReducer';
import { RootState } from '../NewTrip/NewTrip';

interface Props {
    peoples: Person[];
}

const Expenses = ({ peoples }: Props) => {
    const [peopleState, setPeopleState] = useState(peoples);
    const [updateVisibility, setUpdateVisibility] = useState<{ [key: string]: boolean }>({});
    const [inputVisibility, setInputVisibility] = useState<{ [key: string]: boolean }>({});
    const [submitVisibility, setSubmitVisibility] = useState(false);
    const tripTitle = useSelector((state: RootState) => state.trip.tripTitle); // Fetch From Redux
    const tripLocation = useSelector((state: RootState) => state.trip.tripLocation); // Fetch From Redux
    const email = useSelector((state:RootState) => state.user.email)

    const dispatch = useDispatch();

    // Track the index of the item being updated
    const [currentItemIndex, setCurrentItemIndex] = useState<{ [key: string]: { personIndex: number, itemIndex: number } }>({});

    const handleDelete = (index: number, itemIndex: number) => {
        const updatedPeoples = [...peopleState];
        const personToUpdate = updatedPeoples[index];
        console.log(currentItemIndex);
        
        if (personToUpdate) {
            personToUpdate.items = personToUpdate.items.filter((_, idx) => idx !== itemIndex);
        }

        setPeopleState(updatedPeoples);
    };

    const handleUpdate = (index: number, itemIndex: number) => {
        const key = `${index}-${itemIndex}`;
        setUpdateVisibility(prev => ({ ...prev, [key]: false }));
        setInputVisibility(prev => ({ ...prev, [key]: true }));

        // Set the currentItemIndex with the correct personIndex and itemIndex
        setCurrentItemIndex(prev => ({
            ...prev,
            [key]: { personIndex: index, itemIndex }
        }));
    };

    const handleItemUpdate = (newDescription: string, newPrice: number, personIndex: number, itemIndex: number) => {
        const updatedPeoples = [...peopleState];
        const personToUpdate = updatedPeoples[personIndex];

        if (personToUpdate) {
            const itemToUpdate = personToUpdate.items[itemIndex];
            if (itemToUpdate) {
                // Update item fields based on user input
                itemToUpdate.description = newDescription;
                itemToUpdate.price = newPrice;
            }
        }

        // Update the state
        setPeopleState(updatedPeoples);
        setInputVisibility(prev => ({ ...prev, [`${personIndex}-${itemIndex}`]: false }));
    };

    const TripCollectionRef = collection(db, "Trips");

    const handleSubmit = async () => {
        setSubmitVisibility(true);
        dispatch(setCurrentPage(4));
        console.log(email);
        
        try {
            await addDoc(TripCollectionRef, {
                Id: email,
                tripTitle: tripTitle,
                tripLocation: tripLocation,
                names: peoples.map((people) => people.name)
            });
            console.log("Data Updated");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className='flex flex-col justify-center items-center p-4 bg-gray-50'>
            {!submitVisibility && (
                <>
                    {peopleState.map((people, index) => (
                        <div key={people.id} className="w-full max-w-3xl bg-white p-6 rounded-xl shadow-lg mb-6">
                            <h2 className='text-center text-3xl font-semibold text-blue-600 mb-4'>{people.name}</h2>
                            {people.items.map((item, itemIndex) => {
                                const key = `${index}-${itemIndex}`;
                                return (
                                    <ul key={itemIndex} className="space-y-2">
                                        <li className='text-lg font-light text-gray-700'>
                                            <span className='font-medium'>{item.description}</span> : {item.price.toFixed(2)} .SP
                                        </li>
                                        <div className="flex gap-4">
                                            <button
                                                className='bg-red-600 h-16 text-white py-2 px-4 rounded-lg hover:bg-red-700 hover:scale-95 transition-transform'
                                                onClick={() => handleDelete(index, itemIndex)}
                                            >Delete</button>
                                            {!updateVisibility[key] && (
                                                <button
                                                    className='bg-orange-500 h-16 text-white py-2 px-4 rounded-lg hover:bg-orange-600 hover:scale-95 transition-transform'
                                                    onClick={() => handleUpdate(index, itemIndex)}
                                                >Update</button>
                                            )}
                                            {inputVisibility[key] && (
                                                <UpdateItems
                                                    currentDescription={item.description}
                                                    currentPrice={item.price}
                                                    personIndex={index}
                                                    itemIndex={itemIndex}
                                                    onItemUpdate={handleItemUpdate}
                                                />
                                            )}
                                        </div>
                                    </ul>
                                );
                            })}
                        </div>
                    ))}
                    <button
                        className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 hover:scale-95 w-32 transition-transform"
                        onClick={handleSubmit}
                    >Next</button>
                </>
            )}
            {submitVisibility && <Transactions peoples={peopleState} />}
        </div>
    );
};

export default Expenses;
