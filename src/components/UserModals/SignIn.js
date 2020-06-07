//@flow
import React from "react";
import { Form, Input, Button, Checkbox, Typography } from "antd";

export default function SignIn({
  toggleModalState,
  toggleModalContent
}: {
  toggleModalState: Object
}) {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 }
  };

  const { Text, Link } = Typography;

  const onFinish = values => {
    console.log("Success:", values);
    toggleModalState(false);
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button size="large" type="primary" htmlType="submit">
          <>Submit</>
        </Button>
      </Form.Item>
      <Form.Item {...tailLayout}>
        Not a registered user?{" "}
        <span
          style={{ cursor: "pointer" }}
          onClick={() => toggleModalContent("signup")}
        >
          Sign Up
        </span>
      </Form.Item>
    </Form>
  );
}
