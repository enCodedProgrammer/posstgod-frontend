import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './Route'
import Home from '../pages/Home'
import Pricing from '../pages/Pricing'
import Subscription from '../pages/Subscriptions'
import Billing from '../pages/Billing'
// import Blog from '../pages/Blog'
// import Help from '../pages/Help'
import Login from '../pages/Login'
// import Password from '../pages/Password'
import Forgot from '../pages/Forgot'
import Dashboard from '../pages/Dashboard'
// import Profile from '../pages/Profile'
// import Settings from '../pages/Settings'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/subscription" component={Subscription} />
      <Route path="/billing" component={Billing} />
      <Route path="/login" component={Login} />
      <Route path="/forgot" component={Forgot} />
      {/* <Route path="/blog" component={Blog} /> */}
      {/* <Route path="/help" component={Help} /> */}
      <Route path="/dashboard" component={Dashboard} />
      {/* <Route path="/profile" component={Profile} /> */}
      {/* <Route path="/password" component={Password} /> */}
      {/* <Route path="/settings" component={Settings} /> */}
      <Route path="/" component={() => <h1>404 - Page not found</h1>} />
    </Switch>
  )
}
