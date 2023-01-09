/** @format */

import React from 'react'
import { useTranslation } from 'react-i18next'
import Baner from '../../components/dashboard/baner/Baner'
import MyCourse from '../../components/dashboard/my-course/MyCourse'
import { Layout } from '../../components/layout/Layout'
import { NextPageAuth } from '../../providers/privateRoutes.interface'
import { api } from '../../state/api-rtk/api-rtk'
import LayoutForComponent from '../../ui/layout/LayoutForComponent'
import styles from './Dashboard.module.scss'

type Props = {}

const DashboardPage: NextPageAuth = (props: Props) => {
  const { data, isLoading } = api.useGetProfileQuery(null)
  const { t: translate } = useTranslation('dashboard')

  return (
    <Layout title='Dashboard'>
      <div className={styles.wrapper}>
        <div>
          <LayoutForComponent>
            <Baner />
          </LayoutForComponent>
          <LayoutForComponent>
            <MyCourse />
            <div> {translate('menu')}</div>
          </LayoutForComponent>
        </div>
      </div>
    </Layout>
  )
}
DashboardPage.isOnlyUser = true

export default DashboardPage
