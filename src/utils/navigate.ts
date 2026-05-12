import Taro from '@tarojs/taro'

export function switchToHome() {
  return Taro.switchTab({ url: '/pages/home/index' })
}

export function switchToReport() {
  return Taro.switchTab({ url: '/pages/report/index' })
}

export function switchToTools() {
  return Taro.switchTab({ url: '/pages/tools/index' })
}

export function switchToProfile() {
  return Taro.switchTab({ url: '/pages/profile/index' })
}

// TODO: 后续把主链路跳转统一收敛到这里，便于埋点和登录态校验。
