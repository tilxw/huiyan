import { Text, View } from '@tarojs/components'
import AppHeader from '@/components/AppHeader'
import BrandIntro from '@/components/BrandIntro'
import './index.scss'

export default function RatingPage() {
  return (
    <View className='page page-placeholder'>
      <AppHeader title='经营评级' canBack />
      <View className='page__body'>
        <BrandIntro title='经营评级页待下一阶段实现' subtitle='将展示 S / A / B / C / D 等级区间' />
        <View className='placeholder-card'>
          <Text className='placeholder-card__title'>评级规则已预留</Text>
          <Text className='placeholder-card__desc'>S ≥ 85，A ≥ 75，B ≥ 65，C ≥ 55，D ≥ 0。</Text>
        </View>
      </View>
    </View>
  )
}

// TODO: 后续实现 S/A/B/C/D 等级规则和评级展示。
// TODO: 点击“查看趋势曲线”后进入报告体系下的 trends 页面。
