import { View, Text } from '@tarojs/components'
import { Tone } from '@/data/mock'
import './index.scss'

interface IconBoxProps {
  icon: string
  tone?: Tone
  active?: boolean
}

export default function IconBox({ icon, tone = 'gray', active = false }: IconBoxProps) {
  return (
    <View className={`icon-box icon-box--${active ? 'active' : tone}`}>
      <Text className='icon-box__text'>{icon}</Text>
    </View>
  )
}
