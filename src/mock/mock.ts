import {createServer} from 'miragejs'
import {signInUserData} from './data/authData'
import authFakeApi from "@/mock/fakeApi/authFakeApi";
import appConfig from '@/configs/app.config';

const { apiPrefix } = appConfig

export function mockServer() {
  return createServer({
    seeds(server) {
      server.db.loadData({
        signInUserData,
      })
    },
    routes() {
      this.urlPrefix = ''
      this.namespace = ''
      this.passthrough((request) => {
        const isExternal = request.url.startsWith('http')
        const isResource = request.url.startsWith('data:text')
        return isExternal || isResource
      })
      this.passthrough()
      authFakeApi(this, apiPrefix)
    },
  })
}
