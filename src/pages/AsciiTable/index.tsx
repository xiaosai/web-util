import * as React from 'react';
import { Table, Typography, Input, Tag } from 'antd';

const { Title } = Typography;

interface AsciiItem {
  decimal: number;
  hexadecimal: string;
  character: string;
  description: string;
}

const AsciiTable: React.FC = () => {
  const [dataSource, setDataSource] = React.useState<AsciiItem[]>([]);
  const [filter, setFilter] = React.useState<string>('');

  React.useEffect(() => {
    const asciiData: AsciiItem[] = [
      { decimal: 0, hexadecimal: '00', character: 'NUL', description: '空字符' },
      { decimal: 1, hexadecimal: '01', character: 'SOH', description: '标题开始' },
      { decimal: 2, hexadecimal: '02', character: 'STX', description: '正文开始' },
      { decimal: 3, hexadecimal: '03', character: 'ETX', description: '正文结束' },
      { decimal: 4, hexadecimal: '04', character: 'EOT', description: '传输结束' },
      { decimal: 5, hexadecimal: '05', character: 'ENQ', description: '请求' },
      { decimal: 6, hexadecimal: '06', character: 'ACK', description: '确认' },
      { decimal: 7, hexadecimal: '07', character: 'BEL', description: '响铃' },
      { decimal: 8, hexadecimal: '08', character: 'BS', description: '退格' },
      { decimal: 9, hexadecimal: '09', character: 'HT', description: '水平制表符' },
      { decimal: 10, hexadecimal: '0A', character: 'LF', description: '换行' },
      { decimal: 11, hexadecimal: '0B', character: 'VT', description: '垂直制表符' },
      { decimal: 12, hexadecimal: '0C', character: 'FF', description: '换页' },
      { decimal: 13, hexadecimal: '0D', character: 'CR', description: '回车' },
      { decimal: 14, hexadecimal: '0E', character: 'SO', description: '移出' },
      { decimal: 15, hexadecimal: '0F', character: 'SI', description: '移入' },
      { decimal: 16, hexadecimal: '10', character: 'DLE', description: '数据链路转义' },
      { decimal: 17, hexadecimal: '11', character: 'DC1', description: '设备控制1' },
      { decimal: 18, hexadecimal: '12', character: 'DC2', description: '设备控制2' },
      { decimal: 19, hexadecimal: '13', character: 'DC3', description: '设备控制3' },
      { decimal: 20, hexadecimal: '14', character: 'DC4', description: '设备控制4' },
      { decimal: 21, hexadecimal: '15', character: 'NAK', description: '否定确认' },
      { decimal: 22, hexadecimal: '16', character: 'SYN', description: '同步空闲' },
      { decimal: 23, hexadecimal: '17', character: 'ETB', description: '传输块结束' },
      { decimal: 24, hexadecimal: '18', character: 'CAN', description: '取消' },
      { decimal: 25, hexadecimal: '19', character: 'EM', description: '介质中断' },
      { decimal: 26, hexadecimal: '1A', character: 'SUB', description: '替换' },
      { decimal: 27, hexadecimal: '1B', character: 'ESC', description: '转义' },
      { decimal: 28, hexadecimal: '1C', character: 'FS', description: '文件分隔符' },
      { decimal: 29, hexadecimal: '1D', character: 'GS', description: '组分隔符' },
      { decimal: 30, hexadecimal: '1E', character: 'RS', description: '记录分隔符' },
      { decimal: 31, hexadecimal: '1F', character: 'US', description: '单元分隔符' },
      { decimal: 32, hexadecimal: '20', character: ' ', description: '空格' },
      { decimal: 33, hexadecimal: '21', character: '!', description: '感叹号' },
      { decimal: 34, hexadecimal: '22', character: '"', description: '双引号' },
      { decimal: 35, hexadecimal: '23', character: '#', description: '井号' },
      { decimal: 36, hexadecimal: '24', character: '$', description: '美元符' },
      { decimal: 37, hexadecimal: '25', character: '%', description: '百分号' },
      { decimal: 38, hexadecimal: '26', character: '&', description: '和号' },
      { decimal: 39, hexadecimal: '27', character: "'", description: '单引号' },
      { decimal: 40, hexadecimal: '28', character: '(', description: '左圆括号' },
      { decimal: 41, hexadecimal: '29', character: ')', description: '右圆括号' },
      { decimal: 42, hexadecimal: '2A', character: '*', description: '星号' },
      { decimal: 43, hexadecimal: '2B', character: '+', description: '加号' },
      { decimal: 44, hexadecimal: '2C', character: ',', description: '逗号' },
      { decimal: 45, hexadecimal: '2D', character: '-', description: '减号' },
      { decimal: 46, hexadecimal: '2E', character: '.', description: '句号' },
      { decimal: 47, hexadecimal: '2F', character: '/', description: '斜杠' },
      { decimal: 48, hexadecimal: '30', character: '0', description: '数字0' },
      { decimal: 49, hexadecimal: '31', character: '1', description: '数字1' },
      { decimal: 50, hexadecimal: '32', character: '2', description: '数字2' },
      { decimal: 51, hexadecimal: '33', character: '3', description: '数字3' },
      { decimal: 52, hexadecimal: '34', character: '4', description: '数字4' },
      { decimal: 53, hexadecimal: '35', character: '5', description: '数字5' },
      { decimal: 54, hexadecimal: '36', character: '6', description: '数字6' },
      { decimal: 55, hexadecimal: '37', character: '7', description: '数字7' },
      { decimal: 56, hexadecimal: '38', character: '8', description: '数字8' },
      { decimal: 57, hexadecimal: '39', character: '9', description: '数字9' },
      { decimal: 58, hexadecimal: '3A', character: ':', description: '冒号' },
      { decimal: 59, hexadecimal: '3B', character: ';', description: '分号' },
      { decimal: 60, hexadecimal: '3C', character: '<', description: '小于号' },
      { decimal: 61, hexadecimal: '3D', character: '=', description: '等号' },
      { decimal: 62, hexadecimal: '3E', character: '>', description: '大于号' },
      { decimal: 63, hexadecimal: '3F', character: '?', description: '问号' },
      { decimal: 64, hexadecimal: '40', character: '@', description: 'at符号' },
      { decimal: 65, hexadecimal: '41', character: 'A', description: '大写字母A' },
      { decimal: 90, hexadecimal: '5A', character: 'Z', description: '大写字母Z' },
      { decimal: 97, hexadecimal: '61', character: 'a', description: '小写字母a' },
      { decimal: 122, hexadecimal: '7A', character: 'z', description: '小写字母z' },
    ];
    
    // 添加字母表中的其他字符
    for (let i = 66; i <= 90; i++) {
      asciiData.push({
        decimal: i,
        hexadecimal: i.toString(16).toUpperCase().padStart(2, '0'),
        character: String.fromCharCode(i),
        description: `大写字母${String.fromCharCode(i)}`
      });
    }
    
    for (let i = 98; i <= 122; i++) {
      asciiData.push({
        decimal: i,
        hexadecimal: i.toString(16).toUpperCase().padStart(2, '0'),
        character: String.fromCharCode(i),
        description: `小写字母${String.fromCharCode(i)}`
      });
    }
    
    // 按十进制值排序
    asciiData.sort((a, b) => a.decimal - b.decimal);
    
    setDataSource(asciiData);
  }, []);

  const columns = [
    {
      title: '十进制',
      dataIndex: 'decimal',
      key: 'decimal',
      sorter: (a: AsciiItem, b: AsciiItem) => a.decimal - b.decimal,
      render: (text: number) => (
        <Tag color={text < 32 ? 'blue' : text < 127 ? 'green' : 'red'}>
          {text}
        </Tag>
      )
    },
    {
      title: '十六进制',
      dataIndex: 'hexadecimal',
      key: 'hexadecimal',
      render: (text: string) => (
        <Tag color="purple">{text}</Tag>
      )
    },
    {
      title: '字符',
      dataIndex: 'character',
      key: 'character',
      render: (text: string) => {
        if (text === ' ') {
          return (
            <span style={{ 
              backgroundColor: '#f0f0f0',
              padding: '0 4px',
              border: '1px dashed #ccc'
            }}>
              空格
            </span>
          );
        }
        return <strong style={{ fontSize: '16px' }}>{text}</strong>;
      }
    },
    {
      title: '描述',
      dataIndex: 'description',
      key: 'description',
    },
  ];

  const filteredData = dataSource.filter(item => 
    item.character.toLowerCase().includes(filter.toLowerCase()) || 
    item.description.toLowerCase().includes(filter.toLowerCase()) ||
    item.decimal.toString().includes(filter) ||
    item.hexadecimal.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="tool-container">
      <Title level={2} className="page-title">ASCII 表</Title>
      <div className="card" style={{ 
        padding: '24px',
        marginBottom: '24px'
      }}>
        <Input.Search
          placeholder="搜索字符、描述或数值..."
          style={{ 
            marginBottom: 16, 
            width: 300,
            padding: '8px'
          }}
          onSearch={setFilter}
          enterButton
          size="large"
        />
        <Table 
          dataSource={filteredData} 
          columns={columns} 
          pagination={{ 
            pageSize: 50,
            showSizeChanger: true,
            pageSizeOptions: ['25', '50', '100']
          } as any} 
          scroll={{ y: 400 }} 
          rowKey="decimal"
          style={{
            borderRadius: '8px',
            overflow: 'hidden'
          }}
        />
      </div>
      
      <div style={{ 
        textAlign: 'center',
        padding: '16px',
        background: '#f0f8ff',
        borderRadius: '8px'
      }}>
        <Typography.Text type="secondary">
          ASCII 表包含了 0-127 的字符，其中 0-31 为控制字符，32-126 为可打印字符
        </Typography.Text>
      </div>
    </div>
  );
};

export default AsciiTable;