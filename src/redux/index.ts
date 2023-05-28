import { configureStore, createSlice } from "@reduxjs/toolkit";
import { coursesReducer } from "./slices/coursesSlice";




const generalSlice = createSlice({
  name: 'general',
  initialState: {
    darkScheme: localStorage.getItem('darkScheme') ? JSON.parse(localStorage.getItem('darkScheme') || '') : false,
    lang: localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang') ||  'en') : 'en',
  },
  reducers: {
    changeScheme: (state, action) => {
      state.darkScheme = !state.darkScheme
    },
    changeLang: (state, action) => {
      state.lang = action.payload
    },
  }
})

export const {changeScheme, changeLang} = generalSlice.actions

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch




export const store = configureStore({
  reducer: {
    general: generalSlice.reducer,
    courses: coursesReducer
  }
})


store.subscribe(() => {
  const state = store.getState()

  localStorage.setItem('darkScheme', JSON.stringify(state.general.darkScheme))
  localStorage.setItem('lang', JSON.stringify(state.general.lang))
})