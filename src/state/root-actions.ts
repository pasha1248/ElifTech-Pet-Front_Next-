/** @format */

import * as authActions from './slice/auth-slice/auth.actions'
import * as forgotActions from './slice/forgot-password/forgot.actions'
import * as userActions from './slice/user-slice/user.actions'
import * as chatActions from './slice/messanger/messenger.actions'
import * as createCourseActios from './slice/create-course/create-course.actions'
import { createCourseSlice } from './slice/create-course/create-couse.slice'
import { changeThemeSlice } from './slice/change-theme/change-theme.slice'

export const rootAction = {
  ...authActions,
  ...forgotActions,
  ...userActions,
  ...chatActions,
  ...createCourseSlice.actions,
  ...createCourseActios,
  ...changeThemeSlice.actions,
}
