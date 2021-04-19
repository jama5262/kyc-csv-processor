import { ADD_SAMPLES } from "../../utils/actionConstants"

const initialState = []

export const samples = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SAMPLES:
            let newState = [...state]
            newState.push({
                id: state.length + 1,
                fileName: action.payload.fileName
            })
            return newState
        default:
            return state
    }
}