import React, { Suspense } from 'react'
import { Helmet } from 'react-helmet'
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import { Header, Footer, ErrorFallback } from 'components'
import Router from 'router'
import remotes from 'remotes'

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>PMC</title>
      </Helmet>
      <Suspense fallback={<p>Loading...</p>}>
        <div>
          <BrowserRouter>
            <Header />
            <Router modules={remotes} />
            <Footer />
          </BrowserRouter>
        </div>
      </Suspense>
    </ErrorBoundary>
  )
}

export default App
