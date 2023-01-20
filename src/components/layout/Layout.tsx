/** @format */

import Head from 'next/head'
import React from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'
import styles from './Layout.module.scss'
import Sidebar from './sidebar/Sidebar'
import cn from 'classnames'
import { useAppSelector } from '../../hooks/useReduxHooks'

interface LayoutProps {
  children: React.ReactNode
  withFooter?: boolean
  withSidebar?: boolean
  title: string
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  withFooter = true,
  withSidebar = true,
  title,
}) => {
  const { themeDark } = useAppSelector((state) => state.changeThemeSlice)

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={cn(styles.main, { [styles.dark]: themeDark })}>
        {withSidebar && <Sidebar />}

        <section className={styles.container}>
          <Header />
          <div className={`${styles.wrapper} p-2`}>{children}</div>
          {/* {withFooter && <Footer />} */}
        </section>
      </div>
    </div>
  )
}
