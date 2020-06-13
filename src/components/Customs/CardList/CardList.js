import React, { Fragment } from "react";
import "@brainhubeu/react-carousel/lib/style.css";
import Carousel from "@brainhubeu/react-carousel";
import { Card, Avatar, Row, Typography } from "antd";
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
                style={{ width: 300 }}
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
                key={idx}
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
            );
          })}
        </Carousel>
      </Row>
    </Fragment>
  );
}
