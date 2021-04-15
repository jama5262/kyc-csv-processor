import { ADD_SAMPLES } from "../../utils/actionConstants"

const initialState = [
    {
        id: 1,
        text: "sample1.csv"
    },
    {
        id: 2,
        text: "sample2.csv"
    }
]

export const samples = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SAMPLES:
            samples.forEach(sample => {
                state = [...state]
                state.push({
                    id: state.length + 1,
                    text: sample
                })
            });
            break
        default:
            break
    }
    return state
}