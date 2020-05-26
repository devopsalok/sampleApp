import React from "react";
import { Row, Col } from "antd";
import { mainMenu } from "../../constants";
import MenuComponent from "./MenuComponent";

export default function MainHeader() {
  return (
    <Row>
      <Col span={18} push={6}>
        82TechMeds
      </Col>
      <Col span={6} pull={18}>
        {mainMenu.actionItems.map((item, index) => {
          return (
            <MenuComponent
              key={index}
              Icon={item.icon}
              options={item.options}
            />
          );
        })}
      </Col>
    </Row>
  );
}
