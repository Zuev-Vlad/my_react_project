import { SET_IS_OPEN_POPAP } from "./action/types";

const initialState = {
    isOpen: false,
    title: 'test',
    content: 'test content',
    onClose: () => false,
    onsave: () => false
}

export const popapReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_IS_OPEN_POPAP:
            console.log('setPopapState', action)
            return {...state, isOpen: action.payload }
        default:
            return state;
    }
}