import Samples from "./Samples";


import { Layout, Row, Col } from 'antd'
const { Content } = Layout;


function App() {
  return (
    <Layout>
      <Content style={{ padding: '50px', backgroundColor: "#F5F5F5" }}>
        <div>
          <Row>
            <Col span={17}>
              jama
              </Col>
            <Col span={7}>
              <Samples />
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
}

export default App;
