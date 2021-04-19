import React from 'react'
import { useSelector, useDispatch } from "react-redux";

import moment from 'moment';

import { useHistory } from "react-router-dom";

import { deleteKyc, showUploadModalAction } from "../redux/actions"

import UploadCSV from "./UploadCSV";

import { Row, Col, List, Card, Empty, Button, Typography, Table, Space } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
const { Text } = Typography;


const KYC = () => {

    let history = useHistory()

    const kycs = useSelector(state => state.kyc)

    let dispatch = useDispatch()

    const handleRouteChange = (id) => {
        history.push(`/${id}`)
    }

    const handleDeleteKyc = (id) => {
        dispatch(deleteKyc(id))
    }

    const handleShowModal = () => {
        dispatch(showUploadModalAction(true))
    }

    const list = (
        <List
            dataSource={kycs}
            renderItem={kyc => (
                <List.Item>
                    <Card
                        title={kyc.name}
                        extra={<Button type="text" onClick={() => {
                            handleDeleteKyc(kyc.id)
                        }}><DeleteOutlined /></Button>}
                        style={{ width: "100%", borderRadius: "5px" }}>
                        <Row justify="space-between" align="bottom">
                            <Col>
                                <p>File name: <Text strong>{kyc.fileName}</Text></p>
                                <p>No. of records: <Text strong>{kyc.recordCount}</Text></p>
                            </Col>
                            <Col>
                                <Button type="primary" onClick={() => {
                                    handleRouteChange(kyc.id)
                                }}>View</Button>
                            </Col>
                        </Row>
                    </Card>
                </List.Item>
            )}
        >
        </List>
    )

    const columns = [
        {
            title: 'name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'dobTimestamp',
            dataIndex: 'dobTimestamp',
            key: 'dobTimestamp',
            render: (text, record) => moment(record.dobTimestamp).format("Do MMM, yyyy")
        }
    ];

    const exampleData = [
        {
            id: "1",
            key: "1",
            name: "John Doe",
            phone: "0712345678",
            dobTimestamp: 0
        }
    ]

    const empty = (
        <Row
            justify="center"
            align="middle"
            style={{ height: "400px" }}>
            <Empty
                imageStyle={{
                    height: 60,
                }}
                description={<span>No KYCs found, please upload one in the following format</span>}
            >
                <Space direction={"vertical"} size={"large"}>
                    <Table pagination={false} dataSource={exampleData} columns={columns} />
                    <Button type="primary" onClick={handleShowModal}>Upload CSV</Button>
                </Space>
            </Empty>
        </Row>
    )

    return (
        <div>
            <UploadCSV />
            {kycs.length !== 0 ? list : empty}
        </div >
    )
}

export default KYC
