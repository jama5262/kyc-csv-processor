import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";

import { uploadCSVAction, showUploadModalAction } from "../redux/actions"

import { Row, Button, Input, Upload, Modal } from 'antd'

const UploadCSV = () => {

    const showModal = useSelector(state => state.uploadCSV.showModal)
    let [name, setName] = useState("")
    let [file, setFile] = useState(undefined)

    let dispatch = useDispatch()

    const handleUpload = () => {
        if (file === undefined) return
        dispatch(uploadCSVAction(name, file))
        dispatch(showUploadModalAction(false))
    }

    const handleCancelModal = () => {
        dispatch(showUploadModalAction(false))
    }

    const handleFetchCSV = (info) => {
        setFile(info.file)
    }

    return (
        <Modal title="Upload CSV" visible={showModal} onOk={handleUpload} onCancel={handleCancelModal}>
            <Row gutter={[0, 20]}>
                <Input placeholder="Name" value={name} onChange={(e) => {
                    setName(e.target.value)
                }} />
                <Upload beforeUpload={() => false}
                    onChange={handleFetchCSV}>
                    <Button>Click to Upload</Button>
                </Upload>
            </Row>
        </Modal>
    )
}

export default UploadCSV
