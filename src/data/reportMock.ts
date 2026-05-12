import { Tone } from './types'

export interface ReportActionItem {
  id: string
  title: string
  desc: string
  icon: string
  tone: Tone
}

export const diagnosisReportMock = {
  issue: '毛利持续被压缩，现金流承压，三端结构失衡。',
  solutions: ['接入慧眼集采 · 降本', '优化 SKU · 砍长尾', '启用周转 + 滞销预警'],
}

export const reportActions: ReportActionItem[] = [
  { id: 'share', title: '转发分享', desc: '微信 / 链接 / 二维码', icon: '发', tone: 'teal' },
  { id: 'ppt', title: 'PPT 快方案', desc: '1 键生成 12 页方案', icon: '屏', tone: 'blue' },
  { id: 'moments', title: '朋友圈卡', desc: '趣味图文 · 一键传播', icon: '图', tone: 'orange' },
  { id: 'video', title: '短视频', desc: 'AI 解说 + 抖音 / 视频号', icon: '影', tone: 'red' },
]

export const trendDataMock = [
  { id: 'marketing', title: '营销能力', value: 82, tone: 'teal' as Tone },
  { id: 'profit', title: '盈利能力', value: 71, tone: 'orange' as Tone },
  { id: 'risk', title: '风险水位', value: 38, tone: 'red' as Tone },
  { id: 'resource', title: '资源储备', value: 79, tone: 'blue' as Tone },
]
