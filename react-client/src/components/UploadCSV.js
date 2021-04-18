import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";

import { requestUploadCSV, showUploadModalAction } from "../redux/actions"

import { Row, Button, Input, Upload, Modal, message } from 'antd'

const UploadCSV = () => {

    const showModal = useSelector(state => state.uploadCSV.showModal)
    let [name, setName] = useState("")
    let [file, setFile] = useState([])

    let dispatch = useDispatch()

    const handleUpload = () => {
        if (file === undefined) {
            message.error('Please upload a CSV file');
            return
        }
        if (name === "") {
            message.error('Please add a name for kyc');
            return
        }
        dispatch(requestUploadCSV(name, file[0]))
        dispatch(showUploadModalAction(false))
        setName("")
        setFile([])
    }

    const handleCancelModal = () => {
        dispatch(showUploadModalAction(false))
    }

    const handleFetchCSV = (info) => {
        setFile([info.file])
    }

    return (
        <Modal title="Upload CSV" visible={showModal} onOk={handleUpload} onCancel={handleCancelModal}>
            <Row gutter={[0, 20]}>
                <Input placeholder="Name" value={name} onChange={(e) => {
                    setName(e.target.value)
                }} />
                <Upload
                    beforeUpload={() => false}
                    onChange={handleFetchCSV}
                    fileList={file}
                >
                    <Button>Click to Upload</Button>
                </Upload>
            </Row>
        </Modal>
    )
}

export default UploadCSV
