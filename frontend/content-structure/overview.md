# 项目页面结构和文案总览

本文档提供了彼励扶跨境电商网站所有页面和组件的结构与文案内容，便于未来更新页面主题和架构。

## 文件结构

```
frontend/content-structure/
├── README.md           # 说明文档
├── overview.md         # 本总览文件
├── home.json           # 首页页面结构和文案
├── service.json        # 服务页面结构和文案
├── about.json          # 关于页面结构和文案
├── contact.json        # 联系页面结构和文案
├── news.json           # 新闻页面结构和文案
├── admin.json          # 管理后台页面结构和文案
├── navigation.json     # 导航栏组件结构和文案
└── footer.json         # Footer组件结构和文案
```

## 页面和组件说明

### 1. 首页 (home.json)
- **页面标题**: 彼励扶 - 跨境电商解决方案
- **主要部分**:
  - HeroSection: 主要横幅区域
  - ServicesSection: 跨境优服介绍
  - CompetenceSection: 核心竞争力展示
  - CompanyIntro: 公司简介
  - AIEmpowerment: AI赋能介绍
  - ServiceCasesSection: 服务案例展示

### 2. 服务页面 (service.json)
- **页面标题**: 服务项目 - BELIEVE
- **主要部分**:
  - HeroSection: 服务页面横幅
  - CrossBorderEcosystem: 跨境全生态服务
  - PrimaryServices: 运营服务详情
  - CoreTechnology: 核心技术介绍
  - AIEmpowerment: AI赋能详情
  - ServiceCase: 客户案例展示

### 3. 关于页面 (about.json)
- **页面标题**: 关于我们 - BELIEVE
- **主要部分**:
  - HeroSection: 关于页面横幅
  - CompanyIntro: 公司简介
  - PhilosophySection: 公司理念
  - TeamSection: 团队风采
  - GoalsSection: 战略目标
  - PartnersSection: 合作伙伴
  - CareersSection: 人才招聘

### 4. 联系页面 (contact.json)
- **页面标题**: 联系我们 - BELIEVE
- **主要部分**:
  - BusinessSection: 商务合作表单
  - RecruitmentSection: 人才招聘信息

### 5. 新闻页面 (news.json)
- **页面标题**: 新闻资讯 - BELIEVE
- **主要部分**:
  - HeroSection: 新闻页面横幅
  - Categories: 新闻分类
  - FeaturedSection: 精选新闻
  - NewsGrid: 新闻列表

### 6. 管理后台 (admin.json)
- **页面标题**: 管理后台
- **主要部分**:
  - LoginPage: 管理员登录页面
  - AdminDashboard: 管理后台仪表板
  - DailyReport: 日报生成工具
  - MonthlyReport: 月报生成工具
  - ProductAnalysis: 产品分析工具
  - ExchangeRate: 汇率查询工具
  - FbaRevisePdf: FBA标签修改工具
  - PaymentReportHelp: 支付报告帮助文档

### 7. 导航栏组件 (navigation.json)
- **组件说明**: 网站顶部导航栏
- **主要部分**:
  - Logo: 彼励扶跨境标识
  - MenuItems: 导航菜单项，包含下拉子菜单

### 8. Footer组件 (footer.json)
- **组件说明**: 网站底部信息
- **主要部分**:
  - 快速链接
  - 联系方式
  - 社交媒体关注
  - 版权信息

## 使用说明

1. **修改页面内容**: 直接编辑对应的JSON文件，更新相应字段的值
2. **新增页面**: 参考现有JSON文件结构，创建新的页面配置文件
3. **组件复用**: 导航栏和Footer组件的配置可在多个页面间共享
4. **多语言支持**: 可以为每个字段添加多语言版本，例如：
   ```json
   {
     "title": {
       "zh": "首页",
       "en": "Home"
     }
   }
   ```

## 数据结构说明

每个页面和组件的JSON文件遵循以下基本结构：

```json
{
  "page": "页面名称",
  "meta": {
    "title": "页面标题",
    "description": "页面描述"
  },
  "sections": [
    {
      "name": "区块名称",
      "title": "区块标题",
      "description": "区块描述",
      // 其他区块特定内容
    }
  ]
}
```

## 更新建议

1. **定期备份**: 在进行重大修改前，建议备份现有配置文件
2. **版本控制**: 使用Git等版本控制工具管理配置文件的变更历史
3. **测试验证**: 修改后应在测试环境中验证页面显示效果
4. **文档更新**: 如有结构性变更，请及时更新本文档

## 联系方式

如有任何关于页面结构和文案的问题，请联系开发团队。