import React from 'react'

const Loading = ({ loading }) => {
    return (
        <Modal title="Basic Modal" visible={loading}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>
    )
}

export default Loading
