// src/utils/calculatePaymentForPerson.ts

import { Person} from "../Layouts/NewTrip/Component/DescriptionPeoples/DescriptionPeoples";

const calculatePaymentForPerson = (peoples: Person[]): { peoples: Person[] } => {
    const updatedPeoples = peoples.map(person => {
        const totalPaid = person.items.reduce((acc, item) => acc + item.price, 0);
        return {
            ...person,
            totalPaid
        };
    });

    return { peoples: updatedPeoples };
};

export default calculatePaymentForPerson;
