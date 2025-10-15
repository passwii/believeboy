// 网站基本信息
export const SITE_CONFIG = {
  name: 'Believe Boy',
  description: '专业数字解决方案提供商',
  url: 'https://believeboy.com',
  ogImage: '/og-image.jpg',
  links: {
    email: 'contact@believeboy.com',
    phone: '+86-xxx-xxxx-xxxx',
    address: '中国上海市浦东新区',
  },
}

// 导航菜单项
export const NAV_ITEMS = [
  { id: 'home', label: '首页', href: '/' },
  { id: 'services', label: '服务', href: '/services' },
  { id: 'about', label: '关于我们', href: '/about' },
  { id: 'careers', label: '社会招聘', href: '/careers' },
  { id: 'contact', label: '联系我们', href: '/contact' },
]

// 社交媒体链接
export const SOCIAL_LINKS = [
  { id: 'wechat', label: '微信', href: '#', icon: 'wechat' },
  { id: 'weibo', label: '微博', href: '#', icon: 'weibo' },
  { id: 'linkedin', label: 'LinkedIn', href: '#', icon: 'linkedin' },
  { id: 'twitter', label: 'Twitter', href: '#', icon: 'twitter' },
]

// 页脚链接
export const FOOTER_LINKS = {
  services: [
    { id: 'web-dev', label: '网站开发', href: '/services#web-development' },
    { id: 'mobile-app', label: '移动应用', href: '/services#mobile-app' },
    { id: 'ui-design', label: 'UI设计', href: '/services#ui-design' },
  ],
  company: [
    { id: 'about', label: '关于我们', href: '/about' },
    { id: 'team', label: '团队介绍', href: '/about#team' },
    { id: 'careers', label: '加入我们', href: '/careers' },
    { id: 'contact', label: '联系我们', href: '/contact' },
  ],
  resources: [
    { id: 'blog', label: '博客', href: '/blog' },
    { id: 'case-studies', label: '案例研究', href: '/case-studies' },
    { id: 'help', label: '帮助中心', href: '/help' },
    { id: 'privacy', label: '隐私政策', href: '/privacy' },
  ],
}

// 联系信息
export const CONTACT_INFO = {
  address: '中国上海市浦东新区张江高科技园区',
  phone: '+86-021-12345678',
  email: 'contact@believeboy.com',
  workingHours: '周一至周五 9:00-18:00',
}

// 公司信息
export const COMPANY_INFO = {
  founded: '2020',
  employees: '50+',
  projects: '200+',
  clients: '100+',
}

// 默认SEO关键词
export const DEFAULT_KEYWORDS = [
  '网站开发',
  '移动应用',
  'SEO优化',
  '数字解决方案',
  'UI设计',
  '前端开发',
  '后端开发',
  '全栈开发',
  'Believe Boy',
]

// 分享配置
export const SHARE_CONFIG = {
  title: 'Believe Boy - 专业数字解决方案',
  description: 'Believe Boy提供专业的数字解决方案，包括网站开发、移动应用、SEO优化等服务',
  url: 'https://believeboy.com',
  hashtags: ['网站开发', '数字解决方案', 'Believe Boy'],
}

// 动画持续时间（毫秒）
export const ANIMATION_DURATION = {
  fast: 200,
  normal: 300,
  slow: 500,
}

// 断点配置
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
}

// 表单验证规则
export const VALIDATION_RULES = {
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: '请输入有效的邮箱地址',
  },
  phone: {
    required: false,
    pattern: /^1[3-9]\d{9}$/,
    message: '请输入有效的手机号码',
  },
  name: {
    required: true,
    minLength: 2,
    maxLength: 50,
    message: '姓名长度应在2-50个字符之间',
  },
  message: {
    required: true,
    minLength: 10,
    maxLength: 500,
    message: '消息长度应在10-500个字符之间',
  },
}