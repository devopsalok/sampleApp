import React from "react";
import "./index.css";
import { Row, Col, Typography, Button } from "antd";
import { Menu } from "antd";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import SearchInput from "../Customs/SearchInput/SearchInput";
import { searchData } from "../../fakedata/home";
import LocationFinder from "../Customs/LocationFinder/LocationFinder";

const { SubMenu } = Menu;
const { Text } = Typography;

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
          <Menu.Item title="Item search">
            <Button type="primary" size="large">
              Login/Signup
            </Button>
          </Menu.Item>
          <SubMenu
            icon={<ShoppingCartOutlined style={{ fontSize: "24px" }} />}
            title={<span style={{ fontSize: "18px" }}>Cart</span>}
          >
            <Menu.Item key="setting:1">
              <Row justify="space-between">
                <Text strong={true}>Order Summary</Text>
                <Text strong={true}># items</Text>
              </Row>
            </Menu.Item>
            <Menu.Item key="setting:2">
              <a href="https://ant.design" target="_blank">
                CHECKOUT ITEMS
              </a>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            icon={<UserOutlined style={{ fontSize: "24px" }} />}
            title={<span style={{ fontSize: "18px" }}>Profile</span>}
          >
            <Menu.ItemGroup title="">
              <Menu.Item key="setting:0">
                <Text>Full Name</Text>
              </Menu.Item>
              <Menu.Item key="setting:1">Orders</Menu.Item>
              <Menu.Item key="setting:2">Lab tests</Menu.Item>
              <Menu.Item key="setting:3">Consultations</Menu.Item>
              <Menu.Item key="setting:4">Payments</Menu.Item>
              <Menu.Item key="setting:5">Logout</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
      </Col>
    </Row>
  );
}
