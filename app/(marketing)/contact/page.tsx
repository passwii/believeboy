"use client";

import { useState } from "react";
import { FadeIn } from "@/components/effects/fade-in";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/effects/slide-up";
import { CTASection } from "@/components/sections/shared/cta-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  User,
  Building2,
  HelpCircle
} from "lucide-react";

// 咨询类型选项
const inquiryTypes = [
  { value: "", label: "请选择咨询类型" },
  { value: "service", label: "服务咨询" },
  { value: "cooperation", label: "合作洽谈" },
  { value: "ai-tools", label: "AI工具" },
  { value: "other", label: "其他" },
];

// 合作流程步骤
const processSteps = [
  {
    step: "01",
    title: "初步咨询",
    description: "了解您的产品、目标和需求，为您提供初步建议",
    icon: MessageSquare,
  },
  {
    step: "02",
    title: "需求诊断",
    description: "免费为您提供市场分析和运营诊断",
    icon: HelpCircle,
  },
  {
    step: "03",
    title: "方案定制",
    description: "根据诊断结果制定专属合作方案",
    icon: CheckCircle2,
  },
  {
    step: "04",
    title: "签约合作",
    description: "明确目标、KPI和服务内容，正式启动合作",
    icon: ArrowRight,
  },
];

// 联系方式数据
const contactInfo = [
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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    inquiryType: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "请输入您的姓名";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "请输入联系电话";
    } else if (!/^1[3-9]\d{9}$/.test(formData.phone.trim())) {
      newErrors.phone = "请输入有效的手机号码";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "请输入电子邮箱";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "请输入有效的邮箱地址";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // 模拟提交
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: "",
      company: "",
      phone: "",
      email: "",
      inquiryType: "",
      message: "",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <main className="min-h-screen">
      {/* 页面头部 */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-24 md:py-32 lg:py-40">
        {/* 背景装饰 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-1/2 -left-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-cyan-400 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>联系我们</span>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                联系我们
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                期待与您的合作，共同开启出海之旅
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 联系信息Section */}
      <section className="py-20 md:py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* 左栏：联系表单 */}
            <SlideUp>
              <Card className="shadow-lg border-0">
                <CardContent className="p-8">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">在线咨询</h2>
                    <p className="text-slate-600">填写以下信息，我们将在24小时内与您联系</p>
                  </div>
                  
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">提交成功！</h3>
                      <p className="text-slate-600">感谢您的咨询，我们的专业顾问将在24小时内与您联系。</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* 姓名 */}
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          姓名 <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <Input
                            placeholder="请输入您的姓名"
                            value={formData.name}
                            onChange={(e) => handleChange("name", e.target.value)}
                            className={`pl-10 ${errors.name ? "border-red-500 focus-visible:ring-red-200" : ""}`}
                          />
                        </div>
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                        )}
                      </div>
                      
                      {/* 公司名称 */}
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          公司名称
                        </label>
                        <div className="relative">
                          <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <Input
                            placeholder="请输入公司名称"
                            value={formData.company}
                            onChange={(e) => handleChange("company", e.target.value)}
                            className="pl-10"
                          />
                        </div>
                      </div>
                      
                      {/* 联系电话 */}
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          联系电话 <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <Input
                            placeholder="请输入联系电话"
                            value={formData.phone}
                            onChange={(e) => handleChange("phone", e.target.value)}
                            className={`pl-10 ${errors.phone ? "border-red-500 focus-visible:ring-red-200" : ""}`}
                          />
                        </div>
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                        )}
                      </div>
                      
                      {/* 邮箱 */}
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          邮箱 <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <Input
                            type="email"
                            placeholder="请输入电子邮箱"
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            className={`pl-10 ${errors.email ? "border-red-500 focus-visible:ring-red-200" : ""}`}
                          />
                        </div>
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                      </div>
                      
                      {/* 咨询类型 */}
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          咨询类型
                        </label>
                        <select
                          value={formData.inquiryType}
                          onChange={(e) => handleChange("inquiryType", e.target.value)}
                          className="w-full h-9 px-3 rounded-md border border-input bg-transparent text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          {inquiryTypes.map((type) => (
                            <option key={type.value} value={type.value}>
                              {type.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      
                      {/* 留言内容 */}
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          留言内容
                        </label>
                        <Textarea
                          placeholder="请描述您的需求或问题..."
                          value={formData.message}
                          onChange={(e) => handleChange("message", e.target.value)}
                          className="min-h-[120px] resize-none"
                        />
                      </div>
                      
                      {/* 提交按钮 */}
                      <Button
                        type="submit"
                        className="w-full h-12 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                                fill="none"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              />
                            </svg>
                            提交中...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <Send className="w-4 h-4" />
                            提交咨询
                          </span>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </SlideUp>
            
            {/* 右栏：联系方式 */}
            <div className="space-y-8">
              <SlideUp delay={0.1}>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">联系方式</h2>
                  <p className="text-slate-600 mb-8">
                    无论您处于出海的哪个阶段，我们都乐意为您提供专业建议。您可以通过以下方式联系我们。
                  </p>
                </div>
              </SlideUp>
              
              <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                {contactInfo.map((item, index) => (
                  <StaggerItem key={index}>
                    <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <CardContent className="p-6 flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}>
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-500 mb-1">{item.label}</p>
                          <p className="text-lg font-semibold text-slate-900">{item.value}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                ))}
              </StaggerContainer>
              
              {/* 快速提示 */}
              <SlideUp delay={0.5}>
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">快速响应承诺</h4>
                      <p className="text-sm text-slate-600">
                        我们承诺在收到咨询后的24小时内安排专业顾问与您联系，为您提供初步建议和解决方案。
                      </p>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          </div>
        </div>
      </section>

      {/* 合作流程Section */}
      <section className="py-20 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
                <ArrowRight className="w-4 h-4" />
                <span>合作流程</span>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                简单四步，开启合作
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-lg text-slate-600">
                清晰透明的合作流程，让您每一步都心中有数
              </p>
            </FadeIn>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {processSteps.map((step, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="relative group">
                  {/* 连接线 */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-transparent z-0" />
                  )}
                  
                  <div className="relative z-10 bg-white rounded-2xl border border-slate-200 p-6 lg:p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                    {/* 步骤编号 */}
                    <div className="text-5xl font-bold text-slate-100 mb-4">
                      {step.step}
                    </div>
                    
                    {/* 图标 */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    {/* 标题 */}
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {step.title}
                    </h3>
                    
                    {/* 描述 */}
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 地图占位Section */}
      <section className="py-20 md:py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
                <MapPin className="w-4 h-4" />
                <span>公司位置</span>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                欢迎来访
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-lg text-slate-600">
                我们期待与您面对面交流，共同探讨出海战略
              </p>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.3}>
            <Card className="border-0 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                {/* 地图占位区域 */}
                <div className="relative w-full h-[400px] bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                  {/* 装饰网格 */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="w-full h-full" style={{
                      backgroundImage: `linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)`,
                      backgroundSize: '40px 40px'
                    }} />
                  </div>
                  
                  {/* 中心内容 */}
                  <div className="relative z-10 text-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <MapPin className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">彼励扶电子商务（苏州）有限公司</h3>
                    <p className="text-slate-600 mb-4">江苏省苏州市工业园区</p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-sm text-slate-600">地图加载中...</span>
                    </div>
                  </div>
                  
                  {/* 装饰元素 */}
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
                  <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl" />
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* CTA区块 */}
      <CTASection 
        title="还有其他问题？"
        subtitle="我们的专业团队随时准备为您解答任何关于跨境电商的疑问。"
        primaryButtonText="立即咨询"
        primaryButtonHref="#"
        secondaryButtonText="查看服务"
        secondaryButtonHref="/services"
        variant="gradient"
      />
    </main>
  );
}
