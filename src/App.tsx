import React from 'react';
import { Layout, ConfigProvider } from 'antd';
import { RouterProvider } from 'react-router-dom';
import router from './routes';

// 自定义主题
const theme = {
  token: {
    colorPrimary: '#4361ee',
    colorSuccess: '#4cc9f0',
    colorWarning: '#f72585',
    colorError: '#e63946',
    colorInfo: '#4895ef',
    borderRadius: 8,
    wireframe: false,
  },
  components: {
    Layout: {
      headerBg: '#4361ee',
      footerBg: '#f8f9fa',
    },
    Menu: {
      darkItemBg: '#3a56d4',
      darkItemHoverBg: '#5a73f0',
      darkItemSelectedBg: '#5a73f0',
    }
  }
};

const App: React.FC = () => {
  return (
    <ConfigProvider theme={theme}>
      <Layout style={{ minHeight: '100vh' }} className="app-container">
        <RouterProvider router={router} />
      </Layout>
    </ConfigProvider>
  );
};

export default App;