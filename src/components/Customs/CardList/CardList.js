import React, { Fragment } from "react";
import { List, Card, Avatar, Row, Typography } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined
} from "@ant-design/icons";

export default function CardListComponent({ data }) {
  return (
    <Fragment>
      <Row
        justify="start"
        align="middle"
        style={{ margin: "30px", paddingLeft: "14px" }}
      >
        <Typography.Title level={2}>Featured Products</Typography.Title>
      </Row>
      <Row justify="space-around" align="middle">
        <List
          grid={{
            gutter: 6
          }}
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <Card
                style={{ width: 300 }}
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
                actions={[
                  <SettingOutlined key="setting" />,
                  <EditOutlined key="edit" />,
                  <EllipsisOutlined key="ellipsis" />
                ]}
              >
                <Card.Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title={item.title}
                  description="This is the description"
                />
              </Card>
            </List.Item>
          )}
        />
      </Row>
    </Fragment>
  );
}
