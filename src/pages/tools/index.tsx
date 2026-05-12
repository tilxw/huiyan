import { useMemo, useState } from 'react'
import Taro from '@tarojs/taro'
import { Button, Text, View } from '@tarojs/components'
import AppHeader from '@/components/AppHeader'
import BrandIntro from '@/components/BrandIntro'
import BottomCta from '@/components/BottomCta'
import IconBox from '@/components/IconBox'
import { empowerTools } from '@/data/toolsMock'
import './index.scss'

export default function ToolsPage() {
  const [tools, setTools] = useState(empowerTools)
  const mountedCount = useMemo(() => tools.filter((tool) => tool.mounted).length, [tools])

  const toggleTool = (id: string) => {
    setTools((current) => current.map((tool) => (tool.id === id ? { ...tool, mounted: !tool.mounted } : tool)))
    // TODO: 后续调用 toggleToolMounted，同步用户工具挂载状态到后端账户画像。
  }

  return (
    <View className='page page-tools'>
      <AppHeader title='赋能工具' />
      <View className='page__body'>
        <BrandIntro title='自动挂载赋能工具' subtitle={`按角色 × 评级 · 已挂载 ${mountedCount} / 4`} />

        <View className='tool-list'>
          {tools.map((tool) => {
            const mountedClass = tool.mounted ? 'tool-card--mounted' : 'tool-card--unmounted'

            return (
              <View key={tool.id} className={`tool-card tool-card--${tool.tone} ${mountedClass}`}>
                <View className='tool-card__icon'>
                  <IconBox icon={tool.icon} tone={tool.mounted ? tool.tone : 'gray'} />
                </View>
                <View className='tool-card__copy'>
                  <Text className='tool-card__title'>{tool.title}</Text>
                  <Text className='tool-card__desc'>{tool.desc}</Text>
                </View>
                <Button
                  className={`tool-card__button tool-card__button--${tool.tone} ${
                    tool.mounted ? 'tool-card__button--mounted' : 'tool-card__button--unmounted'
                  }`}
                  hoverClass='tap-scale'
                  onClick={() => toggleTool(tool.id)}
                >
                  {tool.mounted ? '✓ 已挂载' : '+ 挂载'}
                </Button>
              </View>
            )
          })}
        </View>

        <View className='tools-hint'>
          <Text>点击右侧按钮可</Text>
          <Text className='tools-hint__strong'>手动挂载 / 取消</Text>
          <Text>，挂载后将沉淀到您的账户画像。</Text>
        </View>

        <View className='profile-progress'>
          <Text className='profile-progress__icon'>▥</Text>
          <Text className='profile-progress__text'>画像沉淀 · 复测形成趋势曲线</Text>
          <Text className='profile-progress__count'>{mountedCount}/4</Text>
        </View>

        <BottomCta text='查看钱包账户  →' onClick={() => Taro.switchTab({ url: '/pages/profile/index' })} />
      </View>
    </View>
  )
}
