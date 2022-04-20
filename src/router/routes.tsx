import React, { Suspense } from 'react'
import { RouteProps } from 'react-router-dom'

const MainPage = React.lazy(() => import('pages'))
const CryptoPage = React.lazy(() => import('pages/cryptos'))
const CurrencyDetail = React.lazy(() => import('pages/detail'))

/**
 * Cool! I see that you're adding a new page
 * Maybe you're wondering what is the purpose of the props inside each object
 * This link may help you https://reactrouter.com/web/api/Route
 */

const routes: RouteProps[] = [
  {
    path: '/',
    element: (
      <Suspense fallback={<p>...</p>}>
        <MainPage />
      </Suspense>
    )
  },
  {
    path: '/cryptos',
    element: (
      <Suspense fallback={<p>...</p>}>
        <CryptoPage />
      </Suspense>
    )
  },
  {
    path: '/cryptos/:id',
    element: (
      <Suspense fallback={<p>...</p>}>
        <CurrencyDetail />
      </Suspense>
    )
  },
  {
    path: '*',
    element: <p>not found</p>
  }
]

export default routes
