import * as types from "../../utils/actionConstants"

export const addSamplesAction = samples => ({ type: types.ADD_SAMPLES, samples })
export const addKycAction = kyc => ({ type: types.ADD_KYC, kyc })
export const deleteKycAction = id => ({ type: types.DELETE_KYC, id })
export const addRecordsAction = records => ({ type: types.ADD_ALL_RECORDS, data: { records } })
export const addRecordAction = record => ({ type: types.ADD_RECORD, data: { record } })
export const deleteRecordAction = ids => ({ type: types.DELETE_RECORD, ids })
export const loadingAction = showLoading => ({ type: types.LOADING, showLoading })

export const importCSV = () => {
    return (dispatch, getState) => {

    }
}


