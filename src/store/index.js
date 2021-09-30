import { configureStore } from '@reduxjs/toolkit'
import  ConversationSlice  from './slices/ConversationsSlice'


export const store = configureStore({
  reducer: {
      conversations:ConversationSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})