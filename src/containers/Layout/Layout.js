import React, { useState } from "react";
import "./index.css";
import { Layout } from "antd";
import MainHeader from "../../components/MainHeader/MainHeader";
import MainFooter from "../../components/MainFooter/MainFooter";
import AuthContainer from "../AuthContainer/AuthContainer";

const { Header, Footer, Content } = Layout;

function LayoutHoc({ children }) {
  const [isOpen, toggleModalState] = useState(false);
  return (
    <Layout>
      <Header style={{ background: "#ffff" }} className="main-header">
        <MainHeader toggleModalState={toggleModalState} />
      </Header>
      <Content style={{ minHeight: "80vh" }}>{children}</Content>
      <Footer className="main-desktop-footer">
        <MainFooter />
      </Footer>
      <AuthContainer toggleModalState={toggleModalState} isOpen={isOpen} />
    </Layout>
  );
}

export default LayoutHoc;
