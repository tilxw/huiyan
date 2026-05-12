import { ledgerItems, walletAccountMock } from '@/data/walletMock'

export function fetchWalletAccount() {
  // TODO: 后续接入真实钱包、测评券和订阅状态。
  return Promise.resolve(walletAccountMock)
}

export function fetchWalletLedger() {
  // TODO: 后续分页读取钱包流水。
  return Promise.resolve(ledgerItems)
}
