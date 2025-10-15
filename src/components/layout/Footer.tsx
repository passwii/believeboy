import Link from 'next/link'
import { Row, Col, Space, Divider } from 'antd'
import { 
  MailOutlined, 
  PhoneOutlined, 
  EnvironmentOutlined,
  WechatOutlined,
  WeiboOutlined,
  LinkedinOutlined,
  TwitterOutlined 
} from '@ant-design/icons'
import { FOOTER_LINKS, SOCIAL_LINKS, CONTACT_INFO, SITE_CONFIG } from '@/lib/constants'
import { BaseComponentProps } from '@/lib/types'

export default function Footer({ className = '' }: BaseComponentProps) {
  const currentYear = new Date().getFullYear()

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'wechat':
        return <WechatOutlined />
      case 'weibo':
        return <WeiboOutlined />
      case 'linkedin':
        return <LinkedinOutlined />
      case 'twitter':
        return <TwitterOutlined />
      default:
        return <MailOutlined />
    }
  }

  return (
    <footer className={`bg-secondary-900 text-white ${className}`}>
      <div className="container-custom">
        <div className="section-padding">
          <Row gutter={[32, 32]}>
            {/* 公司信息 */}
            <Col xs={24} sm={12} lg={6}>
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">BB</span>
                  </div>
                  <span className="text-xl font-semibold">{SITE_CONFIG.name}</span>
                </div>
                <p className="text-secondary-300 mb-4">
                  {SITE_CONFIG.description}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-secondary-300">
                    <EnvironmentOutlined />
                    <span className="text-sm">{CONTACT_INFO.address}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-secondary-300">
                    <PhoneOutlined />
                    <span className="text-sm">{CONTACT_INFO.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-secondary-300">
                    <MailOutlined />
                    <span className="text-sm">{CONTACT_INFO.email}</span>
                  </div>
                </div>
              </div>
            </Col>

            {/* 服务链接 */}
            <Col xs={24} sm={12} lg={6}>
              <h3 className="text-lg font-semibold mb-4">服务</h3>
              <ul className="space-y-2">
                {FOOTER_LINKS.services.map((link) => (
                  <li key={link.id}>
                    <Link 
                      href={link.href}
                      className="text-secondary-300 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Col>

            {/* 公司链接 */}
            <Col xs={24} sm={12} lg={6}>
              <h3 className="text-lg font-semibold mb-4">公司</h3>
              <ul className="space-y-2">
                {FOOTER_LINKS.company.map((link) => (
                  <li key={link.id}>
                    <Link 
                      href={link.href}
                      className="text-secondary-300 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Col>

            {/* 资源链接 */}
            <Col xs={24} sm={12} lg={6}>
              <h3 className="text-lg font-semibold mb-4">资源</h3>
              <ul className="space-y-2">
                {FOOTER_LINKS.resources.map((link) => (
                  <li key={link.id}>
                    <Link 
                      href={link.href}
                      className="text-secondary-300 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>

          <Divider className="border-secondary-700 my-8" />

          {/* 底部信息 */}
          <Row justify="space-between" align="middle">
            <Col xs={24} md={12}>
              <p className="text-secondary-400 text-sm">
                © {currentYear} {SITE_CONFIG.name}. 保留所有权利。
              </p>
            </Col>
            <Col xs={24} md={12}>
              <div className="flex items-center justify-center md:justify-end space-x-4">
                {SOCIAL_LINKS.map((social) => (
                  <Link
                    key={social.id}
                    href={social.href}
                    className="text-secondary-400 hover:text-white transition-colors duration-200"
                    aria-label={social.label}
                  >
                    {getSocialIcon(social.icon)}
                  </Link>
                ))}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </footer>
  )
}