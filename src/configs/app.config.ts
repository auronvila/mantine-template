export type AppConfig = {
  apiPrefix: string
  authenticatedEntryPath: string
  unAuthenticatedEntryPath: string
  tourPath: string
  locale: string
  enableMock: boolean
}

const appConfig: AppConfig = {
  apiPrefix: 'https://life-kinetics.bloxima.com/',
  authenticatedEntryPath: '/dashboard',
  unAuthenticatedEntryPath: '/sign-in',
  tourPath: '/',
  locale: 'en',
  enableMock: false
}

export default appConfig
