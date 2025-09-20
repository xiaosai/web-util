import * as React from 'react';
import { Layout, Input, Typography, Alert } from 'antd';

const { TextArea } = Input;
const { Title } = Typography;
const { Sider, Content } = Layout;

const JsonBeautifier: React.FC = () => {
  const [jsonInput, setJsonInput] = React.useState<string>('');
  const [error, setError] = React.useState<string | null>(null);

  const handleJsonChange = (value: string) => {
    setJsonInput(value);
    setError(null);
    
    if (value.trim() === '') {
      return;
    }
    
    try {
      JSON.parse(value);
    } catch (err) {
      setError('无效的 JSON 格式: ' + (err as Error).message);
    }
  };

  // 简单的 JSON 格式化函数
  const formatJson = (jsonStr: string): string => {
    try {
      const parsed = JSON.parse(jsonStr);
      return JSON.stringify(parsed, null, 2);
    } catch (e) {
      return jsonStr;
    }
  };

  return (
    <div className="tool-container">
      <Title level={2} className="page-title">JSON 格式化工具</Title>
      <Layout hasSider style={{ 
        background: 'transparent',
        borderRadius: '8px',
        overflow: 'hidden'
      }}>
        <Sider width="50%" style={{ 
          paddingRight: '12px',
          background: 'transparent'
        }}>
          <div className="card" style={{ 
            height: '100%',
            padding: '16px',
            background: '#fafafa'
          }}>
            <TextArea
              value={jsonInput}
              onChange={(e) => handleJsonChange(e.target.value)}
              placeholder='请输入 JSON 字符串，例如: {"name": "张三", "age": 25}'
              autoSize={{ minRows: 12, maxRows: 18 }}
              style={{
                fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace',
                fontSize: '14px',
                minHeight: '400px'
              }}
            />
          </div>
        </Sider>
        <Content style={{ 
          paddingLeft: '12px',
          background: 'transparent'
        }}>
          <div className="card" style={{ 
            height: '100%',
            padding: '16px',
            background: '#fafafa'
          }}>
            {error ? (
              <Alert 
                message={error} 
                type="error" 
                showIcon 
                style={{
                  marginBottom: '16px'
                }}
              />
            ) : jsonInput ? (
              <pre style={{ 
                background: '#fff', 
                padding: '16px', 
                borderRadius: '6px',
                maxHeight: '400px',
                overflow: 'auto',
                whiteSpace: 'pre-wrap',
                fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace',
                fontSize: '14px',
                lineHeight: '1.5',
                border: '1px solid #e8e8e8'
              }}>
                {formatJson(jsonInput)}
              </pre>
            ) : (
              <Typography.Text type="secondary">格式化后的 JSON 将在此处显示</Typography.Text>
            )}
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default JsonBeautifier;