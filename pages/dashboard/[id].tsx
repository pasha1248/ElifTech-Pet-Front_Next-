/** @format */

import { NextPageAuth } from '../../src/providers/privateRoutes.interface'
import DashboardPage from '../../src/screen/portal/Dashboard'

interface Props {}

const DashboardProfile: NextPageAuth = (props: Props) => {
  return (
    <div>
      <DashboardPage />
    </div>
  )
}
DashboardProfile.isOnlyUser = true

export default DashboardProfile
