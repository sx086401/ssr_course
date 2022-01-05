import React from 'react'
import { Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import UsersListPage, { loadUserListPageData } from "./pages/UsersListPage"
import App from './App'
import NotFoundPage from './pages/NotFoundPage'
import AdminListPage, { loadAdminsPageData } from './pages/AdminListPage'

export const routeConfig = [
  {
    ...App,
    routes: [
      {
        path: '/',
        component: HomePage,
        exact: true
      },
      {
        loadData: loadUserListPageData,
        path: '/users',
        component: UsersListPage
      },
      {
        loadDate: loadAdminsPageData,
        path: '/admins',
        component: AdminListPage
      },
      {
        ...NotFoundPage
      }
    ]
  }
]

export default function Routes() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route path='/users' component={UsersListPage} />
    </div>
  )
}
