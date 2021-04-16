import { SHOW_MODAL } from "../../utils/actionConstants"

const initialState = {
    showModal: false
}

export const uploadCSV = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MODAL:
            state = { ...state, showModal: action.showModal }
            break;
        default:
            break;
    }
    return state
}