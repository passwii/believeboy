# Next.js 公司官网项目结构

## 基础配置文件
```
believeboy/
├── .gitignore
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── package.json
├── antd-theme.ts              # Ant Design 主题配置
└── README.md
```

## App Router 结构 (Next.js 13+)
```
app/
├── layout.tsx                 # 根布局组件
├── page.tsx                   # 主页
├── globals.css                # 全局样式
├── loading.tsx                # 全局加载组件
├── error.tsx                  # 全局错误组件
├── not-found.tsx              # 404页面
├── favicon.ico
└── [pages]/
    ├── services/
    │   └── page.tsx           # 服务页面
    ├── about/
    │   └── page.tsx           # 关于我们页面
    ├── contact/
    │   └── page.tsx           # 联系我们页面
    ├── careers/
    │   └── page.tsx           # 社会招聘页面
    └── seo/
        └── page.tsx           # SEO服务页面
```

## 组件目录
```
components/
├── ui/                        # Ant Design 基础UI组件封装
│   ├── CustomButton.tsx       # 自定义按钮
│   ├── CustomCard.tsx         # 自定义卡片
│   ├── CustomForm.tsx         # 自定义表单
│   └── ...
├── layout/                    # 布局组件
│   ├── Header.tsx             # 导航栏
│   ├── Footer.tsx             # 页脚
│   └── Navigation.tsx         # 导航菜单
├── sections/                  # 页面区块组件
│   ├── Hero.tsx               # 主页英雄区
│   ├── AboutSection.tsx       # 关于我们区块
│   ├── ServicesSection.tsx    # 服务展示区块
│   ├── ContactSection.tsx     # 联系区块
│   ├── Testimonials.tsx       # 客户评价区块
│   └── SEOSection.tsx         # SEO服务区块
└── common/                    # 通用组件
    ├── CallToAction.tsx       # 行动召唤按钮
    ├── SectionTitle.tsx       # 区块标题
    └── ImageGallery.tsx       # 图片画廊
```

## 资源目录
```
public/
├── images/
│   ├── logo/
│   ├── hero/
│   ├── services/
│   ├── team/
│   └── assets/
├── icons/
└── documents/
```

## 工具和类型目录
```
lib/
├── utils.ts                   # 工具函数
├── constants.ts               # 常量定义
└── types.ts                   # TypeScript类型定义
```

## 样式目录
```
styles/
└── components.css             # 组件特定样式
```

## 数据目录
```
data/
├── services.ts                # 服务数据
├── team.ts                    # 团队成员数据
└── company.ts                 # 公司信息数据