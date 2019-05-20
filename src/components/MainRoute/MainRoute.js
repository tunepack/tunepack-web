import React from 'react'
import { Route } from 'react-router-dom'
import * as ga from 'utils/ga'

const MainRoute = ({
  component: Component,
  ...props
}) => {
  return (
    <Route
      {...props}
      render={matchProps => {
        ga.trackPage(matchProps.location.pathname)

        return (
          <Component {...matchProps} />
        )
      }} />
  )
}

export default MainRoute
