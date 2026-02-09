import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/effects/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/effects/slide-up";
import { serviceProcess } from "./data";

export function ProcessSection() {
  // 将5个步骤分为两行：第一行3个，第二行2个
  const row1 = serviceProcess.slice(0, 3);
  const row2 = serviceProcess.slice(3, 5);

  return (
    <section id="process" className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm bg-cyan-100 text-cyan-700 hover:bg-cyan-100">
              服务流程
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              标准化服务流程
            </h2>
            <p className="text-lg text-slate-600">
              从需求诊断到持续增长，每一步都专业可控
            </p>
          </div>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          <StaggerContainer staggerDelay={0.15}>
            {/* 连接线 SVG */}
            <svg
              className="absolute top-0 left-0 w-full h-full pointer-events-none"
              style={{ zIndex: 0 }}
              viewBox="0 0 896 400"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* 定义箭头标记 */}
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="10"
                  markerHeight="10"
                  refX="9"
                  refY="3"
                  orient="auto"
                >
                  <polygon points="0 0, 10 3, 0 6" fill="#94a3b8" />
                </marker>
              </defs>
              
              {/* 连接线：从左到右，转弯，从右到左 */}
              <path
                d="M 64 64 
                   L 256 64 
                   L 448 64 
                   L 640 64 
                   L 768 64 
                   Q 832 64 832 128 
                   L 832 192 
                   Q 832 256 768 256 
                   L 640 256 
                   L 448 256 
                   Q 384 256 384 192 
                   L 384 160"
                fill="none"
                stroke="#cbd5e1"
                strokeWidth="2"
                strokeDasharray="6,4"
                markerEnd="url(#arrowhead)"
              />
            </svg>

            {/* 第一行 - 3个步骤 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 mb-16 md:mb-20 relative">
              {row1.map((step, index) => (
                <StaggerItem key={index}>
                  <div className="relative text-center group">
                    {/* 步骤图标 */}
                    <div className="relative z-10 w-20 h-20 mx-auto mb-5 rounded-2xl bg-white border-2 border-blue-200 flex items-center justify-center group-hover:border-blue-500 group-hover:shadow-xl transition-all duration-300 shadow-sm">
                      <step.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    
                    {/* 步骤编号 */}
                    <div className="absolute -top-1 -right-1 md:right-8 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-sm font-bold flex items-center justify-center shadow-md">
                      {step.step}
                    </div>
                    
                    {/* 内容 */}
                    <h3 className="text-lg font-bold text-slate-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">
                      {step.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </div>

            {/* 第二行 - 2个步骤，靠右排列 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative">
              {/* 空的第一个位置，让内容靠右 */}
              <div className="hidden md:block" />
              {row2.map((step, index) => (
                <StaggerItem key={index}>
                  <div className="relative text-center group">
                    {/* 步骤图标 */}
                    <div className="relative z-10 w-20 h-20 mx-auto mb-5 rounded-2xl bg-white border-2 border-blue-200 flex items-center justify-center group-hover:border-blue-500 group-hover:shadow-xl transition-all duration-300 shadow-sm">
                      <step.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    
                    {/* 步骤编号 */}
                    <div className="absolute -top-1 -right-1 md:right-8 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-sm font-bold flex items-center justify-center shadow-md">
                      {step.step}
                    </div>
                    
                    {/* 内容 */}
                    <h3 className="text-lg font-bold text-slate-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">
                      {step.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
