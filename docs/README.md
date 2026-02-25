# Believeboy 官网文档

> AI 驱动的数字化转型专家

这里是 Believeboy 官网项目的文档中心，包含页面信息、设计说明、技术架构等完整文档。

---

## 📁 文档结构

```
docs/
├── README.md                          # 文档首页（本文档）
├── index/                             # 首页
│   ├── info.md                        # 首页信息
│   └── design.md                      # 首页设计
├── about/                             # 关于我们
│   ├── info.md                        # 关于我们信息
│   └── design.md                      # 关于我们设计
├── services/                          # 服务介绍
│   ├── info.md                        # 服务介绍信息
│   └── design.md                      # 服务介绍设计
├── ai-empowerment/                    # AI赋能
│   ├── info.md                        # AI赋能信息
│   └── design.md                      # AI赋能设计
├── cases/                             # 案例展示
│   ├── info.md                        # 案例展示信息
│   └── design.md                      # 案例展示设计
├── pricing/                           # 定价方案
│   ├── info.md                        # 定价方案信息
│   └── design.md                      # 定价方案设计
├── contact/                           # 联系我们
│   ├── info.md                        # 联系我们信息
│   └── design.md                      # 联系我们设计
└── development/                       # 开发者文档
    ├── architecture.md                # 技术架构文档
    └── deployment.md                  # 部署指南
```
docs/
├── README.md                          # 文档首页（本文档）
├── index/                             # 前端页面文档
│   ├── info/                          # 页面信息（从代码提取）
│   │   ├── pricing.md                 # 定价方案信息
│   │   ├── services.md                # 服务介绍信息
│   │   ├── contact.md                 # 联系我们信息
│   │   └── ...                        # 其他页面
│   └── design/                        # 页面设计说明
│       ├── pricing.md                 # 定价方案设计
│       ├── services.md                # 服务介绍设计
│       ├── contact.md                 # 联系我们设计
│       └── ...                        # 其他页面
└── development/                       # 开发者文档
    ├── architecture.md                # 技术架构文档
    └── deployment.md                  # 部署指南
```
docs/
├── README.md                      # 文档首页（本文档）
├── guides/                        # 指南
│   └── deployment.md             # 部署指南
├── architecture/                  # 技术架构
│   └── technical-architecture.md # 技术架构文档
├── design/                       # 设计文档
│   ├── design-system.md          # UI/UX 设计系统
│   └── x-package-design.md       # X 套餐页面设计
└── company-info/                  # 公司信息
    ├── index.md                  # 公司首页
    ├── about.md                  # 关于我们
    ├── services.md               # 服务介绍
    ├── ai-empowerment.md        # AI 赋能
    ├── cases.md                  # 案例展示
    ├── pricing.md                # 定价方案
    └── contact.md                # 联系我们
```

---

## 🚀 快速导航

### 前端页面文档

| 页面 | 信息文档 | 设计文档 |
|------|---------|---------|
| **首页** | [index/info.md](./index/info.md) | [index/design.md](./index/design.md) |
| **关于我们** | [about/info.md](./about/info.md) | [about/design.md](./about/design.md) |
| **服务介绍** | [services/info.md](./services/info.md) | [services/design.md](./services/design.md) |
| **AI赋能** | [ai-empowerment/info.md](./ai-empowerment/info.md) | [ai-empowerment/design.md](./ai-empowerment/design.md) |
| **案例展示** | [cases/info.md](./cases/info.md) | [cases/design.md](./cases/design.md) |
| **定价方案** | [pricing/info.md](./pricing/info.md) | [pricing/design.md](./pricing/design.md) |
| **联系我们** | [contact/info.md](./contact/info.md) | [contact/design.md](./contact/design.md) |

### 开发者文档 (development/)
技术实现相关的文档。

| 文档 | 链接 | 说明 |
|------|------|------|
| **技术架构** | [architecture.md](./development/architecture.md) | 完整的技术架构设计、技术栈、目录结构等 |
| **部署指南** | [deployment.md](./development/deployment.md) | 项目部署到各个平台的详细步骤 |

---

## 📖 文档说明

### 页面文档结构

每个页面目录下包含两个文档：

#### `info.md` - 页面信息
从代码中提取，包含：
- 页面基本信息（路径、标题、Meta 信息）
- 页面结构和区块组成
- 关键数据点
- 交互功能
- 设计特点概要

**用途**：快速了解页面包含的内容和功能

#### `design.md` - 页面设计
详细说明页面设计，包含：
- 色彩系统和主题
- 布局结构
- 组件设计
- 动画效果
- 排版系统
- 响应式设计
- 可访问性

**用途**：了解页面设计的细节和实现方式

### development/ - 开发者文档
这些文档面向开发者，包含：
- 技术架构设计
- 部署指南
- 性能优化
- 开发规范

**用途**：开发、部署和维护项目

---

## 🔄 文档更新

### 如何添加新页面文档

当添加新页面时，按以下步骤创建文档：

1. **创建页面目录** `docs/[page-name]/`
   ```bash
   mkdir -p docs/[page-name]
   ```

2. **创建页面信息文档** `docs/[page-name]/info.md`
   - 从代码中提取页面结构
   - 记录关键数据点和交互功能
   - 参考现有文档的格式

3. **创建页面设计文档** `docs/[page-name]/design.md`
   - 记录色彩系统、布局结构
   - 说明组件设计和动画效果
   - 包含响应式设计和可访问性信息

4. **更新本 README.md**
   - 在快速导航中添加新页面的链接

---

## 🔗 相关链接

- **官网**: https://believeboy.com
- **GitHub**: https://github.com/believeboy/website
- **技术栈**: Next.js 16 + React 19 + TypeScript 5 + Tailwind CSS 4

---

**最后更新**: 2026-02-16
