import { ADD_SAMPLES } from "../../utils/actionConstants"

const initialState = []

export const samples = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SAMPLES:
            state = [...state]
            state.push({
                id: state.length + 1,
                fileName: action.fileName
            })
            break
        default:
            break
    }
    return state
}