import { useNavigate } from "react-router-dom";
import { Transaction } from "../../../../calculate/showTransactions"

interface Props{
    transactions:Transaction[];
}

const TranactionsList = ({transactions}:Props) => {
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate("/")
        // location.reload();
    }
  return (
    <div>
        {transactions.length>0&&(
            <ul className="p-3">
                {transactions.map((transaction,index)=>(
                    <li key={index} className="m-2">
                        <strong className="text-orange-500">{transaction.from}</strong> owes{" "}
                        <strong className="text-blue-600">{transaction.to}</strong> ${transaction.amount}.
                    </li>
                ))}
            </ul>
        )}    
        <button
         className="p-3 m-2 bg-blue-900 rounded-full hover:scale-95 w-28"
         onClick={handleClick}
        >Done</button>
        </div>
  )
}

export default TranactionsList