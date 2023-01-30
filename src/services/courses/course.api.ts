import axios, { AxiosInstance } from 'axios'

export const apiForCourse: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001/api',
  withCredentials: true,
})

apiForCourse.interceptors.response.use(
  (config) => {
    return config
  },
  async (error: any) => {
    const originalRequest = error.config
    const tokenRefresh = JSON.parse(error.config.data)?.tokenRefresh
    const tokenAccess = JSON.parse(error.config.data)?.tokenAccess
    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true

      try {
        const response = await axios.get(
          `${
            process.env.BACKEND_URL || 'http://localhost:3001/api'
          }/auth/refresh`,
          {
            headers: {
              Cookie: ['tokenRefresh=' + tokenRefresh],
            },
          }
        )

        // localStorage.setItem('token', response.data.tokens.access_token)

        return apiForCourse.request({
          ...originalRequest,
          headers: {
            Cookie: response.headers?.['set-cookie'],
          },
        })
      } catch (e) {
        console.log('Unauthorizkked')
      }
    }
    throw error
  }
)
