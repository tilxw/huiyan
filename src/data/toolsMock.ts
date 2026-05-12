import { Tone } from './types'

export interface EmpowerTool {
  id: string
  title: string
  desc: string
  icon: string
  tone: Tone
  mounted: boolean
}

export const empowerTools: EmpowerTool[] = [
  { id: 'purchase', title: '慧眼集采', desc: '工厂直采 · 降本', icon: '采', tone: 'blue', mounted: true },
  { id: 'local', title: '同城易选', desc: '本地终端选品', icon: '位', tone: 'orange', mounted: true },
  { id: 'private', title: '集客私域', desc: '客户 SOP 触达', icon: '客', tone: 'gray', mounted: false },
  { id: 'ai', title: 'AI 智能经销体', desc: '数据 + 内容引擎', icon: 'AI', tone: 'red', mounted: true },
]
