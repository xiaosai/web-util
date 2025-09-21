import * as React from 'react';
import { Table, Typography, Input, Tag, Row, Col } from 'antd';

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
      { decimal: 1, hexadecimal: '01', character: 'SOH', description: '标题开始(start of headline)' },
      { decimal: 2, hexadecimal: '02', character: 'STX', description: '正文开始(start of text)' },
      { decimal: 3, hexadecimal: '03', character: 'ETX', description: '正文结束(end of text)' },
      { decimal: 4, hexadecimal: '04', character: 'EOT', description: '传输结束(end of transmission)' },
      { decimal: 5, hexadecimal: '05', character: 'ENQ', description: '请求(enquiry)' },
      { decimal: 6, hexadecimal: '06', character: 'ACK', description: '确认(acknowledge)' },
      { decimal: 7, hexadecimal: '07', character: 'BEL', description: '响铃(bell)' },
      { decimal: 8, hexadecimal: '08', character: 'BS', description: '退格(backspace)' },
      { decimal: 9, hexadecimal: '09', character: 'HT', description: '水平制表符(horizontal tab)' },
      { decimal: 10, hexadecimal: '0A', character: 'LF', description: '换行(line feed, new line)' },
      { decimal: 11, hexadecimal: '0B', character: 'VT', description: '垂直制表符(vertical tab)' },
      { decimal: 12, hexadecimal: '0C', character: 'FF', description: '换页(form feed, new page)' },
      { decimal: 13, hexadecimal: '0D', character: 'CR', description: '回车(carriage return)' },
      { decimal: 14, hexadecimal: '0E', character: 'SO', description: '移出(shift out)' },
      { decimal: 15, hexadecimal: '0F', character: 'SI', description: '移入(shift in)' },
      { decimal: 16, hexadecimal: '10', character: 'DLE', description: '数据链路转义(data link escape)' },
      { decimal: 17, hexadecimal: '11', character: 'DC1', description: '设备控制1(device control 1)' },
      { decimal: 18, hexadecimal: '12', character: 'DC2', description: '设备控制2(device control 2)' },
      { decimal: 19, hexadecimal: '13', character: 'DC3', description: '设备控制3(device control 3)' },
      { decimal: 20, hexadecimal: '14', character: 'DC4', description: '设备控制4(device control 4)' },
      { decimal: 21, hexadecimal: '15', character: 'NAK', description: '否定确认(negative acknowledge)' },
      { decimal: 22, hexadecimal: '16', character: 'SYN', description: '同步空闲(synchronous idle)' },
      { decimal: 23, hexadecimal: '17', character: 'ETB', description: '传输块结束(end of trans. block)' },
      { decimal: 24, hexadecimal: '18', character: 'CAN', description: '取消(cancel)' },
      { decimal: 25, hexadecimal: '19', character: 'EM', description: '介质中断(end of medium)' },
      { decimal: 26, hexadecimal: '1A', character: 'SUB', description: '替换(substitute)' },
      { decimal: 27, hexadecimal: '1B', character: 'ESC', description: '转义(escape)' },
      { decimal: 28, hexadecimal: '1C', character: 'FS', description: '文件分隔符(file separator)' },
      { decimal: 29, hexadecimal: '1D', character: 'GS', description: '组分隔符(group separator)' },
      { decimal: 30, hexadecimal: '1E', character: 'RS', description: '记录分隔符(record separator)' },
      { decimal: 31, hexadecimal: '1F', character: 'US', description: '单元分隔符(unit separator)' },
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
      // 添加缺失的字符 66-90
      { decimal: 66, hexadecimal: '42', character: 'B', description: '大写字母B' },
      { decimal: 67, hexadecimal: '43', character: 'C', description: '大写字母C' },
      { decimal: 68, hexadecimal: '44', character: 'D', description: '大写字母D' },
      { decimal: 69, hexadecimal: '45', character: 'E', description: '大写字母E' },
      { decimal: 70, hexadecimal: '46', character: 'F', description: '大写字母F' },
      { decimal: 71, hexadecimal: '47', character: 'G', description: '大写字母G' },
      { decimal: 72, hexadecimal: '48', character: 'H', description: '大写字母H' },
      { decimal: 73, hexadecimal: '49', character: 'I', description: '大写字母I' },
      { decimal: 74, hexadecimal: '4A', character: 'J', description: '大写字母J' },
      { decimal: 75, hexadecimal: '4B', character: 'K', description: '大写字母K' },
      { decimal: 76, hexadecimal: '4C', character: 'L', description: '大写字母L' },
      { decimal: 77, hexadecimal: '4D', character: 'M', description: '大写字母M' },
      { decimal: 78, hexadecimal: '4E', character: 'N', description: '大写字母N' },
      { decimal: 79, hexadecimal: '4F', character: 'O', description: '大写字母O' },
      { decimal: 80, hexadecimal: '50', character: 'P', description: '大写字母P' },
      { decimal: 81, hexadecimal: '51', character: 'Q', description: '大写字母Q' },
      { decimal: 82, hexadecimal: '52', character: 'R', description: '大写字母R' },
      { decimal: 83, hexadecimal: '53', character: 'S', description: '大写字母S' },
      { decimal: 84, hexadecimal: '54', character: 'T', description: '大写字母T' },
      { decimal: 85, hexadecimal: '55', character: 'U', description: '大写字母U' },
      { decimal: 86, hexadecimal: '56', character: 'V', description: '大写字母V' },
      { decimal: 87, hexadecimal: '57', character: 'W', description: '大写字母W' },
      { decimal: 88, hexadecimal: '58', character: 'X', description: '大写字母X' },
      { decimal: 89, hexadecimal: '59', character: 'Y', description: '大写字母Y' },
      { decimal: 90, hexadecimal: '5A', character: 'Z', description: '大写字母Z' },
      // 添加缺失的字符 91-96
      { decimal: 91, hexadecimal: '5B', character: '[', description: '左方括号' },
      { decimal: 92, hexadecimal: '5C', character: '\\', description: '反斜杠' },
      { decimal: 93, hexadecimal: '5D', character: ']', description: '右方括号' },
      { decimal: 94, hexadecimal: '5E', character: '^', description: '脱字符' },
      { decimal: 95, hexadecimal: '5F', character: '_', description: '下划线' },
      { decimal: 96, hexadecimal: '60', character: '`', description: '反引号' },
      { decimal: 97, hexadecimal: '61', character: 'a', description: '小写字母a' },
      // 添加缺失的字符 98-122
      { decimal: 98, hexadecimal: '62', character: 'b', description: '小写字母b' },
      { decimal: 99, hexadecimal: '63', character: 'c', description: '小写字母c' },
      { decimal: 100, hexadecimal: '64', character: 'd', description: '小写字母d' },
      { decimal: 101, hexadecimal: '65', character: 'e', description: '小写字母e' },
      { decimal: 102, hexadecimal: '66', character: 'f', description: '小写字母f' },
      { decimal: 103, hexadecimal: '67', character: 'g', description: '小写字母g' },
      { decimal: 104, hexadecimal: '68', character: 'h', description: '小写字母h' },
      { decimal: 105, hexadecimal: '69', character: 'i', description: '小写字母i' },
      { decimal: 106, hexadecimal: '6A', character: 'j', description: '小写字母j' },
      { decimal: 107, hexadecimal: '6B', character: 'k', description: '小写字母k' },
      { decimal: 108, hexadecimal: '6C', character: 'l', description: '小写字母l' },
      { decimal: 109, hexadecimal: '6D', character: 'm', description: '小写字母m' },
      { decimal: 110, hexadecimal: '6E', character: 'n', description: '小写字母n' },
      { decimal: 111, hexadecimal: '6F', character: 'o', description: '小写字母o' },
      { decimal: 112, hexadecimal: '70', character: 'p', description: '小写字母p' },
      { decimal: 113, hexadecimal: '71', character: 'q', description: '小写字母q' },
      { decimal: 114, hexadecimal: '72', character: 'r', description: '小写字母r' },
      { decimal: 115, hexadecimal: '73', character: 's', description: '小写字母s' },
      { decimal: 116, hexadecimal: '74', character: 't', description: '小写字母t' },
      { decimal: 117, hexadecimal: '75', character: 'u', description: '小写字母u' },
      { decimal: 118, hexadecimal: '76', character: 'v', description: '小写字母v' },
      { decimal: 119, hexadecimal: '77', character: 'w', description: '小写字母w' },
      { decimal: 120, hexadecimal: '78', character: 'x', description: '小写字母x' },
      { decimal: 121, hexadecimal: '79', character: 'y', description: '小写字母y' },
      { decimal: 122, hexadecimal: '7A', character: 'z', description: '小写字母z' },
      // 添加缺失的字符 123-126
      { decimal: 123, hexadecimal: '7B', character: '{', description: '左花括号' },
      { decimal: 124, hexadecimal: '7C', character: '|', description: '竖线' },
      { decimal: 125, hexadecimal: '7D', character: '}', description: '右花括号' },
      { decimal: 126, hexadecimal: '7E', character: '~', description: '波浪号' },
      // 添加 127 的 DEL 字符
      { decimal: 127, hexadecimal: '7F', character: 'DEL', description: '删除(delete)' },
    ];
    
    // 按十进制值排序
    asciiData.sort((a, b) => a.decimal - b.decimal);
    
    setDataSource(asciiData);
  }, []);

  const columns = [
    {
      title: '十进制',
      dataIndex: 'decimal',
      key: 'decimal',
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

  // 将数据分为两个表格，每个表格最多64行
  const firstTableData = filteredData.slice(0, 64);
  const secondTableData = filteredData.slice(64);

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
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Table 
              dataSource={firstTableData} 
              columns={columns} 
              pagination={false}
              rowKey="decimal"
              style={{
                borderRadius: '8px',
                overflow: 'hidden'
              }}
              size="small"
            />
          </Col>
          <Col span={12}>
            <Table 
              dataSource={secondTableData} 
              columns={columns} 
              pagination={false}
              rowKey="decimal"
              style={{
                borderRadius: '8px',
                overflow: 'hidden'
              }}
              size="small"
            />
          </Col>
        </Row>
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