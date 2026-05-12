import { identities, IdentityItem } from '@/data/identities'

export function fetchUserProfile() {
  // TODO: 后续接入微信登录和用户系统。
  return Promise.resolve({
    nickname: '慧眼用户',
    selectedIdentity: identities[0],
  })
}

export function updateSelectedIdentity(identity: IdentityItem) {
  // TODO: 后续同步用户选择的产业身份到后端。
  return Promise.resolve({ success: true, identity })
}
