import React from 'react';
import { Form, Input, Button } from 'antd';

const LoginForm = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto',backgroundColor: '#EEE2DE', padding: '3rem', borderRadius: '1rem', marginTop: '2rem' }}>
      <h1 style={{ textAlign: 'center' }}>Admin Login</h1>
      <Form onFinish={onFinish} layout="vertical">
        <Form.Item
          label="Nme"
          name="name"
          rules={[
            { required: true, message: 'Please enter your name' },
            { type: 'email', message: 'Please enter a valid name' },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: 'Please enter your password' },
            { min: 6, message: 'Password must be at least 6 characters' },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
