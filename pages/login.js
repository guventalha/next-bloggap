import React, { useContext } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import DashboardLayout from "../layout/DashboardLayout";
import styles from "../styles/Login.module.css";
import AuthContext from "../context/AuthContext";
const login = () => {
  const { login } = useContext(AuthContext);

  const onFinish = (values) => {
    login(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <DashboardLayout>
      <div className={styles.container}>
        <Form
          className={styles.form}
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          colon={false}
        >
          <Form.Item
            label={<label className={styles.label}>Email</label>}
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
            className={styles.label}
          >
            <Input placeholder="Email" type="email" />
          </Form.Item>

          <Form.Item
            label={<label className={styles.label}>Password</label>}
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            className={styles.label}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox className={styles.label}>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </DashboardLayout>
  );
};

export default login;
