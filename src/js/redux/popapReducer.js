import { SET_CONTENT_POPAP, SET_IS_OPEN_POPAP, SET_ON_CLOSE_POPAP, SET_ON_SAVE_POPAP, SET_TITLE_POPAP } from "./action/types";

const initialState = {
    isOpen: false,
    title: 'test',
    content: 'test content',
    onClose: () => false,
    onSave: () => false
}

export const popapReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_IS_OPEN_POPAP:
            console.log('setPopapState', action)
            return {...state, isOpen: action.payload }
        case SET_TITLE_POPAP:
            return {...state, title: action.payload }
        case SET_CONTENT_POPAP:
            return {...state, content: action.payload }
        case SET_ON_SAVE_POPAP:
            return {...state, onSave: action.payload }
        case SET_ON_CLOSE_POPAP:
            return {...state, onClose: action.payload }
        default:
            return state;
    }
}