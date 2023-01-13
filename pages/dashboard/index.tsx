/** @format */

import DashboardPage from '../../src/screen/portal/Dashboard'
import { NextPageAuth } from '../../src/providers/privateRoutes.interface'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

interface Props {}

const Dashboard: NextPageAuth = (props: Props) => {
  return (
    <div>
      <DashboardPage />
    </div>
  )
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'dashboard'])),
    },
  }
}

Dashboard.isOnlyUser = true

export default Dashboard
