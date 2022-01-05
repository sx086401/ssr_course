import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

// eslint-disable-next-line import/no-anonymous-default-export
export default ChildComponent => {
  class RequireAuth extends Component {
    render() {
      switch (this.props.auth) {
        case false:
          return <Redirect to='/'/>
        case null:
          return <div>Loading...</div>
        default:
          return <ChildComponent {...this.props}/>
      }
    }
  }

  function mapStateToProps({ auth }) {
    return { auth }
  }

  return connect(mapStateToProps)(RequireAuth)
}
