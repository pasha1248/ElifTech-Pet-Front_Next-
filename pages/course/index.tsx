/** @format */

import DashboardPage from '../../src/screen/portal/Dashboard'
import { NextPageAuth } from '../../src/providers/privateRoutes.interface'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

interface Props {}

const Dashboard: NextPageAuth = (props: Props) => {
  return <div></div>
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'course'])),
    },
  }
}
Dashboard.isOnlyUser = true

export default Dashboard
