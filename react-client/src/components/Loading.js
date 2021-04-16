import { useSelector } from "react-redux";

import { Modal, Spin, Row } from 'antd'

const Loading = () => {

    const showLoading = useSelector(state => state.loading.showLoading)

    return (
        <Modal title={"Processing"} visible={showLoading} footer={null} closable={false}>
            <Row justify="center">
                <Spin size="large" />
            </Row>
        </Modal>
    )
}

export default Loading
