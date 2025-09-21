import * as React from 'react';
import { Input, Button, Typography, Space, Row, Col, message } from 'antd';
import dayjs from 'dayjs';

const { Title, Text } = Typography;

const TimestampConverter: React.FC = () => {
  const [timestampInput, setTimestampInput] = React.useState<string>('');
  const [dateInput, setDateInput] = React.useState<string>('');
  const [convertedTimestamp, setConvertedTimestamp] = React.useState<string>('');
  const [convertedDate, setConvertedDate] = React.useState<string>('');

  const convertToDate = () => {
    if (!timestampInput) {
      message.warning('请输入时间戳');
      return;
    }
    
    const timestamp = Number(timestampInput);
    if (isNaN(timestamp)) {
      message.error('请输入有效的时间戳');
      return;
    }
    
    // 处理秒和毫秒时间戳
    const date = timestamp > 9999999999 ? dayjs(timestamp) : dayjs(timestamp * 1000);
    setConvertedDate(date.format('YYYY-MM-DD HH:mm:ss'));
  };

  const convertToTimestamp = () => {
    if (!dateInput) {
      message.warning('请输入日期时间');
      return;
    }
    
    const date = dayjs(dateInput);
    if (!date.isValid()) {
      message.error('请输入有效的日期时间格式');
      return;
    }
    
    setConvertedTimestamp(date.valueOf().toString());
  };

  const now = () => {
    const now = dayjs();
    setDateInput(now.format('YYYY-MM-DD HH:mm:ss'));
    setConvertedTimestamp(now.valueOf().toString());
  };

  return (
    <div className="tool-container">
      <Title level={2} className="page-title">时间戳转换工具</Title>
      
      <Row gutter={[24, 24]}>
        <Col span={12}>
          <div className="card" style={{ 
            padding: '24px',
            height: '100%'
          }}>
            <Space direction="vertical" style={{ width: '100%' }} size="large">
              <Text strong style={{ 
                fontSize: '18px',
                color: '#4361ee'
              }}>
                时间戳转日期
              </Text>
              <Input
                placeholder="请输入时间戳"
                value={timestampInput}
                onChange={(e) => setTimestampInput(e.target.value)}
                size="large"
              />
              <Button 
                type="primary" 
                onClick={convertToDate}
                size="large"
                style={{
                  background: 'linear-gradient(90deg, #4361ee, #3a56d4)',
                  border: 'none'
                }}
              >
                转换为日期
              </Button>
              {convertedDate && (
                <div style={{
                  padding: '12px',
                  background: '#e3f2fd',
                  borderRadius: '6px',
                  border: '1px solid #bbdefb'
                }}>
                  <Text strong>转换结果：</Text>
                  <br />
                  <Text code style={{ 
                    fontSize: '16px',
                    color: '#1976d2'
                  }}>
                    {convertedDate}
                  </Text>
                </div>
              )}
            </Space>
          </div>
        </Col>
        
        <Col span={12}>
          <div className="card" style={{ 
            padding: '24px',
            height: '100%'
          }}>
            <Space direction="vertical" style={{ width: '100%' }} size="large">
              <Text strong style={{ 
                fontSize: '18px',
                color: '#4361ee'
              }}>
                日期转时间戳
              </Text>
              <Input
                placeholder="请输入日期时间"
                value={dateInput}
                onChange={(e) => setDateInput(e.target.value)}
                size="large"
              />
              <Space>
                <Button 
                  type="primary" 
                  onClick={convertToTimestamp}
                  size="large"
                  style={{
                    background: 'linear-gradient(90deg, #4361ee, #3a56d4)',
                    border: 'none'
                  }}
                >
                  转换为时间戳
                </Button>
                <Button 
                  onClick={now}
                  size="large"
                  style={{
                    borderColor: '#4361ee',
                    color: '#4361ee'
                  }}
                >
                  当前时间
                </Button>
              </Space>
              {convertedTimestamp && (
                <div style={{
                  padding: '12px',
                  background: '#e3f2fd',
                  borderRadius: '6px',
                  border: '1px solid #bbdefb'
                }}>
                  <Text strong>转换结果：</Text>
                  <br />
                  <Text code style={{ 
                    fontSize: '16px',
                    color: '#1976d2'
                  }}>
                    {convertedTimestamp}
                  </Text>
                </div>
              )}
            </Space>
          </div>
        </Col>
      </Row>
      
      <div style={{ 
        marginTop: '24px',
        textAlign: 'center',
        padding: '16px',
        background: '#f0f8ff',
        borderRadius: '8px'
      }}>
        <Text type="secondary">
          提示：支持秒级和毫秒级时间戳转换
        </Text>
      </div>
    </div>
  );
};

export default TimestampConverter;