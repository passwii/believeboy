export const theme = {
  token: {
    colorPrimary: '#2563eb', // 使用我们的 primary-600
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#f5222d',
    colorInfo: '#1890ff',
    colorBgContainer: '#ffffff',
    colorBgLayout: '#f8fafc', // 使用我们的 secondary-50
    colorBgSpotlight: 'rgba(37, 99, 235, 0.05)',
    borderRadius: 8,
    wireframe: false,
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: 14,
    controlHeight: 40,
  },
  components: {
    Button: {
      borderRadius: 6,
      controlHeight: 44,
      fontWeight: 500,
    },
    Card: {
      borderRadius: 12,
      paddingLG: 24,
    },
    Input: {
      borderRadius: 6,
      controlHeight: 44,
    },
    Select: {
      borderRadius: 6,
      controlHeight: 44,
    },
    Typography: {
      fontFamily: 'Inter, system-ui, sans-serif',
    },
    Layout: {
      headerBg: '#ffffff',
      siderBg: '#ffffff',
      bodyBg: '#f8fafc',
    },
    Menu: {
      itemBg: 'transparent',
      itemSelectedBg: 'rgba(37, 99, 235, 0.05)',
      itemHoverBg: 'rgba(37, 99, 235, 0.02)',
    },
  },
}