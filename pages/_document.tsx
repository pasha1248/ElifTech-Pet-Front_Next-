/** @format */

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Html, Head, Main, NextScript } from 'next/document'

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'dashboard',
        'myCourses',
      ])),
    },
  }
}

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
