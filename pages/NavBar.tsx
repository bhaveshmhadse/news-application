import type { NextPage } from "next";

import { Col, Image } from "antd";

const IndexPage: NextPage = () => {
  return (
    <div className='navbar'>
      <Col style={{ display: "flex" }}>
        <Image className='icon' src='Avatar.png' />
        <h3 style={{ marginTop: "2vh" }}>News-zee</h3>
      </Col>
    </div>
  );
};

export default IndexPage;
