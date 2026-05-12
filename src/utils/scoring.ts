import { OptionCode } from '@/data/questionnaireMock'

export type DimensionKey = 'S1' | 'S2' | 'S3' | 'S4' | 'S5' | 'S6'

export const OPTION_SCORES: Record<OptionCode, number> = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
}

export const DIMENSION_WEIGHTS: Record<DimensionKey, number> = {
  S1: 0.25,
  S2: 0.2,
  S3: 0.2,
  S4: 0.15,
  S5: 0.1,
  S6: 0.1,
}

export function calculateDimensionScore(answerCodes: OptionCode[]) {
  if (!answerCodes.length) return 0

  const total = answerCodes.reduce((sum, code) => sum + OPTION_SCORES[code], 0)
  return Math.round((total / answerCodes.length / 5) * 100)
}

export function calculateWeightedScore(scores: Record<DimensionKey, number>) {
  const total = Object.entries(DIMENSION_WEIGHTS).reduce((sum, [key, weight]) => {
    return sum + scores[key as DimensionKey] * weight
  }, 0)

  return Math.round(total)
}

// TODO: 后续完整问卷上线后，S1、S2、S6 应由真实题目计算得出。
// TODO: 当前第一阶段页面不调用评分逻辑，下一阶段从 questionnaire 的答题结果计算 S3、S4、S5。
