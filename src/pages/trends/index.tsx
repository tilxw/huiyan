import { Text, View } from '@tarojs/components'
import AppHeader from '@/components/AppHeader'
import BrandIntro from '@/components/BrandIntro'
import { trendDataMock } from '@/data/reportMock'
import './index.scss'

export default function TrendsPage() {
  return (
    <View className='page page-placeholder'>
      <AppHeader title='趋势曲线' canBack />
      <View className='page__body'>
        <BrandIntro title='趋势曲线页待下一阶段实现' subtitle='报告体系 · 历史复测 · AI 自动判读' />
        <View className='trend-grid'>
          {trendDataMock.map((item) => (
            <View key={item.id} className={`trend-card trend-card--${item.tone}`}>
              <Text className='trend-card__title'>{item.title}</Text>
              <Text className='trend-card__value'>{item.value}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  )
}

// TODO: 后续实现历史评测数据、趋势图、AI 趋势判断。
// TODO: 后续从 fetchTrendData 读取近 30 / 90 / 180 天趋势。
