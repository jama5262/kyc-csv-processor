import { ADD_RECORD, DELETE_RECORD, UPDATE_RECORD } from "../../utils/actionConstants"

const initialState = []

export const records = (state = initialState, action) => {
    switch (action.type) {
        case ADD_RECORD: {
            let newState = [...state]
            newState.push(action.payload)
            return newState
        }
        case UPDATE_RECORD: {
            let newState = [...state].filter((record) => {
                return record.id !== action.payload.id
            })
            newState.push(action.payload)
            return newState
        }
        case DELETE_RECORD: {
            let newState = [...state]
            return newState.filter((record) => {
                return record.id !== action.payload.id
            })
        }
        default:
            return state
    }
}