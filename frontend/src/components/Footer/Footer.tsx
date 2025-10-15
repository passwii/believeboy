import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
  color: white;
  padding: 80px 0 40px;
  margin-top: auto;
  position: relative;
  overflow: hidden;
`;

const FooterBackground = styled.div`
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(15, 23, 42, 0.03) 0%, transparent 50%);
  z-index: 1;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 0.8fr 1.2fr 1fr;
  gap: 60px;
  position: relative;
  z-index: 2;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const FooterSection = styled.div`
  h3 {
    font-size: 1.25rem;
    margin-bottom: 24px;
    position: relative;
    font-weight: 600;
    color: #f8fafc;
    letter-spacing: 0.05em;
    
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -10px;
      width: 50px;
      height: 3px;
      background: linear-gradient(90deg, #3b82f6 0%, #60a5fa 100%);
      border-radius: 2px;
    }
  }

  p {
    line-height: 1.7;
    margin-bottom: 16px;
    color: #cbd5e1;
    font-size: 0.95rem;
  }

  ul {
    list-style: none;
    padding: 0;
    
    li {
      margin-bottom: 14px;
      color: #cbd5e1;
      line-height: 1.6;
      transition: transform 0.2s ease;
      
      &:hover {
        transform: translateX(4px);
      }
      
      a {
        color: #cbd5e1;
        text-decoration: none;
        transition: color 0.3s ease;
        font-size: 0.95rem;
        display: inline-flex;
        align-items: center;
        
        &:hover {
          color: #60a5fa;
        }
        
        &::before {
          content: '→';
          margin-right: 8px;
          opacity: 0;
          transition: opacity 0.2s ease, transform 0.2s ease;
          transform: translateX(-4px);
        }
        
        &:hover::before {
          opacity: 1;
          transform: translateX(0);
        }
      }
    }
  }
`;

const CompanyName = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: #f8fafc;
  letter-spacing: 0.02em;
`;

// Copyright component is defined but not used
// const Copyright = styled.div`
//   text-align: center;
//   margin-top: 60px;
//   padding-top: 30px;
//   border-top: 1px solid rgba(255, 255, 255, 0.1);
//   font-size: 0.9rem;
//   color: #94a3b8;
//   position: relative;
//   z-index: 2;
// `;

const BottomBar = styled.div`
  background: rgba(15, 23, 42, 0.5);
  padding: 20px 0;
  margin-top: 40px;
  position: relative;
  z-index: 2;
`;

const BottomContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterBackground />
      <FooterContent>
        <FooterSection>
          <h3>快速链接</h3>
          <ul>
            <li><a href="/service/ecosystem">跨境全生态</a></li>
            <li><a href="/service/ai">AI 赋能</a></li>
            <li><a href="/about/company">公司概况</a></li>
            <li><a href="/contact/consultation">跨境咨询</a></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>联系方式</h3>
          <CompanyName>彼励扶电子商务（苏州）有限公司</CompanyName>
          <ul>
            <li>地址：江苏省苏州市吴江区鑫蹊商务大厦A座 605 室</li>
            <li>联系电话：+86 18666468991</li>
            <li>美国电话：+1 (909) 375-0156</li>
            <li>邮箱：marketing@believeboy.com</li>
          </ul>
        </FooterSection>
        
        <FooterSection>
          <h3>关注我们</h3>
          <p>关注我们的社交媒体账号，获取最新的跨境电商资讯和行业动态。</p>
          <ul>
            <li>微信：BelieveBoy</li>
            <li>公众号：BelieveBoy</li>
          </ul>
        </FooterSection>
      </FooterContent>
      
      <BottomBar>
        <BottomContent>
          <div>
            © {new Date().getFullYear()} 彼励扶电子商务（苏州）有限公司 版权所有
          </div>
          <div>
            跨境电商解决方案专家
          </div>
        </BottomContent>
      </BottomBar>
    </FooterContainer>
  );
};

export default Footer;
