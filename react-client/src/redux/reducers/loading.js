import { LOADING } from "../../utils/actionConstants"

const initialState = {
    showLoading: false
}

export const loading = (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            state = { ...state, showLoading: action.showLoading }
            break;
        default:
            break;
    }
    return state
}