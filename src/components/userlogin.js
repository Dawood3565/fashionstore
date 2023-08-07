import React from 'react';
import { Form, Input, Button, message } from 'antd'; // Add the 'message' import
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      // Send the login data to the server
      const response = await fetch('http://localhost:4000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        // Login successful
        const data = await response.json();
        message.success(data.message); // Display success message
        navigate('/products'); // Redirect to the products page
      } else {
        // Login failed, show error message
        const data = await response.json();
        message.error(data.message); // Display error message
      }
    } catch (error) {
      console.error('Error while logging in', error);
      message.error('An error occurred while logging in. Please try again.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', backgroundColor: '#EEE2DE', padding: '3rem', borderRadius: '1rem', marginTop: '2rem' }}>
      <h1 style={{ textAlign: 'center' }}>Login</h1>
      <Form onFinish={onFinish} layout="vertical">
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Please enter your email' },
            { type: 'email', message: 'Please enter a valid email address' },
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
