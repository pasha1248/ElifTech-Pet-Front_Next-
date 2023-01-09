/** @format */

import { IAuthData } from '../services/auth/auth.helper'
import { useAppSelector } from './useReduxHooks'

export const useAuth = () => useAppSelector(state => state.authSlice)
