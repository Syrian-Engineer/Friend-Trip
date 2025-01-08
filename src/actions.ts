import { Person } from "./Layouts/NewTrip/Component/DescriptionPeoples/DescriptionPeoples";

export const ADD_PERSON = 'ADD_PERSON';
export const REMOVE_PERSON = 'REMOVE_PERSON';
export const UPDATE_PERSON = 'UPDATE_PERSON';


// Actions To Add New Person
export const addPerson = (person:Person) => ({
    type: ADD_PERSON,
    payload: person,
  });

  export const removePerson=(id:number)=>({
    type:REMOVE_PERSON,
    payload:id
  })

  export const updatePerson = (person:Person) => ({
    type: UPDATE_PERSON,
    payload: person,
  });