import { ADD_ALL_KYC, ADD_KYC, DELETE_KYC } from "../../utils/actionConstants"

const initialState = [
    {
        id: "1",
        name: "Students",
        fileName: "students.csv",
        recordCount: 20
    },
    {
        id: "2",
        name: "Teachers",
        fileName: "teachers.csv",
        recordCount: 2
    },
]

export const kyc = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ALL_KYC:
            state = [...state]
            state.push(...action.kyc)
            break
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