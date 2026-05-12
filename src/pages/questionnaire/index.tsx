import { Text, View } from '@tarojs/components'
import AppHeader from '@/components/AppHeader'
import BrandIntro from '@/components/BrandIntro'
import { questionnairePreview } from '@/data/questionnaireMock'
import './index.scss'

export default function QuestionnairePage() {
  return (
    <View className='page page-placeholder'>
      <AppHeader title='动态问卷' canBack />
      <View className='page__body'>
        <BrandIntro title='动态问卷页待下一阶段实现' subtitle='已预留题库 · 答题状态 · 提交计算入口' />
        <View className='placeholder-card'>
          <Text className='placeholder-card__title'>下一阶段将先实现 3 道题</Text>
          {questionnairePreview.map((question) => (
            <View key={question.id} className='question-preview'>
              <Text className='question-preview__meta'>{question.module} · {question.dimensionName}</Text>
              <Text className='question-preview__title'>{question.title}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  )
}

// TODO: 后续实现问卷题库、答题状态、上一题 / 下一题、提交计算。
// TODO: 后续补充更多模块问题，并根据不同产业身份生成不同题库路径。
// TODO: 第一批题目已在 questionnaireMock 中预留，对应 S3、S4、S5 三个维度。
