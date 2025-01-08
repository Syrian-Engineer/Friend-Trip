import { useEffect, useState } from "react";
import calculateTransactions from "../../../../calculate/calculateTransactions";
import { Person } from "../DescriptionPeoples/DescriptionPeoples"
import { Transaction } from "../../../../calculate/showTransactions";
import TranactionsList from "../TranactionsList/TranactionsList";

interface Props{
    peoples:Person[];
}
const Transactions = ({peoples}:Props) => {
  const [transactions,setTransactions] = useState<Transaction[]>([])

  // Calculate the transactions when the component mounts
  useEffect(()=>{
    const transactions = calculateTransactions({peoples})
    setTransactions(transactions)

  },[peoples])
  return (
    <div>
        <h1 className="text-3xl font-semibold mb-2 text-blue-500">Transactions</h1>
        <TranactionsList transactions={transactions} />

        
    </div>
  )
}

export default Transactions