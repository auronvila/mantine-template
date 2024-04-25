import { combineReducers, CombinedState, AnyAction, Reducer } from 'redux'
import auth, { AuthState } from './slices/auth'
import base, { BaseState } from './slices/base'
import locale, { LocaleState } from './slices/locale/localeSlice'
import RtkQueryService from '@/services/RtkQueryService'

export type RootState = CombinedState<{
  auth: CombinedState<AuthState>
  base: CombinedState<BaseState>
  locale: LocaleState
  /* eslint-disable @typescript-eslint/no-explicit-any */
  [RtkQueryService.reducerPath]: any
}>

export interface AsyncReducers {
  [key: string]: Reducer<any, AnyAction>
}

const staticReducers = {
  auth,
  base,
  locale,
  [RtkQueryService.reducerPath]: RtkQueryService.reducer,
}

const rootReducer =
  (asyncReducers?: AsyncReducers) => (state: RootState, action: AnyAction) => {
    const combinedReducer = combineReducers({
      ...staticReducers,
      ...asyncReducers,
    })
    return combinedReducer(state, action)
  }

export default rootReducer
