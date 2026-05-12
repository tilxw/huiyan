export default defineAppConfig({
  pages: [
    'pages/home/index',
    'pages/report/index',
    'pages/tools/index',
    'pages/wallet/index',
  ],
  window: {
    navigationBarTitleText: '慧眼',
    navigationBarBackgroundColor: '#FBFBFC',
    navigationBarTextStyle: 'black',
    backgroundColor: '#F6FAFD',
  },
  tabBar: {
    color: '#7D7F83',
    selectedColor: '#1188F2',
    backgroundColor: '#FFFFFF',
    borderStyle: 'white',
    list: [
      { pagePath: 'pages/home/index', text: '首页' },
      { pagePath: 'pages/report/index', text: '报告' },
      { pagePath: 'pages/tools/index', text: '工具' },
      { pagePath: 'pages/wallet/index', text: '我的' },
    ],
  },
})
