export interface IdentityItem {
  id: string
  name: string
  desc: string
  icon: string
}

export const identities: IdentityItem[] = [
  { id: 'store', name: '建材专卖店', desc: '门店 / 夫妻店', icon: '店' },
  { id: 'dealer', name: '普通经销商', desc: '区域批发 / 二批', icon: '车' },
  { id: 'decorator', name: '装修企业', desc: '家装 / 整装', icon: '装' },
  { id: 'bd', name: '建材业务员', desc: '厂家 / 经销 BD', icon: '人' },
  { id: 'city', name: '城市运营商', desc: '同城配送 / 仓储', icon: '城' },
  { id: 'factory', name: '工厂品牌方', desc: 'OEM / 自主品牌', icon: '厂' },
  { id: 'foreman', name: '水电工长', desc: '施工队 / 工长', icon: '工' },
  { id: 'project', name: '工程渠道', desc: 'B 端 / 项目部', icon: '项' },
  { id: 'starter', name: '创业者', desc: '新人行 / 转行', icon: '创' },
  { id: 'learner', name: '学习者', desc: '学生 / 行业小白', icon: '学' },
]
