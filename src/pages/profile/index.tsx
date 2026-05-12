import { useMemo, useState } from 'react'
import Taro from '@tarojs/taro'
import { Button, Text, View } from '@tarojs/components'
import AppHeader from '@/components/AppHeader'
import BrandIntro from '@/components/BrandIntro'
import BottomCta from '@/components/BottomCta'
import IconBox from '@/components/IconBox'
import { ledgerItems, walletAccountMock } from '@/data/walletMock'
import './index.scss'

type LedgerFilter = 'all' | 'income' | 'expense'

const filters: Array<{ key: LedgerFilter; label: string }> = [
  { key: 'all', label: '全部' },
  { key: 'income', label: '收入' },
  { key: 'expense', label: '支出' },
]

export default function ProfilePage() {
  const [ledgerFilter, setLedgerFilter] = useState<LedgerFilter>('all')
  const visibleLedger = useMemo(
    () => ledgerItems.filter((item) => ledgerFilter === 'all' || item.type === ledgerFilter),
    [ledgerFilter]
  )

  return (
    <View className='page page-wallet'>
      <AppHeader title='我的钱包' />
      <View className='page__body'>
        <BrandIntro title='我的钱包' subtitle='慧眼积分 · 订阅状态' />

        <View className='asset-card'>
          <View className='asset-card__top'>
            <Text>慧眼积分</Text>
            <Text>∞</Text>
          </View>
          <View className='asset-card__main'>
            <Text className='asset-card__number'>{walletAccountMock.points}</Text>
            <Text className='asset-card__unit'>{walletAccountMock.unit}</Text>
          </View>
          <Text className='asset-card__note'>♕ {walletAccountMock.plan} · 还剩 {walletAccountMock.remainDays} 天</Text>
        </View>

        <View className='wallet-actions'>
          <Button className='wallet-action wallet-action--orange' hoverClass='tap-scale'>充值</Button>
          <Button className='wallet-action wallet-action--blue' hoverClass='tap-scale'>升级</Button>
          <Button className='wallet-action wallet-action--teal' hoverClass='tap-scale'>邀请</Button>
        </View>

        <View className='ledger-head'>
          <Text className='ledger-head__title'>流水 · LEDGER</Text>
          <Text className='ledger-head__tools'>⌄</Text>
        </View>

        <View className='ledger-filter'>
          {filters.map((filter) => (
            <Button
              key={filter.key}
              className={`ledger-filter__button ${ledgerFilter === filter.key ? 'ledger-filter__button--active' : ''}`}
              hoverClass='tap-scale'
              onClick={() => setLedgerFilter(filter.key)}
            >
              {filter.label}
            </Button>
          ))}
        </View>

        <View className='ledger-list'>
          {visibleLedger.map((item) => (
            <View key={item.id} className='ledger-item'>
              <IconBox icon={item.icon} />
              <View className='ledger-item__copy'>
                <Text className='ledger-item__title'>{item.title}</Text>
                <Text className='ledger-item__time'>{item.time}</Text>
              </View>
              <Text className={`ledger-item__amount ledger-item__amount--${item.type}`}>{item.amount}</Text>
            </View>
          ))}
        </View>

        <BottomCta text='再测一次 · 形成趋势  →' variant='dark' onClick={() => Taro.switchTab({ url: '/pages/home/index' })} />
      </View>
    </View>
  )
}
