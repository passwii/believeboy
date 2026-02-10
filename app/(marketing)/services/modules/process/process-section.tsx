"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { serviceProcess } from "./data";

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  // 计算进度百分比
  const progressWidth = `${((activeStep + 1) / serviceProcess.length) * 100}%`;

  return (
    <section
      id="process"
      className="relative bg-white py-12 md:py-16 lg:py-20"
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* 动态背景 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-50" />
          
          {/* 步骤颜色背景光晕 */}
          {serviceProcess.map((step, index) => (
            <motion.div
              key={step.step}
              className="absolute inset-0 opacity-0"
              animate={{
                opacity: activeStep === index ? 0.15 : 0,
              }}
              transition={{ duration: 0.8 }}
              style={{
                background: `radial-gradient(circle at 70% 50%, ${step.color}, transparent 60%)`,
              }}
            />
          ))}
        </div>

        {/* 主内容区域 */}
        <div className="relative flex flex-col">
          {/* 标题区域 */}
          <div className="flex-none">
            <motion.div
              className="max-w-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge 
                variant="secondary" 
                className="mb-3 px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-600 border-0"
              >
                服务流程
              </Badge>
              <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-2">
                标准化服务流程
              </h2>
              <p className="text-sm md:text-base text-slate-600">
                从需求诊断到持续增长，每一步都专业可控
              </p>
            </motion.div>

            {/* 进度指示器 */}
            <div className="mt-6 flex items-center gap-4">
              <div className="flex-1 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: progressWidth }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>
              <span className="text-sm font-medium text-slate-600 tabular-nums">
                {String(activeStep + 1).padStart(2, "0")} / {String(serviceProcess.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* 步骤展示区 */}
          <div className="flex-1 min-h-0 mt-6">
            <div className="h-full grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
              {/* 左侧：步骤导航 */}
              <div className="lg:col-span-4 hidden lg:block">
                <div className="h-full flex flex-col justify-center space-y-2">
                  {serviceProcess.map((step, index) => (
                    <motion.button
                      key={step.step}
                      className={`relative flex items-center gap-3 p-3 rounded-xl text-left transition-all duration-300 ${
                        index === activeStep
                          ? "bg-white shadow-lg shadow-blue-500/10"
                          : index < activeStep
                          ? "bg-white/50 hover:bg-white"
                          : "hover:bg-white/50"
                      }`}
                      onClick={() => setActiveStep(index)}
                      whileHover={{ x: index === activeStep ? 0 : 4 }}
                    >
                      {/* 状态指示器 */}
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                          index === activeStep
                            ? "bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg"
                            : index < activeStep
                            ? "bg-green-500 text-white"
                            : "bg-slate-200 text-slate-500"
                        }`}
                      >
                        {index < activeStep ? (
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          step.step
                        )}
                      </div>

                      {/* 步骤信息 */}
                      <div className="flex-1 min-w-0">
                        <div className={`text-xs font-medium ${index === activeStep ? "text-blue-600" : "text-slate-500"}`}>
                          {step.subtitle}
                        </div>
                        <div className={`font-semibold truncate ${index === activeStep ? "text-slate-900" : "text-slate-600"}`}>
                          {step.title}
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* 右侧：详细展示 */}
              <div className="lg:col-span-8">
                <div className="h-full flex items-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="w-full"
                    >
                      <Card className="relative overflow-hidden border-0 shadow-2xl shadow-slate-200/50 bg-white">
                        {/* 顶部装饰条 */}
                        <div 
                          className={`h-2 bg-gradient-to-r ${serviceProcess[activeStep].gradient}`}
                        />
                        
                        <div className="p-6 md:p-8">
                          {/* 步骤头部 */}
                          <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6 mb-6">
                            {/* 大图标 */}
                            <motion.div
                              className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${serviceProcess[activeStep].gradient} flex items-center justify-center shadow-lg shrink-0`}
                              animate={{ 
                                scale: [1, 1.05, 1],
                                rotate: [0, 2, -2, 0]
                              }}
                              transition={{ duration: 4, repeat: Infinity }}
                            >
                              {(() => {
                                const IconComponent = serviceProcess[activeStep].icon;
                                return <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-white" />;
                              })()}
                            </motion.div>

                            {/* 标题区域 */}
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <span className={`text-sm font-bold px-3 py-1 rounded-full bg-gradient-to-r ${serviceProcess[activeStep].gradient} text-white`}>
                                  步骤 {serviceProcess[activeStep].step}
                                </span>
                                <span className="text-sm text-slate-500 font-medium">
                                  {serviceProcess[activeStep].subtitle}
                                </span>
                              </div>
                              <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                                {serviceProcess[activeStep].title}
                              </h3>
                            </div>
                          </div>

                          {/* 描述 */}
                          <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6">
                            {serviceProcess[activeStep].description}
                          </p>

                          {/* 详情列表 */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {serviceProcess[activeStep].details.map((detail, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors group"
                              >
                                <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${serviceProcess[activeStep].gradient} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                                  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                  </svg>
                                </div>
                                <span className="text-sm font-medium text-slate-700">{detail}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>

          {/* 底部导航点（移动端） */}
          <div className="flex-none lg:hidden pb-4">
            <div className="flex items-center justify-center gap-2">
              {serviceProcess.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeStep
                      ? "w-6 bg-gradient-to-r from-blue-500 to-cyan-500"
                      : index < activeStep
                      ? "bg-green-500"
                      : "bg-slate-300"
                  }`}
                  onClick={() => setActiveStep(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
