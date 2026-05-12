import Taro from '@tarojs/taro'
import { Button, Text, View } from '@tarojs/components'
import AppHeader from '@/components/AppHeader'
import BrandIntro from '@/components/BrandIntro'
import BottomCta from '@/components/BottomCta'
import IconBox from '@/components/IconBox'
import { diagnosisReportMock, reportActions } from '@/data/reportMock'
import './index.scss'

export default function ReportPage() {
  return (
    <View className='page page-report'>
      <AppHeader title='诊断报告' />
      <View className='page__body'>
        <BrandIntro title='专属诊断报告' subtitle='AI 输出 · 问题 + 方案 + 一键传播' />

        <View className='diagnosis-card'>
          <Text className='diagnosis-card__title'>△ 问题诊断</Text>
          <Text className='diagnosis-card__content'>{diagnosisReportMock.issue}</Text>
        </View>

        <View className='solution-card'>
          <Text className='solution-card__title'>✓ 定制方案</Text>
          <View className='solution-list'>
            {diagnosisReportMock.solutions.map((solution) => (
              <Text key={solution} className='solution-item'>✓ {solution}</Text>
            ))}
          </View>
        </View>

        <Text className='section-label'>报告 · 一键传播 / 落地</Text>
        <View className='share-grid'>
          {reportActions.map((item) => (
            <Button key={item.id} className='share-card' hoverClass='tap-scale'>
              <IconBox icon={item.icon} tone={item.tone} />
              <View className='share-card__copy'>
                <Text className='share-card__title'>{item.title}</Text>
                <Text className='share-card__desc'>{item.desc}</Text>
              </View>
            </Button>
          ))}
        </View>

        <BottomCta text='挂载赋能工具  →' onClick={() => Taro.switchTab({ url: '/pages/tools/index' })} />
      </View>
    </View>
  )
}
