export interface NavigationTree {
  key: string
  path: string
  isExternalLink?: boolean
  title: string
  translateKey: string
  icon: any
  type?: 'title' | 'collapse' | 'item'
  authority: string[]
  subMenu?: NavigationTree[]
}
