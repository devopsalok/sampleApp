import React from "react";
import { Button } from "antd";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";

export const mainMenu = {
  actionItems: [
    {
      icon: ShoppingCartOutlined,
      title: "Shopping Cart",
      groups: [
        { title: "Group 1", options: ["option 1", "option 2"] },
        { title: "Group 2", options: ["option 1", "option 2"] }
      ]
    },
    {
      icon: UserOutlined,
      title: "Login Status",
      groups: [
        {
          title: "Group 1",
          options: ["option 1", "option 2", <Button>Login/Logout</Button>]
        }
      ]
    }
  ]
};
