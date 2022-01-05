import React from 'react'

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true
  return <h1>Oops, route not found</h1>
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  component: NotFoundPage
}
