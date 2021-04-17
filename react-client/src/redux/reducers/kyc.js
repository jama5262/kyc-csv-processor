import { ADD_KYC, DELETE_KYC, UPDATE_RECORD_COUNT } from "../../utils/actionConstants"

const initialState = []

export const kyc = (state = initialState, action) => {
    switch (action.type) {
        case ADD_KYC: {
            let newState = [...state]
            newState.push(action.payload)
            return newState
        }
        case DELETE_KYC: {
            let newState = [...state]
            return newState.filter((kyc) => {
                return kyc.id !== action.payload.id
            })
        }
        case UPDATE_RECORD_COUNT: {
            let newState = [...state]
            let position = newState.findIndex((kyc) => {
                return kyc.id === action.payload.kycId
            })
            newState[position].recordCount += action.payload.increament
            return newState
        }
        default:
            return state
    }
}