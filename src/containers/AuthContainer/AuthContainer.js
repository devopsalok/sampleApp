import React, { useState } from "react";
import { Modal } from "antd";
import SignIn from "../../components/UserModals/SignIn";
import SignUp from "../../components/UserModals/SignUp";

export default function AuthContainer() {
  const [isOpen, toggleModalState] = useState(false);
  const [type, toggleModalContent] = useState("signin");
  return (
    <Modal
      title={type === "signin" ? "Sign In" : "Sign Up"}
      centered={true}
      visible={isOpen}
      destroyOnClose={true}
      closable={true}
      onCancel={() => toggleModalState(false)}
      footer={null}
    >
      {type === "signin" ? (
        <SignIn
          toggleModalState={toggleModalState}
          toggleModalContent={toggleModalContent}
        />
      ) : (
        <SignUp
          toggleModalState={toggleModalState}
          toggleModalContent={toggleModalContent}
        />
      )}
    </Modal>
  );
}
