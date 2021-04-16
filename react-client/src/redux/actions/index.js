import axios from "axios";

import { BASE_URL } from "../../utils/baseUrlConstant"
import * as types from "../../utils/actionConstants"
import { kyc } from "../reducers/kyc";
import { records } from "../reducers/records";

export const addSamplesAction = samples => ({ type: types.ADD_SAMPLES, samples })

export const addKycAction = kyc => ({ type: types.ADD_KYC, kyc })

export const deleteKycAction = id => {
    return (dispatch, getState) => {
        // dispatch({ type: types.ADD_KYC, kyc })
    }
}

export const addRecordsAction = records => ({ type: types.ADD_ALL_RECORDS, data: records })

export const addRecordAction = record => {
    return (dispatch, getState) => {
        dispatch({ type: types.ADD_RECORD, data: record })
    }

}

export const updateRecordAction = record => {
    return (dispatch, getState) => {
        // dispatch({ type: types.UPDATE_RECORD, ids })
    }
}

export const deleteRecordAction = ids => {
    return (dispatch, getState) => {
        dispatch({ type: types.DELETE_RECORD, ids })
    }
}

export const loadingAction = showLoading => ({ type: types.LOADING, showLoading })




export const sampleCSVAction = fileName => {
    return (dispatch, getState) => {

    }
}

export const uploadCSVAction = (name, file) => {
    var formData = new FormData();
    formData.append('name', name);
    formData.append('file', file);

    console.log("send to server");
    return (dispatch, getState) => {
        var formData = new FormData();
        formData.append('name', name);
        formData.append('file', file);

        axios({
            method: 'POST',
            baseURL: BASE_URL,
            url: "/upload",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" }
        }).then((response) => {
            let data = response.data

            let { id, name, fileName, records } = data

            dispatch(addKycAction({
                id,
                name,
                fileName,
                recordCount: records.length
            }))

            dispatch(addRecordsAction({
                kycId: id,
                records: records.map((k, v) => {
                    v["key"] = v.id
                    return v
                })
            }))

            console.log("done");

        }).catch((err) => {
            console.log(err);
        })
    }
}

export const getKYCsAction = () => {
    return (dispatch, getState) => {

        console.log("called");

        axios({
            method: 'GET',
            baseURL: BASE_URL,
        }).then((response) => {
            let data = response.data

            data.forEach(el => {
                let { id, name, fileName, records } = el

                let b = {
                    id,
                    name,
                    fileName,
                    recordCount: records.length
                }

                let a = {
                    id,
                    records: records.map((v) => {
                        v["key"] = v.id
                        return v
                    })
                }

                console.log(b);
                dispatch(addKycAction(b))
                dispatch(addRecordsAction(a))
            });

            console.log("done");
        }).catch((err) => {
            console.log(err);
        })
    }
}


