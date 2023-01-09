/** @format */

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NextProgressBar from 'nextjs-progressbar'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { store } from '../src/state/store'
import AuthProvider from '../src/providers/AuthProvider'
import { TypeComponentAithFields } from '../src/providers/privateRoutes.interface'
import { ChakraProvider } from '@chakra-ui/react'
import { appWithTranslation } from 'next-i18next'
import 'react-toastify/dist/ReactToastify.css'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

type TypeAppProps = AppProps & TypeComponentAithFields

function App({ Component, pageProps }: TypeAppProps) {
  return (
    <>
      <NextProgressBar
        color='#FF7652'
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Provider store={store}>
        <AuthProvider Component={Component}>
          <ChakraProvider>
            <Component {...pageProps} />
            <ToastContainer
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss={false}
              draggable={false}
              pauseOnHover={false}
              theme='light'
            />
          </ChakraProvider>
        </AuthProvider>
      </Provider>
    </>
  )
}

export default appWithTranslation(App)
