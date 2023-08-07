import React from 'react';
import { Form, Input, Button } from 'antd';
import './register.css'
import { useNavigate } from 'react-router-dom';
const SignupForm = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      // Send the user registration data to the server
      const response = await fetch('http://localhost:4000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        console.log('User registered successfully');
        navigate(`/userlogin`);
        // Navigate to the login page after successful registration
        // Implement navigation logic here, e.g., using react-router-dom
      } else {
        const data = await response.json();
        console.log(data.message);
      }
    } catch (error) {
      console.error('Error while registering user', error);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', backgroundColor: '#EEE2DE', padding: '3rem', borderRadius: '1rem', marginTop: '2rem' }}>
      <h1 style={{ textAlign: 'center' }}>Sign Up</h1>
      <Form onFinish={onFinish} layout="vertical" >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please enter your name' }]}
        >
          <Input />
        </Form.Item>
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
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignupForm;
