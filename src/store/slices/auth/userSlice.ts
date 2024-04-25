import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SLICE_BASE_NAME } from './constants'

export interface UserState {
  fullName?: string
  phoneNumber?: string
  email?: string
  role?: string[]
}

const initialState: UserState = {
  fullName: '',
  email: '',
  role: [],
}

const userSlice = createSlice({
  name: `${SLICE_BASE_NAME}/user`,
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserState>) {
      state.email = action.payload?.email
      state.fullName = action.payload?.fullName
      state.role = action.payload?.role
      state.phoneNumber = action.payload?.phoneNumber
    },
    setUserRole(state,action){
      state.role = action.payload.role
    },
    setUserName(state,action) {
      state.fullName = action.payload
    }
  },
})

export const { setUser,setUserRole,setUserName } = userSlice.actions
export default userSlice.reducer
