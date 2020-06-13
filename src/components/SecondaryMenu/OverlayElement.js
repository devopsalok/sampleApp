import React from "react";
import { Menu, Typography, Row, Col } from "antd";
import "styled-components/macro";

export default function OverlayElement() {
  return (
    <Row
      justify="space-around"
      css={`
        background-color: #ffff;
        width: 65vw;
        display: flex;
        justify-content: center;
        z-index: 1000;
        overflow: scroll;
      `}
    >
      <Col xs={4}>
        <Menu>
          <Menu.ItemGroup
            title={<Typography.Text type="warning">SubGroup</Typography.Text>}
          >
            <Menu.Item key="setting:0">Item1</Menu.Item>
            <Menu.Item key="setting:1">Item2</Menu.Item>
            <Menu.Item key="setting:2">Item3</Menu.Item>
            <Menu.Item key="setting:3">Item4</Menu.Item>
            <Menu.Item key="setting:4">Item5</Menu.Item>
            <Menu.Item key="setting:5">Item6</Menu.Item>
          </Menu.ItemGroup>
        </Menu>
        <Menu>
          <Menu.ItemGroup
            title={<Typography.Text type="warning">SubGroup</Typography.Text>}
          >
            <Menu.Item key="setting:0">Item1</Menu.Item>
            <Menu.Item key="setting:1">Item2</Menu.Item>
            <Menu.Item key="setting:2">Item3</Menu.Item>
            <Menu.Item key="setting:3">Item4</Menu.Item>
            <Menu.Item key="setting:4">Item5</Menu.Item>
            <Menu.Item key="setting:5">Item6</Menu.Item>
          </Menu.ItemGroup>
        </Menu>
      </Col>

      <Col xs={4}>
        <Menu>
          <Menu.ItemGroup
            title={<Typography.Text type="warning">SubGroup</Typography.Text>}
          >
            <Menu.Item key="setting:0">Item1</Menu.Item>
            <Menu.Item key="setting:1">Item2</Menu.Item>
            <Menu.Item key="setting:2">Item3</Menu.Item>
            <Menu.Item key="setting:3">Item4</Menu.Item>
            <Menu.Item key="setting:4">Item5</Menu.Item>
            <Menu.Item key="setting:5">Item6</Menu.Item>
          </Menu.ItemGroup>
        </Menu>
        <Menu>
          <Menu.ItemGroup
            title={<Typography.Text type="warning">SubGroup</Typography.Text>}
          >
            <Menu.Item key="setting:0">Item1</Menu.Item>
            <Menu.Item key="setting:1">Item2</Menu.Item>
            <Menu.Item key="setting:2">Item3</Menu.Item>
            <Menu.Item key="setting:3">Item4</Menu.Item>
            <Menu.Item key="setting:4">Item5</Menu.Item>
            <Menu.Item key="setting:5">Item6</Menu.Item>
          </Menu.ItemGroup>
        </Menu>
      </Col>
      <Col xs={4}>
        <Menu>
          <Menu.ItemGroup
            title={<Typography.Text type="warning">SubGroup</Typography.Text>}
          >
            <Menu.Item key="setting:0">Item1</Menu.Item>
            <Menu.Item key="setting:1">Item2</Menu.Item>
            <Menu.Item key="setting:2">Item3</Menu.Item>
            <Menu.Item key="setting:3">Item4</Menu.Item>
            <Menu.Item key="setting:4">Item5</Menu.Item>
            <Menu.Item key="setting:5">Item6</Menu.Item>
          </Menu.ItemGroup>
        </Menu>
        <Menu>
          <Menu.ItemGroup
            title={<Typography.Text type="warning">SubGroup</Typography.Text>}
          >
            <Menu.Item key="setting:0">Item1</Menu.Item>
            <Menu.Item key="setting:1">Item2</Menu.Item>
            <Menu.Item key="setting:2">Item3</Menu.Item>
            <Menu.Item key="setting:3">Item4</Menu.Item>
            <Menu.Item key="setting:4">Item5</Menu.Item>
            <Menu.Item key="setting:5">Item6</Menu.Item>
          </Menu.ItemGroup>
        </Menu>
      </Col>
      <Col xs={4}>
        <Menu>
          <Menu.ItemGroup
            title={<Typography.Text type="warning">SubGroup</Typography.Text>}
          >
            <Menu.Item key="setting:0">Item1</Menu.Item>
            <Menu.Item key="setting:1">Item2</Menu.Item>
            <Menu.Item key="setting:2">Item3</Menu.Item>
            <Menu.Item key="setting:3">Item4</Menu.Item>
            <Menu.Item key="setting:4">Item5</Menu.Item>
            <Menu.Item key="setting:5">Item6</Menu.Item>
          </Menu.ItemGroup>
        </Menu>
        <Menu>
          <Menu.ItemGroup
            title={<Typography.Text type="warning">SubGroup</Typography.Text>}
          >
            <Menu.Item key="setting:0">Item1</Menu.Item>
            <Menu.Item key="setting:1">Item2</Menu.Item>
            <Menu.Item key="setting:2">Item3</Menu.Item>
            <Menu.Item key="setting:3">Item4</Menu.Item>
            <Menu.Item key="setting:4">Item5</Menu.Item>
            <Menu.Item key="setting:5">Item6</Menu.Item>
          </Menu.ItemGroup>
        </Menu>
      </Col>
      <Col xs={4}>
        <Menu>
          <Menu.ItemGroup
            title={<Typography.Text type="warning">SubGroup</Typography.Text>}
          >
            <Menu.Item key="setting:0">Item1</Menu.Item>
            <Menu.Item key="setting:1">Item2</Menu.Item>
            <Menu.Item key="setting:2">Item3</Menu.Item>
            <Menu.Item key="setting:3">Item4</Menu.Item>
            <Menu.Item key="setting:4">Item5</Menu.Item>
            <Menu.Item key="setting:5">Item6</Menu.Item>
          </Menu.ItemGroup>
        </Menu>
        <Menu>
          <Menu.ItemGroup
            title={<Typography.Text type="warning">SubGroup</Typography.Text>}
          >
            <Menu.Item key="setting:0">Item1</Menu.Item>
            <Menu.Item key="setting:1">Item2</Menu.Item>
            <Menu.Item key="setting:2">Item3</Menu.Item>
            <Menu.Item key="setting:3">Item4</Menu.Item>
            <Menu.Item key="setting:4">Item5</Menu.Item>
            <Menu.Item key="setting:5">Item6</Menu.Item>
          </Menu.ItemGroup>
        </Menu>
      </Col>
    </Row>
  );
}
