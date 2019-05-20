import React, { Suspense } from 'react'
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom'
import Layout from 'components/Layout/Layout'
import PageLoader from 'components/PageLoader/PageLoader'

import * as Routes from 'constants/Routes'
import { createRoutes } from 'utils/pages'

import Home from './Home'

const routes = [
  {
    route: Routes.HOME,
    component: Home
  }
]

export default (
  <Layout>
    <Router>
      <Suspense
        fallback={(
          <PageLoader />
        )}>
        <Switch>
          {createRoutes(routes)}
        </Switch>
      </Suspense>
    </Router>
  </Layout>
)
