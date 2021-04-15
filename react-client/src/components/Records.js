import React, { useState } from 'react'
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { Table, Row, Col, Button, Modal, Input, DatePicker } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'

import moment from 'moment';

const Records = () => {

    let { kycId } = useParams();
    let history = useHistory();
    const records = useSelector(state => state.records[kycId])

    let [showModal, setShowModal] = useState(false)
    let [record, setRecord] = useState({})

    const handleBack = () => {
        history.goBack()
    }

    const handleOk = () => {

        setShowModal(false)
    }

    const handleCancel = () => {
        setShowModal(false)
    }

    const handleAddRecord = () => {
        setRecord({})
        setShowModal(true)
    }

    const handleUpdateRecord = (oldRecord) => {
        setRecord(oldRecord)
        setShowModal(true)
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
        },
        {
            key: 'action',
            render: (text, record) => (
                <div>
                    <Button type="text" onClick={() => {
                        handleUpdateRecord(record)
                    }}><EditOutlined /></Button>
                    <Button type="text"><DeleteOutlined /></Button>
                </div>
            ),
        }
    ];

    return (
        <div>
            <Modal title="Basic Modal" visible={showModal} onOk={handleOk} onCancel={handleCancel}>
                <Row gutter={[0, 20]}>
                    <Input placeholder="Full names" value={record.name} onChange={(e) => {
                        setRecord({ ...record, name: e.target.value })
                    }} />
                    <Input placeholder="Phone" value={record.phone} onChange={(e) => {
                        setRecord({ ...record, phone: e.target.value })
                    }} />
                    <DatePicker value={moment(record.dobTimestamp)} onChange={(date, _) => {
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
