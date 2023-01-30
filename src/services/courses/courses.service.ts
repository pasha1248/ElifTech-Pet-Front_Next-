import { AxiosInstance, AxiosRequestConfig } from 'axios'
import api from '../../api/axios'
import { apiForCourse } from './course.api'

export const CoursesService = {
  async getCoursesByOwner(cookie: any) {
    const response = await apiForCourse.get('course/my-courses', {
      headers: {
        Cookie: ['tokenAccess=' + cookie.tokenAccess, cookie.tokenRefresh],
      },
      data: cookie,
    })
    return response.data
  },

  async getAllCourses(cookie: any) {
    const response = await apiForCourse.get('course/', {
      headers: {
        Cookie: ['tokenAccess=' + cookie.tokenAccess, cookie.tokenRefresh],
      },
      data: cookie,
    })
    return response.data
  },
}
