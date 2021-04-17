import { ADD_KYC, DELETE_KYC } from "../../utils/actionConstants"

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
        default:
            return state
    }
}