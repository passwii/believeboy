export const siteConfig = {
  name: "彼励扶",
  fullName: "彼励扶电子商务（苏州）有限公司",
  tagline: "让中国品牌闪耀全球",
  description: "专业跨境电商运营 × AI智能驱动",
  url: "https://believeboy.com",
  email: "business@believeboy.com",
  phone: "400-XXX-XXXX",
  address: {
    city: "苏州市",
    district: "高新区",
    province: "江苏省",
  },
  social: {
    wechat: "believeboy",
    linkedin: "#",
  },
  navigation: {
    main: [
      { href: "/", label: "首页" },
      { href: "/about", label: "关于我们" },
      { href: "/services", label: "服务" },
      { href: "/ai-empowerment", label: "AI赋能" },
      { href: "/cases", label: "案例" },
      { href: "/pricing", label: "定价" },
    ],
    cta: { href: "/contact", label: "联系我们" },
  },
  stats: [
    { value: "3年", label: "行业深耕" },
    { value: "10+", label: "合作品牌" },
    { value: "7个", label: "运营国家" },
    { value: "100M+", label: "年GMV" },
  ],
};

export type SiteConfig = typeof siteConfig;
