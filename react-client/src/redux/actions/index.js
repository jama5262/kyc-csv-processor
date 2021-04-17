import axios from "axios";

import { BASE_URL } from "../../utils/baseUrlConstant"
import * as types from "../../utils/actionConstants"

import { message } from 'antd'

export const loadingAction = showLoading => ({ type: types.LOADING, payload: { showLoading } })

export const showUploadModalAction = showModal => ({ type: types.SHOW_MODAL, showModal })

export const showUploadSampleModalAction = showSampleModal => ({ type: types.SHOW_SAMPLE_MODAL, showSampleModal })

export const setFileNameAction = fileName => ({ type: types.SET_FILE_NAME, fileName })

export const addSamples = payload => ({ type: types.ADD_SAMPLES, payload })

export const getSamples = () => {
    return (dispatch, _) => {
        axios({
            method: 'GET',
            baseURL: BASE_URL,
            url: "/all-samples",
        }).then((response) => {
            response.data.forEach((fileName) => {
                dispatch(addSamples({ fileName }))
            })
        }).catch((err) => {
            message.error("Oop, there was an error fetching the samples");
        })
    }
}

export const addRecord = payload => ({ type: types.ADD_RECORD, payload })
export const updateRecord = payload => ({ type: types.UPDATE_RECORD, payload })
export const deleteRecord = id => ({ type: types.DELETE_RECORD, payload: { id } })


export const requestAddRecord = (kycId, record) => {
    return (dispatch, _) => {
        axios({
            method: 'POST',
            baseURL: BASE_URL,
            data: record,
            url: `/${kycId}`,
        }).then((response) => {
            let record = response.data["$push"].records
            record["key"] = record.id
            record["kycId"] = kycId
            dispatch(addRecord(record))
        }).catch((err) => {
            console.log(err.message);
        })
    }

}

export const requestUpdateRecord = (kycId, record) => {
    return (dispatch, getState) => {
        axios({
            method: 'PUT',
            baseURL: BASE_URL,
            data: record,
            url: `/${kycId}`,
        }).then((response) => {
            dispatch(updateRecord(record))
        }).catch((err) => {
            console.log(err.message);
        })
    }
}

export const requestDeleteRecord = (kycId, recordId) => {
    return (dispatch, _) => {
        axios({
            method: 'DELETE',
            baseURL: BASE_URL,
            url: `/${kycId}/${recordId}`,
        }).then(() => {
            dispatch(deleteRecord(recordId))
        }).catch((err) => {
            console.log(err);
        })
    }
}

const addKyc = (data) => {
    return (dispatch, _) => {
        let { id, name, fileName, records } = data

        dispatch({ type: types.ADD_KYC, payload: { id, name, fileName, recordCount: records.length } })

        records.forEach((record) => {
            dispatch(addRecord({
                ...record,
                "key": record.id,
                "kycId": id
            }))
        })
    }
}

export const deleteKyc = id => {
    return (dispatch, _) => {
        axios({
            method: 'DELETE',
            baseURL: BASE_URL,
            url: `/${id}`,
        }).then(() => {
            dispatch({ type: types.DELETE_KYC, payload: { id } })
        }).catch((err) => {
            console.log(err);
        })
    }
}

export const requestSampleCSV = (name, fileName) => {
    return (dispatch, _) => {

        dispatch(loadingAction(true))

        axios({
            method: 'POST',
            baseURL: BASE_URL,
            url: "/upload-sample",
            params: {
                name,
                fileName
            },
        }).then((response) => {
            dispatch(addKyc(response.data))
        }).catch((error) => {
            if (error.response) {
                message.error(error.response.data.message)
            } else {
                message.error(error.message)
            }
        }).then(() => {
            dispatch(loadingAction(false))
        })
    }
}

export const requestUploadCSV = (name, file) => {

    return (dispatch, _) => {

        dispatch(loadingAction(true))

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
            console.log(response.data);
            dispatch(addKyc(response.data))
        }).catch((error) => {
            if (error.response) {
                message.error(error.response.data.message)
            } else {
                message.error(error.message)
            }
        }).then(() => {
            dispatch(loadingAction(false))
        })
    }
}

export const getKYCsAction = () => {
    return (dispatch, _) => {

        dispatch(loadingAction(true))

        axios({
            method: 'GET',
            baseURL: BASE_URL,
        }).then((response) => {
            response.data.forEach(el => {
                dispatch(addKyc(el))
            });
        }).catch((err) => {
            console.log(err);
        }).then(() => {
            dispatch(loadingAction(false))
        })
    }
}


