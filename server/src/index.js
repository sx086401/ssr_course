import 'babel-polyfill'
import express from 'express'
import { matchRoutes } from 'react-router-config'
import { routeConfig } from './client/Routes'
import renderer from './helpers/renderer'
import createServerStore from './helpers/createStore'

const app = express()

app.use(express.static('public'))

app.get('*', (req, res) => {
  const store = createServerStore()

  const promises = matchRoutes(routeConfig, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null
  })

  Promise.all(promises).then(() => {
    res.send(renderer(req, store))
  })
})

app.listen(3000, () => {
  console.log('listening on prot 3000')
})
