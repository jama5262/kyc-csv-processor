import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Samples from "./Samples";
import KYC from "./KYC";


import { Layout, PageHeader, Row, Col, Button } from 'antd'
const { Content } = Layout;


function App() {


  return (
    <Layout>
      <PageHeader
        className="site-page-header"
        title="Title"
        extra={[
          <Button key="1" type="primary">
            Import CSV
          </Button>,
        ]}
      />
      <Content style={{ padding: '0 25px', backgroundColor: "#F5F5F5" }}>
        <Row gutter={70}>
          <Col span={17}>
            <Router>
              <Switch>
                <Route exact path="/">
                  <KYC />
                </Route>
                <Route path="/:kycId">
                  <div>records here</div>
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
