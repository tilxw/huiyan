import { useMemo, useState } from 'react'
import Taro from '@tarojs/taro'
import { Button, Text, View } from '@tarojs/components'
import AppHeader from '@/components/AppHeader'
import BrandIntro from '@/components/BrandIntro'
import BottomCta from '@/components/BottomCta'
import IconBox from '@/components/IconBox'
import { empowerTools } from '@/data/mock'
import './index.scss'

export default function ToolsPage() {
  const [tools, setTools] = useState(empowerTools)
  const mountedCount = useMemo(() => tools.filter((tool) => tool.mounted).length, [tools])

  const toggleTool = (id: string) => {
    setTools((current) => current.map((tool) => (tool.id === id ? { ...tool, mounted: !tool.mounted } : tool)))
  }

  return (
    <View className='page page-tools'>
      <AppHeader title='赋能工具' />
      <View className='page__body'>
        <BrandIntro title='自动挂载赋能工具' subtitle={`按角色 × 评级 · 已挂载 ${mountedCount} / 4`} />

        <View className='tool-list'>
          {tools.map((tool) => (
            <View key={tool.id} className={`tool-card tool-card--${tool.tone}`}>
              <IconBox icon={tool.icon} tone={tool.tone} />
              <View className='tool-card__copy'>
                <Text className='tool-card__title'>{tool.title}</Text>
                <Text className='tool-card__desc'>{tool.desc}</Text>
              </View>
              <Button
                className={`tool-card__button tool-card__button--${tool.tone}`}
                hoverClass='tap-scale'
                onClick={() => toggleTool(tool.id)}
              >
                {tool.mounted ? '✓ 已挂载' : '+ 挂载'}
              </Button>
            </View>
          ))}
        </View>

        <View className='tools-hint'>
          <Text>✦ 点击右侧按钮可</Text>
          <Text className='tools-hint__strong'>手动挂载 / 取消</Text>
          <Text>。挂载后将沉淀到您的账户画像。</Text>
        </View>

        <View className='profile-progress'>
          <Text className='profile-progress__icon'>▥</Text>
          <Text className='profile-progress__text'>画像沉淀 · 复测形成趋势曲线</Text>
          <Text className='profile-progress__count'>{mountedCount}/4</Text>
        </View>

        <BottomCta text='查看我的钱包  →' onClick={() => Taro.switchTab({ url: '/pages/wallet/index' })} />
      </View>
    </View>
  )
}
