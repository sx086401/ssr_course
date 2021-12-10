import 'babel-polyfill'
import express from 'express'
import renderer from './helpers/renderer'
import createServerStore from './helpers/createStore'

const app = express()

app.use(express.static('public'))

app.get('*', (req, res) => {
  const store = createServerStore()

  res.send(renderer(req, store))
})

app.listen(3000, () => {
  console.log('listening on prot 3000')
})
