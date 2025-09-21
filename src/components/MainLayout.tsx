import React from 'react';
import { Layout, Menu } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

const MainLayout: React.FC = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      key: '1',
      label: 'JSON 格式化',
      path: '/'
    },
    {
      key: '2',
      label: '时间戳转换',
      path: '/timestamp'
    },
    {
      key: '3',
      label: 'ASCII 表',
      path: '/ascii'
    }
  ];

  const onClickMenuItem = ({ key }: { key: string }) => {
    const item = menuItems.find(item => item.key === key);
    if (item) {
      navigate(item.path);
    }
  };

  return (
    <Layout className="layout">
      <Header style={{ 
        display: 'flex', 
        alignItems: 'center',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
        background: 'linear-gradient(90deg, #4361ee 0%, #3a56d4 100%)'
      }}>
        <div className="logo" style={{ 
          color: 'white', 
          fontSize: '22px', 
          fontWeight: 'bold', 
          marginRight: '20px',
          fontFamily: 'Arial, sans-serif'
        }}>
          Web Util
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          items={menuItems}
          onClick={onClickMenuItem}
          style={{ 
            flex: 1, 
            minWidth: 0,
            background: 'transparent'
          }}
        />
      </Header>
      <Content style={{ 
        padding: '24px 50px',
        marginTop: '16px'
      }}>
        <div className="card" style={{ 
          minHeight: 280, 
          padding: 24,
          borderRadius: '12px'
        }}>
          <Outlet />
        </div>
      </Content>
      <Footer style={{ 
        textAlign: 'center',
        background: '#f8f9fa',
        borderTop: '1px solid #eaeaea',
        padding: '24px 50px'
      }}>
        <div style={{ 
          color: '#6c757d',
          fontSize: '14px'
        }}>
          Web Util ©{new Date().getFullYear()} 实用工具集
        </div>
        <div style={{ 
          color: '#adb5bd',
          fontSize: '12px',
          marginTop: '8px'
        }}>
          让开发工作更轻松便捷
        </div>
      </Footer>
    </Layout>
  );
};

export default MainLayout;