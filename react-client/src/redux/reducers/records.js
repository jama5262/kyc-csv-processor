import { ADD_ALL_RECORDS, ADD_RECORD, DELETE_RECORD } from "../../utils/actionConstants"

const initialState = {}

export const records = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ALL_RECORDS: {
            state = { ...state }
            let kycId = action.data.id
            state[kycId] = action.data.records
            break
        }
        case ADD_RECORD: {
            state = { ...state }
            let kycId = action.data.id
            if (kycId in state) {
                state.kycId.push(action.data.record)
            } else {
                state[kycId] = [action.data.record]
            }
            break
        }
        case DELETE_RECORD: {
            state = { ...state, }
            let recordId = action.ids.recordId
            let recordPos = state.kycId.findIndex(record => {
                return record.id === recordId
            })
            if (recordPos >= 0) {
                state.kycId.splice(recordPos, 1)
            }
            break
        }
        default:
            break
    }
    return state
}