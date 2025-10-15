# Next.js 公司官网开发流程

## 开发阶段概览

```mermaid
graph TD
    A[项目初始化] --> B[创建文件结构]
    B --> C[配置基础设置]
    C --> D[创建基础组件]
    D --> E[开发主页Hero区域]
    E --> F[开发主页About区域]
    F --> G[开发主页Services区域]
    G --> H[完成主页其他区域]
    H --> I[创建服务页面]
    I --> J[创建关于我们页面]
    J --> K[创建联系我们页面]
    K --> L[创建招聘页面]
    L --> M[创建SEO页面]
    M --> N[响应式优化]
    N --> O[添加动画效果]
    O --> P[性能优化和SEO]
    
    style A fill:#e1f5fe
    style O fill:#c8e6c9
```

## 主页开发详细流程

```mermaid
graph LR
    A[主页结构] --> B[Hero区域]
    B --> C[About区域]
    C --> D[Services区域]
    D --> E[其他区域]
    
    B --> B1[标题文案]
    B --> B2[背景图片]
    B --> B3[CTA按钮]
    
    C --> C1[公司介绍]
    C --> C2[团队展示]
    C --> C3[企业文化]
    
    D --> D1[服务列表]
    D --> D2[服务详情]
    D --> D3[案例展示]
    
    E --> E1[客户评价]
    E --> E2[合作伙伴]
    E --> E3[联系方式]
```

## 组件开发优先级

1. **核心布局组件**
   - Header/Navigation
   - Footer
   - Layout

2. **基础UI组件**
   - Button
   - Card
   - Input
   - Modal

3. **主页核心区域**
   - Hero Section
   - About Section
   - Services Section

4. **其他页面组件**
   - 服务页面
   - 关于我们页面
   - 联系我们页面
   - 招聘页面
   - SEO服务页面

## 技术栈

- **框架**: Next.js 13+ (App Router)
- **语言**: TypeScript
- **UI组件库**: Ant Design
- **样式**: Tailwind CSS (用于布局和自定义样式)
- **图标**: Ant Design Icons
- **动画**: Framer Motion (可选)
- **表单**: Ant Design Form + React Hook Form (可选)
- **图片优化**: Next.js Image 组件