export default defineAppConfig({
  pages: [
    'pages/home/index',
    'pages/report/index',
    'pages/tools/index',
    'pages/profile/index',
    'pages/questionnaire/index',
    'pages/scoring/index',
    'pages/rating/index',
    'pages/trends/index',
  ],
  window: {
    navigationBarTitleText: '慧眼',
    navigationBarBackgroundColor: '#FBFBFC',
    navigationBarTextStyle: 'black',
    backgroundColor: '#F6F8FA',
  },
  tabBar: {
    color: '#7D7F83',
    selectedColor: '#0A84FF',
    backgroundColor: '#FFFFFF',
    borderStyle: 'white',
    list: [
      { pagePath: 'pages/home/index', text: '首页' },
      { pagePath: 'pages/report/index', text: '报告' },
      { pagePath: 'pages/tools/index', text: '工具' },
      { pagePath: 'pages/profile/index', text: '我的' },
    ],
  },
})
