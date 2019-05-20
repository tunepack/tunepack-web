import React from 'react'
import MainRoute from 'components/MainRoute/MainRoute'

const createRoute = ({
  route,
  ...props
}) => {
  return (
    <MainRoute
      exact
      path={route}
      {...props} />
  )
}

export const createRoutes = routes => {
  return routes.map((route, index) => {
    route.key = index
    return createRoute(route)
  })
}
