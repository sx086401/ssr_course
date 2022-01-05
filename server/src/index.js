import 'babel-polyfill'
import express from 'express'
import { matchRoutes } from 'react-router-config'
import { routeConfig } from './client/Routes'
import renderer from './helpers/renderer'
import createServerStore from './helpers/createStore'
import proxy from 'express-http-proxy'

const app = express()

app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
  proxyReqOptDecorator(opts) {
    opts.headers['x-forwarded-host'] = 'localhost:3000'
    return opts
  }
}))
app.use(express.static('public'))

app.get('*', (req, res) => {
  const store = createServerStore(req)

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
