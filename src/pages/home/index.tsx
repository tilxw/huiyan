import { useState } from 'react'
import Taro from '@tarojs/taro'
import { Button, Text, View } from '@tarojs/components'
import AppHeader from '@/components/AppHeader'
import BrandIntro from '@/components/BrandIntro'
import BottomCta from '@/components/BottomCta'
import IconBox from '@/components/IconBox'
import { identities } from '@/data/identities'
import './index.scss'

export default function HomePage() {
  const [selectedIdentityId, setSelectedIdentityId] = useState(identities[0].id)
  const selectedIdentity = identities.find((item) => item.id === selectedIdentityId) || identities[0]

  const startAssessment = () => {
    Taro.setStorageSync('huiyan:selectedIdentity', selectedIdentity)
    Taro.navigateTo({ url: '/pages/questionnaire/index' })
  }

  return (
    <View className='page page-home'>
      <AppHeader title='慧眼 · 商业健康自测' />
      <View className='page__body'>
        <BrandIntro title='选择您的产业身份' subtitle='不同角色 · 题库与诊断路径不同' />
        <View className='role-grid'>
          {identities.map((identity) => {
            const selected = identity.id === selectedIdentityId
            return (
              <Button
                key={identity.id}
                className={`role-card ${selected ? 'role-card--selected' : ''}`}
                hoverClass='tap-scale'
                onClick={() => setSelectedIdentityId(identity.id)}
              >
                {selected && <Text className='role-card__check'>✓</Text>}
                <IconBox icon={identity.icon} active={selected} />
                <View className='role-card__copy'>
                  <Text className='role-card__title'>{identity.name}</Text>
                  <Text className='role-card__desc'>{identity.desc}</Text>
                </View>
              </Button>
            )
          })}
        </View>
        <BottomCta text={`开始测评 · ${selectedIdentity.name}  →`} onClick={startAssessment} />
      </View>
    </View>
  )
}
