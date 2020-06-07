import React from "react";
import { Form, Input, Button, Checkbox, Typography } from "antd";

export default function SignUp({ toggleModalState, toggleModalContent }) {
  const { Text } = Typography;

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 }
  };

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

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!"
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                "The two passwords that you entered do not match!"
              );
            }
          })
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" size="large">
          Submit
        </Button>
      </Form.Item>
      <Form.Item {...tailLayout}>
        Already a registered user?{" "}
        <span
          style={{ cursor: "pointer" }}
          onClick={() => toggleModalContent("signin")}
        >
          Sign In
        </span>
      </Form.Item>
    </Form>
  );
}
