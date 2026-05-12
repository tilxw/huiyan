import { View, Text } from '@tarojs/components'
import './index.scss'

interface BrandIntroProps {
  title: string
  subtitle: string
}

export default function BrandIntro({ title, subtitle }: BrandIntroProps) {
  return (
    <View className='brand-intro'>
      <Text className='brand-intro__eyebrow'>慧 眼 · H U I Y A N</Text>
      <Text className='brand-intro__title'>{title}</Text>
      <Text className='brand-intro__subtitle'>{subtitle}</Text>
    </View>
  )
}
