import { SET_IS_OPEN_POPAP, SET_TITLE_POPAP } from "./types"


export function setIsOpenPopap(isOpen = false) {
    return {
        type: SET_IS_OPEN_POPAP,
        payload: isOpen
    }
}

export function setTitlePopap(title = '') {
    return {
        type: SET_TITLE_POPAP,
        payload: title
    }
}