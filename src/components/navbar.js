import React, { useState } from 'react';
import { Menu, Button, Drawer } from 'antd';
import './navbar.css';
import { Link } from 'react-router-dom';

const TopNavbar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div style={{ background: '#EA906C' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/download.png" alt="Logo" style={{ width: '6rem', height: '40px', marginRight: '16px' }} />
          <Button type="link" onClick={showDrawer}>
            Menu
          </Button>
        </div>
        <div>
          <Button style={{ marginRight: '8px' }}>
            <Link to="/userlogin">Login</Link>
          </Button>
          <Button type="primary">
            <Link to="/userregister">Register</Link>
          </Button>
        </div>
      </div>
      <Drawer title="Menu" placement="right" closable={false} onClose={onClose} visible={visible}>
        <Menu theme="light" mode="vertical">
          <Menu.Item key="1">
            <Link to="/" onClick={onClose}>
              Home
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/contact" onClick={onClose}>
              Contact
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/about" onClick={onClose}>
              About
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/products" onClick={onClose}>
              Products
            </Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    </div>
  );
};

export default TopNavbar;
