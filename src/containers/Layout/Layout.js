import React from "react";
import { Layout } from "antd";
import MainHeader from "../../components/MainHeader/MainHeader";

const { Header, Footer, Content } = Layout;

function LayoutHoc({ children }) {
  return (
    <Layout>
      <Header style={{ background: "#ffff" }}>
        <MainHeader />
      </Header>
      <Content>{children}</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default LayoutHoc;
