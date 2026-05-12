import { View, Text } from '@tarojs/components'
import './index.scss'

interface AppHeaderProps {
  title: string
}

export default function AppHeader({ title }: AppHeaderProps) {
  return (
    <View className='app-header'>
      <Text className='app-header__back'>‹</Text>
      <Text className='app-header__title'>{title}</Text>
      <View className='app-header__capsule'>
        <Text>...</Text>
        <View className='app-header__divider' />
        <Text>−</Text>
      </View>
    </View>
  )
}
