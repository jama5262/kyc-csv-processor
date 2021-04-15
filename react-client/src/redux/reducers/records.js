import { ADD_ALL_RECORDS, ADD_RECORD, DELETE_RECORD } from "../../utils/actionConstants"

const initialState = {
    "1": [
        {
            id: "1",
            key: "1",
            name: "John Doe",
            phone: "0790749401",
            dobTimestamp: 1618507195000
        },
        {
            id: "2",
            key: "2",
            name: "Diana Doe",
            phone: "0712345678",
            dobTimestamp: 1618507195000
        }
    ]
}

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