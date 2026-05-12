import { useState } from 'react'
import Taro from '@tarojs/taro'
import { Button, Text, View } from '@tarojs/components'
import AppHeader from '@/components/AppHeader'
import BrandIntro from '@/components/BrandIntro'
import BottomCta from '@/components/BottomCta'
import IconBox from '@/components/IconBox'
import { roles } from '@/data/mock'
import './index.scss'

export default function HomePage() {
  const [selectedRoleId, setSelectedRoleId] = useState(roles[0].id)
  const selectedRole = roles.find((role) => role.id === selectedRoleId) || roles[0]

  const goReport = () => {
    Taro.setStorageSync('huiyan:selectedRole', selectedRole)
    Taro.switchTab({ url: '/pages/report/index' })
  }

  return (
    <View className='page page-home'>
      <AppHeader title='慧眼 · 商业健康自测' />
      <View className='page__body'>
        <BrandIntro title='选择您的产业身份' subtitle='不同角色 · 题库与诊断路径不同' />
        <View className='role-grid'>
          {roles.map((role) => {
            const selected = role.id === selectedRoleId
            return (
              <Button
                key={role.id}
                className={`role-card ${selected ? 'role-card--selected' : ''}`}
                hoverClass='tap-scale'
                onClick={() => setSelectedRoleId(role.id)}
              >
                {selected && <Text className='role-card__check'>✓</Text>}
                <IconBox icon={role.icon} active={selected} />
                <View className='role-card__copy'>
                  <Text className='role-card__title'>{role.name}</Text>
                  <Text className='role-card__desc'>{role.desc}</Text>
                </View>
              </Button>
            )
          })}
        </View>
        <BottomCta text={`开始测评 · ${selectedRole.name}  →`} onClick={goReport} />
      </View>
    </View>
  )
}
