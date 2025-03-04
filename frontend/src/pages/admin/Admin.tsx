import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Card, Tabs, Tab } from '@mui/material';

const AdminPage: React.FC = () => {
  const [tabValue, setTabValue] = useState('BLF工具');
  const navigate = useNavigate();
  
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      navigate('/admin/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/admin/login');
  };

  const stats = [
    { title: '总用户数', value: '1,234' },
    { title: '活跃会话', value: '156' },
    { title: '日访问量', value: '2,345' },
    { title: '销售收入', value: '$122,345' },
  ];

  return (
    <Container>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <Typography variant="h4">管理后台</Typography>
        <Button variant="contained" color="primary" onClick={handleLogout}>退出登录</Button>
      </div>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '20px' }}>
        {stats.map((stat, index) => (
          <Card key={index} style={{ width: '24%', margin: '1%' }}>
            <div>
              <Typography>{stat.title}</Typography>
              <Typography>{stat.value}</Typography>
            </div>
          </Card>
        ))}
      </div>

      <Tabs value={tabValue} onChange={(event, newValue) => setTabValue(newValue)}>
        <Tab label="BLF工具" />
        <Tab label="数据分析" />
        <Tab label="数据概览" />
        <Tab label="用户管理" />
      </Tabs>

      {tabValue === 'BLF工具' && (
        <div>
          {/* 这里可以添加 BLF工具 的内容 */}
        </div>
      )}
      {tabValue === '数据分析' && (
        <div>
          {/* 这里可以添加 数据分析 的内容 */}
        </div>
      )}
      {tabValue === '数据概览' && (
        <div>
          <Typography>数据功能开发中...</Typography>
        </div>
      )}
      {tabValue === '用户管理' && (
        <div>
          <Typography>用户管理功能开发中...</Typography>
        </div>
      )}
    </Container>
  );
};

export default AdminPage;
