import React from "react";
import { Row, Col } from "antd";
import { Menu } from "antd";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;

export default function MainHeader() {
  return (
    <Row>
      <Col span={18} push={18}>
        <Menu
          // onClick={this.handleClick}
          selectedKeys={[]}
          mode="horizontal"
        >
          <SubMenu
            icon={<ShoppingCartOutlined />}
            title="Navigation Three - Submenu"
          >
            <Menu.ItemGroup title="Item 1">
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Item 2">
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <SubMenu icon={<UserOutlined />} title="Navigation Three - Submenu">
            <Menu.ItemGroup title="Item 1">
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Item 2">
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
      </Col>
      <Col span={6} pull={18}>
        <h1>Brand</h1>
      </Col>
    </Row>
  );
}
