/** @format */

import DashboardPage from '../../src/screen/portal/Dashboard'
import { NextPageAuth } from '../../src/providers/privateRoutes.interface'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { CoursesService } from '../../src/services/courses/courses.service'

interface Props {}

const Dashboard: NextPageAuth = (props: Props) => {
  return (
    <div>
      <DashboardPage />
    </div>
  )
}

export const getServerSideProps = async (option: any) => {
  const cookie = option.req.cookies

  try {
    const data = await CoursesService.getCoursesByOwner(cookie)

    return {
      props: {
        courses: data,
        ...(await serverSideTranslations(option.locale, [
          'common',
          'dashboard',
        ])),
      },
    }
  } catch (error) {
    return {
      props: {
        ...(await serverSideTranslations(option.locale, [
          'common',
          'dashboard',
        ])),
      },
    }
  }
}
Dashboard.isOnlyUser = true

export default Dashboard
