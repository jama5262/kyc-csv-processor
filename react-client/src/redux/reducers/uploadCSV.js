import { SET_FILE_NAME, SHOW_SAMPLE_MODAL, SHOW_MODAL } from "../../utils/actionConstants"

const initialState = {
    showModal: false,
    showSampleModal: false,
    fileName: ""
}

export const uploadCSV = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MODAL:
            state = { ...state, showModal: action.showModal }
            break;
        case SHOW_SAMPLE_MODAL:
            state = { ...state, showSampleModal: action.showSampleModal }
            break;
        case SET_FILE_NAME:
            state = { ...state, fileName: action.fileName }
            break;
        default:
            break;
    }
    return state
}