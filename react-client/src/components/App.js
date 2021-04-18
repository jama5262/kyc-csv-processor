import { useEffect } from 'react'
import { useDispatch } from "react-redux";

import { getKYCs, getSamples, showUploadModalAction } from "../redux/actions"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Samples from "./Samples";
import KYC from "./KYC";
import Records from "./Records";
import UploadCSV from "./UploadCSV";
import Loading from "./Loading";


import { Layout, PageHeader, Row, Col, Button } from 'antd'
const { Content } = Layout;


function App() {

  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(getKYCs())
    dispatch(getSamples())
  }, [])

  const handleShowModal = () => {
    dispatch(showUploadModalAction(true))
  }

  return (
    <Layout>
      <Loading />
      <UploadCSV />
      <PageHeader
        className="site-page-header"
        title="Process KYC CSV files"
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
