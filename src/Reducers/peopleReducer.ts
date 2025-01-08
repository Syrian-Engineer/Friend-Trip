import { ADD_PERSON, REMOVE_PERSON, UPDATE_PERSON } from "../actions"
import { Person } from "../Layouts/NewTrip/Component/DescriptionPeoples/DescriptionPeoples"

const initailState= {
    people:[] as Person[]
}
interface Action{
    type:string,
    payload:Person
}

const peopleReducer  = (state=initailState, action:Action) => {
    switch(action.type){
      case ADD_PERSON:
        return{
          ...state,
          people:[state.people,action.payload]
        };
      case REMOVE_PERSON:
        return{
          ...state,
          people:state.people.filter(person => person.id !== action.payload.id)
        };
        case UPDATE_PERSON:
          return {
            ...state,
            people: state.people.map(person => 
              person.id === action.payload.id ? { ...person, ...action.payload } : person
            ), // Update person info by id
          };
          default:
            return state
    }
}

export default peopleReducer 