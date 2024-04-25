import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {SLICE_BASE_NAME} from './constants'

export interface SessionState {
  signedIn: boolean
  token: string | null
  expireTime: number
  refreshToken: string | null;
}

const initialState: SessionState = {
  signedIn: false,
  token:null,
  expireTime: 0,
  refreshToken: null
}

const sessionSlice = createSlice({
  name: `${SLICE_BASE_NAME}/session`,
  initialState,
  reducers: {
    signInSuccess(state, action: PayloadAction<{ token: string, expireTime: number, refreshToken: string }>) {
      state.signedIn = true
      state.token = action.payload.token
      state.expireTime = action.payload.expireTime
      state.refreshToken = action.payload.refreshToken
    },
    signOutSuccess(state) {
      state.signedIn = false
      state.token = null
      state.refreshToken = null
      state.expireTime = -1
    },
    updateSession(state, action: PayloadAction<{ token: string, expireTime: number, refreshToken: string }>) {
      // state.signedIn = true
      state.token = action.payload.token
      state.expireTime = action.payload.expireTime
      state.refreshToken = action.payload.refreshToken
    },
  },
})

export const {signInSuccess, signOutSuccess,updateSession} = sessionSlice.actions
export default sessionSlice.reducer
