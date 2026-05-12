import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'

interface AppHeaderProps {
  title: string
  canBack?: boolean
}

export default function AppHeader({ title, canBack = false }: AppHeaderProps) {
  const handleBack = () => {
    if (canBack) {
      Taro.navigateBack()
    }
  }

  return (
    <View className='app-header'>
      <Text className='app-header__back' onClick={handleBack}>‹</Text>
      <Text className='app-header__title'>{title}</Text>
      <View className='app-header__capsule'>
        <Text>...</Text>
        <View className='app-header__divider' />
        <Text>−</Text>
      </View>
    </View>
  )
}
