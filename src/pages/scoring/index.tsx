import { Text, View } from '@tarojs/components'
import AppHeader from '@/components/AppHeader'
import BrandIntro from '@/components/BrandIntro'
import './index.scss'

export default function ScoringPage() {
  return (
    <View className='page page-placeholder'>
      <AppHeader title='AI 评分' canBack />
      <View className='page__body'>
        <BrandIntro title='AI 评分页待下一阶段实现' subtitle='将展示综合分 · 维度分 · 权重计算' />
        <View className='placeholder-card'>
          <Text className='placeholder-card__title'>已预留评分公式</Text>
          <Text className='placeholder-card__desc'>S = 0.25·S1 + 0.20·S2 + 0.20·S3 + 0.15·S4 + 0.10·S5 + 0.10·S6</Text>
        </View>
      </View>
    </View>
  )
}

// TODO: 后续实现评分计算、维度分、AI 加权结果。
// TODO: 后续接入 calculateAssessmentScore，必要时由后端统一计算评分。
