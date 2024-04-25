import { createSlice } from '@reduxjs/toolkit'
import appConfig from '@/configs/app.config'
import {LayoutTypes} from "@/@types/layout";

export type ThemeState = {
  currentLayout: LayoutTypes
}

const initialState: ThemeState = {
  currentLayout: appConfig.layoutType,
}

export const localeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setLayout: (state, action) => {
      state.currentLayout = action.payload
    },
  },
})

export const { setLayout } = localeSlice.actions

export default localeSlice.reducer
