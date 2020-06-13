import React, { Fragment } from "react";
import { Card, Row, Typography } from "antd";
import Carousel from "@brainhubeu/react-carousel";
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
        <Carousel
          slidesPerPage={4}
          slidesPerScroll={1}
          clickToChange={true}
          breakpoints={{
            640: {
              slidesPerPage: 1,
              arrows: false
            },
            900: {
              slidesPerPage: 2,
              arrows: false
            }
          }}
          arrows={true}
        >
          {data.map((item, idx) => {
            return (
              <Card
                key={idx}
                style={{ width: 300 }}
                actions={[
                  <SettingOutlined key="setting" />,
                  <EditOutlined key="edit" />,
                  <EllipsisOutlined key="ellipsis" />
                ]}
              >
                <Card.Grid style={gridStyle}>Content</Card.Grid>
              </Card>
            );
          })}
        </Carousel>
      </Row>
    </Fragment>
  );
}
