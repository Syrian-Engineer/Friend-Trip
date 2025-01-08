// import { useState, useEffect } from "react";

// interface UpdateItemsProps {
//     currentDescription: string;
//     currentPrice: number;
//     personIndex: number;
//     itemIndex: number;
//     onItemUpdate: (newDescription: string, newPrice: number, personIndex: number, itemIndex: number) => void;
// }

// const UpdateItems = ({
//     currentDescription,
//     currentPrice,
//     personIndex,
//     itemIndex,
//     onItemUpdate
// }: UpdateItemsProps) => {
//     const [selectedOption, setSelectedOption] = useState("");
//     const [newDescription, setNewDescription] = useState(currentDescription);
//     const [newPrice, setNewPrice] = useState(currentPrice);

//     useEffect(() => {
//         setNewDescription(currentDescription);
//         setNewPrice(currentPrice);
//     }, [currentDescription, currentPrice]);

//     const handleSubmit = () => {
//         // Pass the indices along with the updated description and price
//         onItemUpdate(newDescription, newPrice, personIndex, itemIndex);
//     };

//     return (
//         <div className="text-black">
//             <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
//                 <option value="description">Description</option>
//                 <option value="price">Price</option>
//             </select>

//             {selectedOption === "description" && (
//                 <div>
//                     <input
//                         type="text"
//                         placeholder="Enter New Description"
//                         value={newDescription}
//                         onChange={(e) => setNewDescription(e.target.value)}
//                     />
//                 </div>
//             )}

//             {selectedOption === "price" && (
//                 <div>
//                     <input
//                         type="number"
//                         placeholder="Enter New Price"
//                         value={newPrice}
//                         onChange={(e) => setNewPrice(Number(e.target.value))}
//                     />
//                 </div>
//             )}

//             <button 
//             className='bg-orange-500 p-3  rounded-lg m-1 hover:scale-95'
//             onClick={handleSubmit}
//             >Update Item</button>
//         </div>
//     );
// };

// export default UpdateItems;






import { useState, useEffect } from "react";

interface UpdateItemsProps {
    currentDescription: string;
    currentPrice: number;
    personIndex: number;
    itemIndex: number;
    onItemUpdate: (newDescription: string, newPrice: number, personIndex: number, itemIndex: number) => void;
}

const UpdateItems = ({
    currentDescription,
    currentPrice,
    personIndex,
    itemIndex,
    onItemUpdate
}: UpdateItemsProps) => {
    const [selectedOption, setSelectedOption] = useState("description");
    const [newDescription, setNewDescription] = useState(currentDescription);
    const [newPrice, setNewPrice] = useState(currentPrice);

    useEffect(() => {
        setNewDescription(currentDescription);
        setNewPrice(currentPrice);
    }, [currentDescription, currentPrice]);

    const handleSubmit = () => {
        // Pass the indices along with the updated description and price
        onItemUpdate(newDescription, newPrice, personIndex, itemIndex);
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-lg mx-auto mt-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Update Item</h3>

            <div className="mb-4">
                <label className="block text-sm text-gray-600 mb-2">Choose what to update</label>
                <select
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="description">Description</option>
                    <option value="price">Price</option>
                </select>
            </div>

            {selectedOption === "description" && (
                <div className="mb-4">
                    <label className="block text-sm text-gray-600 mb-2">New Description</label>
                    <input
                        type="text"
                        placeholder="Enter new description"
                        value={newDescription}
                        onChange={(e) => setNewDescription(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            )}

            {selectedOption === "price" && (
                <div className="mb-4">
                    <label className="block text-sm text-gray-600 mb-2">New Price</label>
                    <input
                        type="number"
                        placeholder="Enter new price"
                        value={newPrice}
                        onChange={(e) => setNewPrice(Number(e.target.value))}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            )}

            <div className="flex justify-end">
                <button
                    onClick={handleSubmit}
                    className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-95"
                >
                    Update Item
                </button>
            </div>
        </div>
    );
};

export default UpdateItems;

