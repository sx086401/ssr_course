import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'
import { Helmet } from 'react-helmet'

class UsersListPage extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  renderUsers() {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>
    })
  }

  head () {
    return (
      <Helmet>
        <title>{`${this.props.users.length} Users loaded`}</title>
        <meta property='og:title' content='Users App'></meta>
      </Helmet>
    )
  }

  render() {
    return (
      <div>
        {this.head()}
        Here's a list of users:
        <ul>{this.renderUsers()}</ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { users: state.users }
}

export function loadUserListPageData(store) {
  return store.dispatch(fetchUsers())
}

export default connect(mapStateToProps, { fetchUsers })(UsersListPage)
