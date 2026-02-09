import { StaggerContainer, StaggerItem } from "@/components/effects/slide-up";

export function StatsSection() {
  return (
    <section className="py-16 md:py-20 bg-blue-900">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center" staggerDelay={0.1}>
          <StaggerItem>
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">3</div>
            <div className="text-cyan-400 font-medium">核心成员</div>
          </StaggerItem>
          <StaggerItem>
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">10</div>
            <div className="text-cyan-400 font-medium">Best Seller</div>
          </StaggerItem>
          <StaggerItem>
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">7</div>
            <div className="text-cyan-400 font-medium">跨境平台</div>
          </StaggerItem>
          <StaggerItem>
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">100M</div>
            <div className="text-cyan-400 font-medium">人均操盘业绩</div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
