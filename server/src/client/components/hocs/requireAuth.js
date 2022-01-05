import React, { Component } from 'core-js/library/fn/reflect/es7/metadata'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

export default function HigherOrederComponent (ChildComonent) {
  class RequireAuth extends Component {
    render() {
      switch (this.props.auth) {
        case false:
          return <Redirect to='/'/>
        case null:
          return <div>Loading...</div>
        default:
          return <ChildComonent {...this.props}/>
      }
    }
  }

  function mapStateToProps({ auth }) {
    return { auth }
  }

  return connect(mapStateToProps)(RequireAuth)
}
