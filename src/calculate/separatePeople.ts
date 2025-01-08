import { Person } from "../Layouts/NewTrip/Component/DescriptionPeoples/DescriptionPeoples";

interface Props {
    updatedPeoples: Person[];
    paymentForPerson: number;
}

const separatePeople = ({ updatedPeoples, paymentForPerson }: Props) => {
    const PeoplePlus: Person[] = [];
    const PeopleMinus: Person[] = [];

    // Iterate over the people array
    
    updatedPeoples.forEach((people) => {
        const totalPaid = people.totalPaid ?? 0;
        if (  totalPaid > paymentForPerson) {
            // If the person paid more, add them to PeoplePlus
            PeoplePlus.push(people);
        } else {
            // If the person paid less, add them to PeopleMinus
            PeopleMinus.push(people);
        }
    });

    // Return both arrays (PeoplePlus and PeopleMinus)
    
    
    return { PeoplePlus, PeopleMinus };
};

export default separatePeople;
