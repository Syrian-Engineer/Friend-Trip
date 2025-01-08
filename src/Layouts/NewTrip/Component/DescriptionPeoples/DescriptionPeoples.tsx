import { useState } from "react";
import Expenses from "../Expenses/Expenses";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../../../Reducers/currentPageReducer";

interface Props {
    numberOfPeople: number;
}

export interface Person {
    id: number;
    name: string;
    items: Item[];
    totalPaid : number;
}

interface Item {
    description: string;
    price: number;
}

const DescriptionPeoples = ({ numberOfPeople }: Props) => {
    const dispatch = useDispatch();
    const [people, setPeople] = useState<Person[]>([]);
    const [isVisible, setVisibility] = useState(false);

    // Initialize the people array based on the numberOfPeople prop
    if (people.length !== numberOfPeople) {
        const newPeople = Array.from({ length: numberOfPeople }, (_, index) => ({
            id: index,
            name: '',
            items: [],
            totalPaid: 0
        }));
        setPeople(newPeople);
    }

    // Handle name change for a specific person
    const handleNameChange = (index: number, name: string) => {
        const updatedPeople = [...people];
        updatedPeople[index].name = name;
        setPeople(updatedPeople);
    };

    // Handle number of items change for a specific person
    const handleNumberOfItemsChange = (index: number, numberOfItems: number) => {
        const updatedPeople = [...people];
        updatedPeople[index].items = Array.from({ length: numberOfItems }, () => ({ description: '', price: 0 }));
        setPeople(updatedPeople);
    };

    // Handle individual item changes (description or price)
    const handleItemChange = (personIndex: number, itemIndex: number, field: 'description' | 'price', value: string | number) => {
        const updatedPeople = [...people];
        const updatedItem = { ...updatedPeople[personIndex].items[itemIndex], [field]: value };
        updatedPeople[personIndex].items[itemIndex] = updatedItem;
        setPeople(updatedPeople);
    };

    const handleClick = () => {
        setVisibility(true); // Set visibility to true to show Expenses component
        dispatch(setCurrentPage(3)); // Dispatch action to change the page
        // window.localStorage.setItem("email","morhaf@gmail.com");
    };

    return (
        <div className="relative flex flex-col items-center">
            {!isVisible && (
                <>
                    {people.map((person, index) => (
                        <div key={person.id} className="w-full text-black flex flex-col items-center gap-2">
                            <h3 className="font-bold text-2xl font-sans mt-2 text-blue-400">Person {index + 1}</h3>
                            <input
                                className="w-3/4 p-2 border-2 border-blue-200 rounded-full hover:outline-none  focus:border-blue-400 transition duration-300"
                                type="text"
                                placeholder={`Name of person ${index + 1}`}
                                value={person.name}
                                onChange={(e) => handleNameChange(index, e.target.value)}
                            />
                            <input
                                type="number"
                                className="w-3/4 p-2 border-2 border-blue-200 rounded-full hover:outline-none  focus:border-blue-400 transition duration-300"
                                placeholder="عدد الأغراض"
                                onChange={(e) => handleNumberOfItemsChange(index, Number(e.target.value))}
                            />
                            
                            {person.items.map((item, itemIndex) => (
                                    <form key={itemIndex} className=" ">
                                        <input
                                        className=" p-2 border-2 border-blue-200 rounded-full hover:outline-none  focus:border-blue-400 transition duration-300"
                                        type="text"
                                            required
                                            placeholder="Item description"
                                            value={item.description}
                                            onChange={(e) => handleItemChange(index, itemIndex, 'description', e.target.value)}
                                        />
                                        <input
                                        className=" p-2 border-2 border-blue-200 rounded-full hover:outline-none  focus:border-blue-400 transition duration-300"
                                        type="number"
                                            placeholder="Item price"
                                            required
                                            value={item.price}
                                            onChange={(e) => handleItemChange(index, itemIndex, 'price', Number(e.target.value))}
                                        />
                                    </form>
                            ))}
                            <div className="w-1/2 h-0.5 bg-gray-900 mt-2 "></div>
                        </div>
                    ))}
                    <button
                        className="text-white p-3 m-2 bg-blue-400 rounded-full hover:scale-90 w-28 hover:bg-blue-500 transition duration-300 hover:text-black"
                        type="submit"
                        onClick={handleClick}
                    >
                        Next
                    </button>
                </>
            )}

            {/* Conditionally render Expenses component */}
            {isVisible && <Expenses peoples={people} />}
        </div>
    );
};

export default DescriptionPeoples;
