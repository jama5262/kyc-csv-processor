import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";

import { requestSampleCSV, showUploadSampleModalAction } from "../redux/actions"

import { Row, Input, Modal, message } from 'antd'

const UploadSampleCSV = () => {

    const showModal = useSelector(state => state.uploadCSV.showSampleModal)
    const fileName = useSelector(state => state.uploadCSV.fileName)
    let [name, setName] = useState("")

    let dispatch = useDispatch()

    const handleUpload = () => {
        if (name === "") {
            message.error('Please add a name for kyc');
            return
        }
        dispatch(requestSampleCSV(name, fileName))
        dispatch(showUploadSampleModalAction(false))
        setName("")
    }

    const handleCancelModal = () => {
        dispatch(showUploadSampleModalAction(false))
    }

    return (
        <Modal title="Try sample CSV" visible={showModal} onOk={handleUpload} onCancel={handleCancelModal}>
            <Row gutter={[0, 20]}>
                <Input placeholder="Name" value={name} onChange={(e) => {
                    setName(e.target.value)
                }} />
            </Row>
        </Modal>
    )
}

export default UploadSampleCSV
