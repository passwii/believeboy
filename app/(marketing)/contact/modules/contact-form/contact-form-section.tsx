"use client";

import { useState } from "react";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/effects/slide-up";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  Phone,
  Send,
  CheckCircle2,
  Sparkles,
  User,
  Building2,
} from "lucide-react";
import { inquiryTypes, contactInfo, type FormData } from "./data";

export function ContactFormSection() {
  const [formData, setFormData] = useState<FormData>({
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
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "提交失败");
      }

      setIsSubmitted(true);
      setFormData({
        name: "",
        company: "",
        phone: "",
        email: "",
        inquiryType: "",
        message: "",
      });
    } catch (error) {
      console.error("提交失败:", error);
      alert("提交失败，请稍后重试");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  return (
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
  );
}
