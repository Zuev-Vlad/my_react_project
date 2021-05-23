import { SET_IS_OPEN_POPAP } from "./types"


export function setIsOpenPopap(isOpen = false) {
    return {
        type: SET_IS_OPEN_POPAP,
        payload: isOpen
    }
}