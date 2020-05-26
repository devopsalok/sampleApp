import React from "react";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Button } from "antd";

export const mainMenu = {
  actionItems: [
    {
      icon: ShoppingCartOutlined,
      options: {
        buttonOptions: <Button size={"large"}>Proceed to cart</Button>
      }
    },
    {
      icon: UserOutlined,
      options: { buttonOptions: <Button size={"large"}>Login/Logout</Button> }
    }
  ]
};
