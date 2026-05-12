import { diagnosisReportMock, trendDataMock } from '@/data/reportMock'

export function fetchDiagnosisReport() {
  // TODO: 后续接入大模型生成专属经营报告。
  return Promise.resolve(diagnosisReportMock)
}

export function fetchTrendData() {
  // TODO: 后续读取历史评测记录，并支持近 30 / 90 / 180 天筛选。
  return Promise.resolve(trendDataMock)
}
