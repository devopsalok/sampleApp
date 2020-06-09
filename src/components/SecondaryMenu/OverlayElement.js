import React from "react";
import { Menu, Typography } from "antd";

export default function OverlayElement() {
  return (
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
  );
}
