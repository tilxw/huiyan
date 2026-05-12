export type QuestionDimension = 'S3' | 'S4' | 'S5'
export type OptionCode = 'A' | 'B' | 'C' | 'D' | 'E'

export interface QuestionnaireOption {
  code: OptionCode
  text: string
}

export interface QuestionnaireQuestion {
  id: string
  module: string
  dimension: QuestionDimension
  dimensionName: string
  title: string
  options: QuestionnaireOption[]
}

export const questionnairePreview: QuestionnaireQuestion[] = [
  {
    id: 'revenue-structure',
    module: '模块 3 / 7',
    dimension: 'S3',
    dimensionName: '经营结构',
    title: '营收结构（零售 / 家装 / 工程占比）健康度？',
    options: [
      { code: 'A', text: '严重单一畸形' },
      { code: 'B', text: '偏不均衡' },
      { code: 'C', text: '结构基本合理' },
      { code: 'D', text: '三端均衡互导' },
    ],
  },
  {
    id: 'cost-risk',
    module: '模块 4 / 7',
    dimension: 'S4',
    dimensionName: '成本风险',
    title: '应收账期 / 库存周转 比值近 6 个月趋势？',
    options: [
      { code: 'A', text: '>1.5 持续恶化' },
      { code: 'B', text: '>1 缓慢上升' },
      { code: 'C', text: '≈1 持平' },
      { code: 'D', text: '<1 正向收紧' },
    ],
  },
  {
    id: 'growth-channel',
    module: '模块 5 / 7',
    dimension: 'S5',
    dimensionName: '增长能力',
    title: '新客获取的主渠道是？',
    options: [
      { code: 'A', text: '纯坐店等客' },
      { code: 'B', text: '老客转介绍为主' },
      { code: 'C', text: '私域 + 同城多点' },
      { code: 'D', text: '私域 + 内容 + KA 协同' },
    ],
  },
]
