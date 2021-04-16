import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";

import { uploadCSVAction, getKYCsAction, getSamplesAction } from "../redux/actions"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Samples from "./Samples";
import KYC from "./KYC";
import Records from "./Records";


import { Layout, PageHeader, Row, Col, Button, Input, Upload, Modal } from 'antd'
const { Content } = Layout;


function App() {

  let [showModal, setShowModal] = useState(false)
  let [name, setName] = useState("")
  let [file, setFile] = useState()

  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(getKYCsAction())
    dispatch(getSamplesAction())
  }, [])

  const uploadConfig = {
    beforeUpload: () => false,
    onChange: info => {
      setFile(info.file)
    },
  }

  const handleUpload = () => {
    console.log("clicked");
    if (file === undefined) return
    console.log("ok");
    dispatch(uploadCSVAction(name, file))
    setShowModal(false)
  }

  const handleCancelModal = () => {
    setShowModal(false)
  }

  const handleShowModal = () => {
    setShowModal(true)
  }

  return (
    <Layout>
      <Modal title="Upload CSV" visible={showModal} onOk={handleUpload} onCancel={handleCancelModal}>
        <Row gutter={[0, 20]}>
          <Input placeholder="Name" value={name} onChange={(e) => {
            setName(e.target.value)
          }} />
          <Upload {...uploadConfig}>
            <Button>Click to Upload</Button>
          </Upload>
        </Row>
      </Modal>
      <PageHeader
        className="site-page-header"
        title="Title"
        extra={[
          <Button key="1" type="primary" onClick={handleShowModal}>
            Upload CSV
          </Button>,
        ]}
      />
      <Content style={{ padding: '0 25px', backgroundColor: "#F5F5F5" }}>
        <Row gutter={50}>
          <Col span={17}>
            <Router>
              <Switch>
                <Route exact path="/">
                  <KYC />
                </Route>
                <Route path="/:kycId">
                  <Records />
                </Route>
              </Switch>
            </Router>
          </Col>
          <Col span={7}>
            <Samples />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default App;
