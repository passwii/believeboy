import {
  MapPin,
  Mail,
  Phone,
  Clock,
  type LucideIcon,
} from "lucide-react";

// 咨询类型选项
export interface InquiryType {
  value: string;
  label: string;
}

export const inquiryTypes: InquiryType[] = [
  { value: "", label: "请选择咨询类型" },
  { value: "service", label: "服务咨询" },
  { value: "cooperation", label: "合作洽谈" },
  { value: "ai-tools", label: "AI工具" },
  { value: "other", label: "其他" },
];

// 联系方式数据
export interface ContactInfoItem {
  icon: LucideIcon;
  label: string;
  value: string;
  color: string;
}

export const contactInfo: ContactInfoItem[] = [
  {
    icon: MapPin,
    label: "公司地址",
    value: "江苏省苏州市工业园区",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Mail,
    label: "电子邮箱",
    value: "contact@believeboy.com",
    color: "from-cyan-500 to-teal-500",
  },
  {
    icon: Phone,
    label: "联系电话",
    value: "400-XXX-XXXX",
    color: "from-emerald-500 to-green-500",
  },
  {
    icon: Clock,
    label: "工作时间",
    value: "周一至周五 9:00-18:00",
    color: "from-indigo-500 to-violet-500",
  },
];

// 表单数据类型
export interface FormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  inquiryType: string;
  message: string;
}
