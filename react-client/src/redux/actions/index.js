import axios from "axios";

import { BASE_URL } from "../../utils/baseUrlConstant"
import * as types from "../../utils/actionConstants"

export const getSamplesAction = () => {
    return (dispatch, _) => {
        axios({
            method: 'GET',
            baseURL: BASE_URL,
            url: "/all-samples",
        }).then((response) => {
            response.data.forEach((fileName) => {
                dispatch({ type: types.ADD_SAMPLES, fileName })
            })
        }).catch((err) => {
            console.log(err);
        })
    }
}

export const addKycAction = kyc => ({ type: types.ADD_KYC, kyc })

export const deleteKycAction = id => {
    return (dispatch, getState) => {
        axios({
            method: 'DELETE',
            baseURL: BASE_URL,
            url: `/${id}`,
        }).then((response) => {
            console.log(id);
            console.log(response);
            dispatch({ type: types.DELETE_KYC, id })
        }).catch((err) => {
            console.log(err);
        })
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

export const showUploadModalAction = showModal => ({ type: types.SHOW_MODAL, showModal })




export const sampleCSVAction = fileName => {
    return (dispatch, getState) => {

    }
}

const addKyc = (data) => {
    return (dispatch, _) => {
        let { id, name, fileName, records } = data

        dispatch(addKycAction({
            id,
            name,
            fileName,
            recordCount: records.length
        }))

        dispatch(addRecordsAction({
            id,
            records: records.map((v) => {
                v["key"] = v.id
                return v
            })
        }))
    }
}

export const uploadCSVAction = (name, file) => {
    var formData = new FormData();
    formData.append('name', name);
    formData.append('file', file);

    console.log("send to server");
    return (dispatch, _) => {
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
            dispatch(addKyc(response.data))
        }).catch((err) => {
            console.log(err);
        })
    }
}

export const getKYCsAction = () => {
    return (dispatch, _) => {
        axios({
            method: 'GET',
            baseURL: BASE_URL,
        }).then((response) => {
            response.data.forEach(el => {
                dispatch(addKyc(el))
            });
        }).catch((err) => {
            console.log(err);
        })
    }
}


