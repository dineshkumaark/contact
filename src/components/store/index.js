import { combineReducers } from 'redux';
import { modalReducers } from './modalReducers';
import { contactReducer } from './contactReducer';
export const rootReducers = combineReducers({
    modal: modalReducers,
    contacts: contactReducer
});

