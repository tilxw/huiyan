import { questionnairePreview, OptionCode } from '@/data/questionnaireMock'
import { calculateWeightedScore, DimensionKey } from '@/utils/scoring'

export function fetchQuestionnaire() {
  // TODO: 后续根据产业身份从后端读取对应题库。
  return Promise.resolve(questionnairePreview)
}

export function submitAssessmentAnswers(answers: Record<string, OptionCode>) {
  // TODO: 后续接入后端保存用户答题记录。
  return Promise.resolve({ success: true, answers })
}

export function calculateAssessmentScore(scores: Record<DimensionKey, number>) {
  // TODO: 后续可能由后端统一计算，前端只展示结果。
  return Promise.resolve({ totalScore: calculateWeightedScore(scores), scores })
}
