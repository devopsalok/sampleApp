import React from "react";
import MenuElement from "./MenuElement";
import { Row, Col } from "antd";
import "styled-components/macro";

const dummyArr = [0, 1, 2, 3, 4, 5, 6];

function SecondaryMenu() {
  return (
    <Row
      css={`
        background-color: #ffff;
        height: 50px;
      `}
      align="middle"
      justify="center"
    >
      {dummyArr.map(el => {
        return (
          <Col span={2}>
            <MenuElement key={el} />
          </Col>
        );
      })}
    </Row>
  );
}

export default SecondaryMenu;
