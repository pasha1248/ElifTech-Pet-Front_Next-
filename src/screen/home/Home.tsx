/** @format */

import React from 'react'
import { useTranslation } from 'react-i18next'
import { Layout } from '../../components/layout/Layout'
import Sidebar from '../../components/layout/sidebar/Sidebar'

interface Props {}

const Home = (props: Props) => {
  // const { t: translate } = useTranslation('dashboard')

  return (
    <div>
      <Layout title='Home Page' withSidebar={false}>
        {/* <div> {translate('menu')}</div> */}
      </Layout>
    </div>
  )
}

export default Home
