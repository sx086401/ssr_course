import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAdmins } from '../actions'
import requireAuth from '../components/hocs/requireAuth'

class AdminListPage extends Component {
  componentDidMount() {
    this.props.fetchAdmins()
  }

  renderAdmins() {
    return this.props.admins.map(admin => <li key={admin.id}>{admin.name}</li>)
  }

  render() {
    return (
      <div>
        <h3>Protected a list of admins:</h3>
        <ul>{this.renderAdmins()}</ul>
      </div>
    )
  }
}

function mapStateToProps({ admins }) {
  return { admins }
}

export function loadAdminsPageData(store) {
  return store.dispatch(fetchAdmins())
}

export default connect(mapStateToProps, { fetchAdmins })(requireAuth(AdminListPage))
