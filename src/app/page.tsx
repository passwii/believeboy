import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="container-custom">
      <Hero />
      <div className="section-padding pt-32">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">
          欢迎来到 <span className="text-gradient">Believe Boy</span>
        </h1>
        <p className="text-xl text-center text-secondary-600 max-w-3xl mx-auto">
          内容正在建设中...
        </p>
      </div>
    </div>
  )
}