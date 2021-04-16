import { ADD_KYC, DELETE_KYC } from "../../utils/actionConstants"

const initialState = []

export const kyc = (state = initialState, action) => {
    switch (action.type) {
        case ADD_KYC:
            state = [...state]
            state.push(action.kyc)
            break
        case DELETE_KYC:
            state = [...state]
            let kycPos = state.findIndex(kyc => {
                return kyc.id === action.id
            })
            if (kycPos >= 0) {
                state.splice(kycPos, 1)
            }
            break
        default:
            break
    }
    return state
}