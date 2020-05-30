import React from "react";
import "./index.css";
import { Layout, Row } from "antd";
import MainHeader from "../../components/MainHeader/MainHeader";
import MainFooter from "../../components/MainFooter/MainFooter";

const { Header, Footer, Content } = Layout;

function LayoutHoc({ children }) {
  return (
    <Layout>
      <Header style={{ background: "#ffff" }} className="main-header">
        <MainHeader />
      </Header>
      <Content style={{ minHeight: "80vh" }}>{children}</Content>
      <Footer className="main-desktop-footer">
        <MainFooter />
      </Footer>
    </Layout>
  );
}

export default LayoutHoc;
