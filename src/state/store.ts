/** @format */

import { configureStore } from '@reduxjs/toolkit'
import { api } from './api-rtk/api-rtk'
import { rtkQueryErrorLogger } from './middlewares/error.middleware'
import AuthSlice from './slice/auth-slice/auth.slice'
import changeBurgerSlice from './slice/burger/burger.slice'
import cartSlice from './slice/cart/cart.slice'
import changeThemeSlice from './slice/change-theme/change-theme.slice'
import createCourseSlice from './slice/create-course/create-couse.slice'
import currencySlice from './slice/currency/currency.slice'
import forgotPasswordSlice from './slice/forgot-password/forgot.slice'
import messengerSlice from './slice/messanger/messenger.slice'
import userSlice from './slice/user-slice/user.slice'
import websocketSlice from './slice/websoket/websocket.slice'
// @ts-ignore
export const store = configureStore({
  reducer: {
    changeBurgerSlice: changeBurgerSlice,
    currencySlice: currencySlice,
    cartSlice: cartSlice,
    WebsocketSlice: websocketSlice,
    createCourseSlice: createCourseSlice,
    MessengerSlice: messengerSlice,
    changeThemeSlice: changeThemeSlice,
    authSlice: AuthSlice,
    forgotPasswordSlice,
    [api.reducerPath]: api.reducer,
    userSlice: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rtkQueryErrorLogger).concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
