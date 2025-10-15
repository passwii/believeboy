import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '关于我们',
  description: '了解Believe Boy的故事、使命和团队',
}

export default function AboutPage() {
  return (
    <div className="container-custom">
      <div className="section-padding pt-32">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">
          关于我们
        </h1>
        <p className="text-xl text-center text-secondary-600 max-w-3xl mx-auto">
          了解Believe Boy的故事、使命和团队
        </p>
      </div>
    </div>
  )
}