import React, { useState } from 'react'
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { requestDeleteRecord, requestAddRecord, requestUpdateRecord } from "../redux/actions"

import { Table, Row, Col, Button, Modal, Input, DatePicker, message } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'


import moment from 'moment';

const Records = () => {

    let { kycId } = useParams();
    let history = useHistory();
    let records = useSelector(state => state.records.filter((record) => {
        return record.kycId === kycId
    }))

    let [showModal, setShowModal] = useState(false)
    let [record, setRecord] = useState({})
    let [update, setUpdate] = useState(false)
    let [modaltitle, setModaltitle] = useState("")

    const dispatch = useDispatch()

    const handleBack = () => {
        history.goBack()
    }

    const handleCancelModal = () => {
        setShowModal(false)
    }

    const handleAddUpdateRecord = () => {
        if (Object.keys(record).length < 3 || record.name === "" || record.phone === "" || record.dobTimestamp === "") {
            message.error('Please make sure all fields are filled');
            return
        }
        if (update) {
            dispatch(requestUpdateRecord(kycId, record))
        } else {
            dispatch(requestAddRecord(kycId, record))
        }
        setShowModal(false)
    }

    const handleAddRecord = () => {
        setRecord({})
        setModaltitle("Add record")
        setUpdate(false)
        setShowModal(true)
    }

    const handleUpdateRecord = (oldRecord) => {
        setRecord(oldRecord)
        setModaltitle("Update record")
        setUpdate(true)
        setShowModal(true)
    }

    const handleDeleteRecord = (recordId) => {
        dispatch(requestDeleteRecord(kycId, recordId))
    }

    const columns = [
        {
            title: 'Full name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Phone number',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Date of birth',
            dataIndex: 'dobTimestamp',
            key: 'dobTimestamp',
            render: (text, record) => moment(record.dobTimestamp).format("Do MMM, yyyy")
        },
        {
            key: 'action',
            render: (text, record) => (
                <div>
                    <Button type="text" onClick={() => {
                        handleUpdateRecord(record)
                    }}><EditOutlined /></Button>
                    <Button type="text" onClick={() => {
                        handleDeleteRecord(record.id)
                    }}><DeleteOutlined /></Button>
                </div>
            ),
        }
    ];



    return (
        <div>
            <Modal title={modaltitle} visible={showModal} onOk={handleAddUpdateRecord} onCancel={handleCancelModal}>
                <Row gutter={[0, 20]}>
                    <Input placeholder="Full names" value={record.name} onChange={(e) => {
                        setRecord({ ...record, name: e.target.value })
                    }} />
                    <Input placeholder="Phone" value={record.phone} onChange={(e) => {
                        setRecord({ ...record, phone: e.target.value })
                    }} />
                    <DatePicker onChange={(date, _) => {
                        if (date === null) return
                        setRecord({ ...record, dobTimestamp: moment(date).valueOf() })
                    }} />
                </Row>
            </Modal>
            <Row
                justify="end"
                gutter={[0, 20]}>
                <Col span={24}>
                    <Row justify="space-between">
                        <Col>
                            <Button type="primary" onClick={handleBack}>Back</Button>
                        </Col>
                        <Col>
                            <Button type="primary" onClick={handleAddRecord}>Add new record</Button>
                        </Col>
                    </Row>
                </Col>
                <Col span={24}>
                    <Table dataSource={records} columns={columns} />
                </Col>
            </Row>
        </div>
    )
}

export default Records
