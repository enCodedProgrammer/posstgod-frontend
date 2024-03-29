import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import AuthLayout from '../pages/_layouts/Auth'
import DefaultLayout from '../pages/_layouts/Default'

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const signed = useSelector((state) => state.auth.signed)
  useSelector((state) => console.log(state))

  // if (!signed) {
  //   return <Redirect to="/" />
  // }

  // if (signed && !isPrivate) {
  //   return <Redirect to="/dashboard" />;
  // }

  const Layout = signed ? AuthLayout : DefaultLayout

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  )
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
}

RouteWrapper.defaultProps = {
  isPrivate: false,
}
