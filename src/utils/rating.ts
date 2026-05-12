export type RatingLevel = 'S' | 'A' | 'B' | 'C' | 'D'

export interface RatingResult {
  level: RatingLevel
  label: string
  threshold: number
  description: string
}

export const ratingRules: RatingResult[] = [
  { level: 'S', label: '卓越', threshold: 85, description: '穿越周期强，可输出方法论' },
  { level: 'A', label: '优秀', threshold: 75, description: '结构稳健，重点拓展增长' },
  { level: 'B', label: '良好', threshold: 65, description: '局部优化，释放盈利空间' },
  { level: 'C', label: '一般', threshold: 55, description: '结构性问题，需系统调整' },
  { level: 'D', label: '预警', threshold: 0, description: '高风险，立即收缩并应急' },
]

export function getRating(score: number) {
  return ratingRules.find((rule) => score >= rule.threshold) || ratingRules[ratingRules.length - 1]
}

// TODO: 后续经营评级页接入该规则，并根据综合分高亮当前等级。
