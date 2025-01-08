// src/utils/calculateTransactions.ts

import { Person } from "../Layouts/NewTrip/Component/DescriptionPeoples/DescriptionPeoples";
import calculatePaymentForPerson from "./calculatePaymentForPerson";
import separatePeople from "./separatePeople";
import showTransactions, { Transaction } from "./showTransactions";

interface Props {
    peoples: Person[];
}

const calculateTransactions = ({ peoples }: Props):Transaction[] => {
    // Step 1: Calculate the total paid by each person
    const { peoples: updatedPeoples } = calculatePaymentForPerson(peoples);

    // Step 2: Calculate the total amount paid by everyone
    let totalPaid = 0;
    updatedPeoples.forEach((person) => {
        totalPaid += person.items.reduce((acc:number, item) => acc + item.price, 0);
    });

    // Step 3: Calculate the average payment per person
    const numberOfPeople = updatedPeoples.length;
    const paymentForPerson = totalPaid / numberOfPeople;

    // Step 4: Separate people into 'PeoplePlus' (paid more) and 'PeopleMinus' (paid less)
    const { PeopleMinus, PeoplePlus } = separatePeople({
        updatedPeoples,
        paymentForPerson,
    });

    
    
    // Step 5: Get the transaction details for balancing payments
    const { transactions } = showTransactions({
        PeopleMinus,
        PeoplePlus,
        paymentForPerson
    });

    return transactions;
};

export default calculateTransactions;
