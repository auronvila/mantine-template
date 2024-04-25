import { combineReducers } from '@reduxjs/toolkit'
import session, { SessionState } from './sessionSlice'
import user, { UserState } from './userSlice'
import userInfo, { UserInfoState } from './userInfoSlice'

const reducer = combineReducers({
  session,
  user,
  userInfo
})

export type AuthState = {
  session: SessionState
  user: UserState,
  userInfo: UserInfoState,
}

export * from './sessionSlice'
export * from './userSlice'
export * from './userInfoSlice'

export default reducer
