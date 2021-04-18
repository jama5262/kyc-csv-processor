import React from 'react'
import { useSelector, useDispatch } from "react-redux";

import { showUploadSampleModalAction, setFileNameAction } from "../redux/actions"

import UploadSampleCSV from "./UploadSampleCSV";

import { Row, List, Card, Button } from 'antd'

const Samples = () => {

    const samples = useSelector(state => state.samples)

    const dispatch = useDispatch()

    const handleShowModal = (fileName) => {
        dispatch(setFileNameAction(fileName))
        dispatch(showUploadSampleModalAction(true))
    }

    return (
        <div>
            <UploadSampleCSV />
            <h2>Samples</h2>
            <h4>Choose one of the samples to process the CSV file</h4>
            <List
                dataSource={samples}
                renderItem={sample => (
                    <List.Item>
                        <Card
                            style={{ width: "100%", borderRadius: "5px" }}>
                            <h3>{sample.fileName}</h3>
                            <Row
                                justify="end">
                                <Button type="primary" onClick={() => {
                                    handleShowModal(sample.fileName)
                                }}>Try it out</Button>
                            </Row>
                        </Card>
                    </List.Item>
                )}
            >
            </List>
        </div>
    )
}

export default Samples
