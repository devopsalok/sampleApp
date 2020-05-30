import React from "react";
import "./index.css";
import { Row, Col } from "antd";
import { Menu } from "antd";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import SearchInput from "../Customs/SearchInput/SearchInput";
import { searchData } from "../../fakedata/home";
import LocationFinder from "../Customs/LocationFinder/LocationFinder";

const { SubMenu } = Menu;

export default function MainHeader() {
  return (
    <Row justify="space-around" align="middle">
      <Col flex={2}>
        <h1 style={{ margin: "0px" }}>Brand</h1>
      </Col>
      <Col flex={10}>
        <Menu
          // onClick={this.handleClick}
          className="home-sub-menu"
          selectedKeys={[]}
          theme="light"
          mode="horizontal"
        >
          <Menu.Item title="Item location">
            <LocationFinder />
          </Menu.Item>
          <Menu.Item title="Item search">
            <SearchInput options={searchData} />
          </Menu.Item>
          <SubMenu
            icon={<ShoppingCartOutlined style={{ fontSize: "24px" }} />}
            title={<span style={{ fontSize: "18px" }}>Cart</span>}
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
          <SubMenu
            icon={<UserOutlined style={{ fontSize: "24px" }} />}
            title={<span style={{ fontSize: "18px" }}>Profile</span>}
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
        </Menu>
      </Col>
    </Row>
  );
}
