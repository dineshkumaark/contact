import { TOGGLE_MODAL } from '../actionTypes/index';

let initialState = {
    modal: false
};
export const modalReducers = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_MODAL:
            return {
                ...state,
                modal: !state.modal
            }
        default:
            return state;
    }
}

