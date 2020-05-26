import React from "react";
import { Menu } from "antd";

const { SubMenu } = Menu;

function MenuComponent({ Icon, title, options }) {
  return (
    <SubMenu icon={<Icon />} title="">
      <Menu.ItemGroup title="Item 1">
        <Menu.Item key="setting:1">Option 1</Menu.Item>
        <Menu.Item key="setting:2">Option 2</Menu.Item>
        <Menu.Item key="setting:3">Option 3</Menu.Item>
        <Menu.Item key="setting:4">Option 4</Menu.Item>
        {/* <Menu.Item key="setting:0">{options.buttonOptions}</Menu.Item>; */}
      </Menu.ItemGroup>
    </SubMenu>
  );
}

export default MenuComponent;
