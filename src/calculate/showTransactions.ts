// import { Person } from "../Layouts/NewTrip/DiscriptionPeoples";

// export interface Transaction {
//   from: string;
//   to: string;
//   amount: number;
// }

// interface Props {
//   PeopleMinus: Person[];
//   PeoplePlus: Person[];
//   paymentForPerson:number
// }

// const showTransactions = ({ PeopleMinus, PeoplePlus,paymentForPerson }: Props) => {
//   const transactions: Transaction[] = [];

//   // While there are people who need to pay (PeopleMinus) and people who need to receive (PeoplePlus)
//   while (PeopleMinus.length > 0 && PeoplePlus.length > 0) {
//     const personMinus = PeopleMinus[0];
//     const personPlus = PeoplePlus[0];

//     // Calculate the remaining balance each person has based on the total paid vs. the paymentForPerson
//     const amountMinus = personMinus.totalPaid ?? 0;
//     const amountPlus = personPlus.totalPaid ?? 0;

//     // Calculate the balance: how much does personMinus still owe or is owed, compared to the average payment
//     const balanceMinus = amountMinus - personPlus.totalPaid!;
//     const balancePlus = personPlus.totalPaid! - amountPlus;

//     // If the balanceMinus is greater than balancePlus, personMinus owes personPlus money
//     if (balanceMinus > balancePlus) {
//       transactions.push({
//         from: personMinus.name,
//         to: personPlus.name,
//         amount: balancePlus,
//       });

//       // After the transaction, remove personPlus since they are now fully paid
//       PeoplePlus.shift();
//     } else if (balanceMinus < balancePlus) {
//       // If personPlus owes personMinus money
//       transactions.push({
//         from: personMinus.name,
//         to: personPlus.name,
//         amount: balanceMinus,
//       });

//       // After the transaction, remove personMinus since they are now fully paid
//       PeopleMinus.shift();
//     } else {
//       // If both balances are equal, it means both are settled
//       transactions.push({
//         from: personMinus.name,
//         to: personPlus.name,
//         amount: balanceMinus,
//       });

//       // Remove both from the lists as they are fully paid
//       PeopleMinus.shift();
//       PeoplePlus.shift();
//     }
//   }

//   return { transactions };
// };

// export default showTransactions;



import { Person } from "../Layouts/NewTrip/Component/DescriptionPeoples/DescriptionPeoples";

export interface Transaction {
  from: string;
  to: string;
  amount: number;
}

interface Props {
  PeopleMinus: Person[]; // People who paid less than the paymentForPerson
  PeoplePlus: Person[]; // People who paid more than the paymentForPerson
  paymentForPerson: number; // The ideal amount everyone should have paid
}

const showTransactions = ({ PeopleMinus, PeoplePlus, paymentForPerson }: Props) => {
  const transactions: Transaction[] = [];

  // While there are people who need to pay (PeopleMinus) and people who need to receive (PeoplePlus)
  while (PeopleMinus.length > 0 && PeoplePlus.length > 0) {
    const personMinus = PeopleMinus[0]; // First person in PeopleMinus who owes money
    const personPlus = PeoplePlus[0]; // First person in PeoplePlus who is owed money

    const amountMinus = personMinus.totalPaid ?? 0; // Amount paid by personMinus
    const amountPlus = personPlus.totalPaid ?? 0; // Amount paid by personPlus

    // Calculate the balance each person has relative to the paymentForPerson
    const balanceMinus = paymentForPerson - amountMinus; // How much personMinus still owes
    const balancePlus = amountPlus - paymentForPerson; // How much personPlus overpaid

    // If the balanceMinus is greater than balancePlus, personMinus owes personPlus money
    if (balanceMinus > balancePlus) {
      transactions.push({
        from: personMinus.name,
        to: personPlus.name,
        amount: balancePlus, // PersonMinus pays the full balance due for PersonPlus
      });

      // After the transaction, remove personPlus from the PeoplePlus list (they're fully paid)
      PeoplePlus.shift();
      
      PeopleMinus[0].totalPaid = (personMinus.totalPaid ?? 0) + balancePlus;      
    } 

    // If the balanceMinus is smaller than balancePlus, personMinus can only pay what they owe
    else if (balanceMinus < balancePlus) {
      transactions.push({
        from: personMinus.name,
        to: personPlus.name,
        amount: balanceMinus, // PersonMinus pays as much as they owe
      });

      // After the transaction, remove personMinus from the PeopleMinus list (they're fully paid)
      PeopleMinus.shift();
      
      PeoplePlus[0].totalPaid = (personPlus.totalPaid ?? 0) - balanceMinus;
    } 

    // If both balances are equal, they settle their debt equally
    else {
      transactions.push({
        from: personMinus.name,
        to: personPlus.name,
        amount: balanceMinus, // Both balances are the same, so they settle the debt completely
      });

      // Remove both from the lists as they are now fully paid
      PeopleMinus.shift();
      PeoplePlus.shift();
    }
  }

  return { transactions };
};

export default showTransactions;

