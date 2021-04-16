import React from 'react'
import { useSelector, useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";

import { deleteKycAction } from "../redux/actions"

import { Row, Col, List, Card, Empty, Button, Typography } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
const { Text } = Typography;

const KYC = () => {

    const kycs = useSelector(state => state.kyc)
    let history = useHistory();

    let dispatch = useDispatch()

    const handleChange = (id) => {
        history.push(`/${id}`)
    }

    const handleDeleteKyc = (id) => {
        dispatch(deleteKycAction(id))
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
                                <p>No. of records: <Text strong>22</Text></p>
                            </Col>
                            <Col>
                                <Button type="primary" onClick={() => {
                                    handleChange(kyc.id)
                                }}>View</Button>
                            </Col>
                        </Row>
                    </Card>
                </List.Item>
            )}
        >
        </List>
    )

    const empty = (
        <Row
            justify="center"
            align="middle"
            style={{ height: "400px" }}>
            <Empty
                imageStyle={{
                    height: 60,
                }}
                description={<span>No KYCs</span>}
            >
                <Button type="primary">Import CVS</Button>
            </Empty>
        </Row>
    )

    return (
        <div>
            {kycs.length !== 0 ? list : empty}
        </div >
    )
}

export default KYC
