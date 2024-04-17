import { configureStore } from '@reduxjs/toolkit'

import { api } from './api'
import stateIdentitasSlices from './reducer/stateIdentitas.ts'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    stateIdentitas: stateIdentitasSlices,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
