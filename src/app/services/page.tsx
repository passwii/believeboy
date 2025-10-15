import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '我们的服务',
  description: 'Believe Boy提供全方位的数字服务，包括网站开发、移动应用、UI设计等',
}

export default function ServicesPage() {
  return (
    <div className="container-custom">
      <div className="section-padding pt-32">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">
          我们的服务
        </h1>
        <p className="text-xl text-center text-secondary-600 max-w-3xl mx-auto">
          提供全方位的数字解决方案，助力您的业务增长
        </p>
      </div>
    </div>
  )
}