import { Button, View } from '@tarojs/components'
import './index.scss'

interface BottomCtaProps {
  text: string
  variant?: 'primary' | 'dark'
  onClick: () => void
}

export default function BottomCta({ text, variant = 'primary', onClick }: BottomCtaProps) {
  return (
    <View className='bottom-cta'>
      <Button
        className={`bottom-cta__button bottom-cta__button--${variant}`}
        hoverClass='tap-scale'
        onClick={onClick}
      >
        {text}
      </Button>
    </View>
  )
}
