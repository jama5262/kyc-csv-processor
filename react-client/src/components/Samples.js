import React from 'react'
import { useSelector } from "react-redux";

import { Row, List, Card, Button } from 'antd'

const Samples = () => {

    const samples = useSelector(state => state.samples)

    return (
        <div>
            <h2>Samples</h2>
            <List
                dataSource={samples}
                renderItem={sample => (
                    <List.Item>
                        <Card
                            style={{ width: "100%", borderRadius: "5px" }}>
                            <h3>{sample.fileName}</h3>
                            <Row
                                justify="end">
                                <Button type="primary">Import</Button>
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
