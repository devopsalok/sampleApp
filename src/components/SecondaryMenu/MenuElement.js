import React from "react";
import { Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import OverlayElement from "./OverlayElement";

export default function MenuElement() {
  return (
    <Dropdown overlay={<OverlayElement />} placement="bottomRight">
      <span>
        Category <DownOutlined />
      </span>
    </Dropdown>
  );
}
