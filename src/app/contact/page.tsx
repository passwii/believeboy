import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '联系我们',
  description: '联系Believe Boy，获取专业的数字解决方案',
}

export default function ContactPage() {
  return (
    <div className="container-custom">
      <div className="section-padding pt-32">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">
          联系我们
        </h1>
        <p className="text-xl text-center text-secondary-600 max-w-3xl mx-auto">
          联系Believe Boy，获取专业的数字解决方案
        </p>
      </div>
    </div>
  )
}