import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Footer from './components/Footer/Footer';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

const Content = styled.main`
  flex: 1;
  padding-top: 65px;
  margin: 0;
  display: flex;
  flex-direction: column;
  > * {
    margin: 0;
  }
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <VercelAnalytics />
        <SpeedInsights />
        <NavigationBar />
        <Content>
          <Routes>
            {/* 基础路由 - 后续重新设计时添加 */}
            <Route path="/" element={
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                height: '400px',
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#333'
              }}>
                欢迎来到彼励扶电商 - 页面正在重新设计中
              </div>
            } />
          </Routes>
        </Content>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;
