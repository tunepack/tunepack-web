import React from 'react'
import { hot } from 'react-hot-loader'
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary'

const Layout = ({
  children
}) => (
  <ErrorBoundary>
    {children}
  </ErrorBoundary>
)

export default hot(module)(Layout)
