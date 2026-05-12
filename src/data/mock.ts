export type Tone = 'blue' | 'teal' | 'orange' | 'red' | 'gray'

export interface RoleItem {
  id: string
  name: string
  desc: string
  icon: string
}

export interface ShareItem {
  id: string
  title: string
  desc: string
  icon: string
  tone: Tone
}

export interface EmpowerTool {
  id: string
  title: string
  desc: string
  icon: string
  tone: Tone
  mounted: boolean
}

export interface LedgerItem {
  id: string
  title: string
  time: string
  amount: string
  type: 'income' | 'expense'
  icon: string
}

export const roles: RoleItem[] = [
  { id: 'store', name: '建材专卖店', desc: '门店 / 夫妻店', icon: '店' },
  { id: 'dealer', name: '普通经销商', desc: '区域批发 / 二批', icon: '车' },
  { id: 'decorator', name: '装修企业', desc: '家装 / 整装', icon: '锤' },
  { id: 'bd', name: '建材业务员', desc: '厂家 / 经销BD', icon: '人' },
  { id: 'city', name: '城市运营商', desc: '同城配送 / 仓储', icon: '位' },
  { id: 'factory', name: '工厂品牌方', desc: 'OEM / 自主品牌', icon: '厂' },
  { id: 'foreman', name: '水电工长', desc: '施工队 / 工长', icon: '扳' },
  { id: 'project', name: '工程渠道', desc: 'B端 / 项目部', icon: '楼' },
  { id: 'starter', name: '创业者', desc: '新人行 / 转行', icon: '包' },
  { id: 'learner', name: '学习者', desc: '学生 / 行业小白', icon: '学' },
]

export const reportShares: ShareItem[] = [
  { id: 'share', title: '转发分享', desc: '微信 / 链接 / 二维码', icon: '飞', tone: 'teal' },
  { id: 'ppt', title: 'PPT执行案', desc: '1键生成 12 页方案', icon: '屏', tone: 'blue' },
  { id: 'moments', title: '朋友圈卡', desc: '趣味图文 · 一键...', icon: '图', tone: 'orange' },
  { id: 'video', title: '短视频', desc: 'AI 解说 · 抖音 / ...', icon: '影', tone: 'red' },
]

export const empowerTools: EmpowerTool[] = [
  { id: 'purchase', title: '慧眼集采', desc: '工厂直采 · 降本', icon: '车', tone: 'blue', mounted: true },
  { id: 'local', title: '同城易选', desc: '本地终端选品', icon: '位', tone: 'orange', mounted: true },
  { id: 'private', title: '聚销私域', desc: '客户 SOP 触达', icon: '群', tone: 'gray', mounted: false },
  { id: 'ai', title: 'AI 智能经营体', desc: '数据 + 内容引擎', icon: '智', tone: 'red', mounted: true },
]

export const ledgerItems: LedgerItem[] = [
  { id: 'report', title: '深度报告解锁', time: '刚刚', amount: '-3', type: 'expense', icon: '单' },
  { id: 'base', title: '基础测评', time: '5 min', amount: '-1', type: 'expense', icon: '测' },
  { id: 'charge', title: '充值 100 券包', time: '昨天', amount: '+115', type: 'income', icon: '券' },
]
