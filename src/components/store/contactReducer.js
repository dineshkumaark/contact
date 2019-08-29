import { ADD_CONTACT, FILTER, FILTERED_CONTACT } from '../actionTypes';
let initalState = {
    isFilterOn: false,
    contacts: [{ name: "Mike Hustion", email: 'mikehustion@askop.com', company: 'Estra Boutique.Ltd' }],
    filteredContacts: []
}
export const contactReducer = (state = initalState, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            }
        case FILTER:
            return {
                ...state,
                isFilterOn: action.payload
            }
        case FILTERED_CONTACT:
            return {
                ...state,
                filteredContacts: [...action.payload]
            }
        default:
            return state;
    }
}
