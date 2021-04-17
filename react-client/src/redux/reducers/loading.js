import { LOADING } from "../../utils/actionConstants"

const initialState = {
    showLoading: false
}

export const loading = (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            let newState = { ...state, showLoading: action.payload.showLoading }
            return newState;
        default:
            return state;
    }
}