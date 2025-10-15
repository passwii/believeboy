import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '社会招聘',
  description: '加入Believe Boy，与我们一起创造数字未来',
}

export default function CareersPage() {
  return (
    <div className="container-custom">
      <div className="section-padding pt-32">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">
          社会招聘
        </h1>
        <p className="text-xl text-center text-secondary-600 max-w-3xl mx-auto">
          加入Believe Boy，与我们一起创造数字未来
        </p>
      </div>
    </div>
  )
}