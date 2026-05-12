export interface LedgerItem {
  id: string
  title: string
  time: string
  amount: string
  type: 'income' | 'expense'
  icon: string
}

export const walletAccountMock = {
  points: 121,
  unit: '测评券',
  plan: '门店版',
  remainDays: 287,
}

export const ledgerItems: LedgerItem[] = [
  { id: 'report', title: '深度经营解锁', time: '刚刚', amount: '-3', type: 'expense', icon: '报' },
  { id: 'base', title: '基础测评', time: '5 min', amount: '-1', type: 'expense', icon: '测' },
  { id: 'charge', title: '充值 100 券包', time: '昨天', amount: '+115', type: 'income', icon: '券' },
]
