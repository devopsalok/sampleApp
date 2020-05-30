import React, { Fragment } from "react";
import { List, Card, Row, Typography } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined
} from "@ant-design/icons";

const gridStyle = {
  width: "100%",
  minHeight: "200px",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

export default function CardListComponentTwo({ data }) {
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
                actions={[
                  <SettingOutlined key="setting" />,
                  <EditOutlined key="edit" />,
                  <EllipsisOutlined key="ellipsis" />
                ]}
              >
                <Card.Grid style={gridStyle}>Content</Card.Grid>
              </Card>
            </List.Item>
          )}
        />
      </Row>
    </Fragment>
  );
}
