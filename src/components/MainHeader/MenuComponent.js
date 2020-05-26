import React from "react";
import { Menu } from "antd";

const { SubMenu } = Menu;

function MenuComponent({ Icon, title, groups }) {
  return (
    <SubMenu icon={<Icon />} title={title}>
      {groups.map(group => {
        return (
          <Menu.ItemGroup title={group.title} key={group.title}>
            {group.options.map(option => {
              return <Menu.Item key={option}>{option}</Menu.Item>;
            })}
          </Menu.ItemGroup>
        );
      })}
    </SubMenu>
  );
}

export default MenuComponent;
