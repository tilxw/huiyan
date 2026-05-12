import { empowerTools } from '@/data/toolsMock'

export function fetchMountedTools() {
  // TODO: 后续根据用户角色、评级和账户画像返回工具挂载状态。
  return Promise.resolve(empowerTools)
}

export function toggleToolMounted(toolId: string, mounted: boolean) {
  // TODO: 后续同步工具挂载 / 取消状态到后端。
  return Promise.resolve({ toolId, mounted })
}
