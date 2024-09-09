# 公司官网和管理后台

这是一个使用 Flask 构建的简单公司官网和管理后台系统。

## 功能特点

- 公司官网首页，包含四个主要板块
- 管理员登录系统
- 简单的后台管理面板

## 快速开始

1. 克隆此仓库到本地机器
2. 安装所需依赖：
   ```pip install flask```
3. 运行应用：
   ```python start.py```
4. 在浏览器中访问 `http://localhost:5000`

## 项目结构

- `start.py`: 主应用文件，包含所有路由和逻辑
- `templates/`: 存放所有 HTML 模板
  - `index.html`: 公司官网首页
  - `admin.html`: 管理员登录页面
  - `admin_panel.html`: 管理后台面板

## 管理员登录

- 用户名: damon
- 密码: rock2024

注意：在实际生产环境中，请确保更改默认的用户名和密码，并实施更安全的认证机制。

## 注意事项

- 此项目仅用于演示目的，不适合直接用于生产环境
- 在实际部署时，请确保实施适当的安全措施，如密码加密、HTTPS 等

## 贡献

欢迎提交 issues 和 pull requests 来改进这个项目。

## 许可证

[MIT License](https://opensource.org/licenses/MIT)
