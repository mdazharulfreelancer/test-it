const express = require('express')
const ServerlessHttp = require('serverless-http')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')

})
//app.listen(3000, () => console.log(`Listening on: http://localhost:3000`))
module.exports = ServerlessHttp(app)