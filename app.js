const express = require('express')
const app = express()
const package = require('./package.json')

app.get('/', (req, res) => {
    res.send(
      package.description + ' ' + 
      package.version + ' is up and running in a cluster.'
    )
})

app.listen(8080, () => {
    console.log(
        package.description + ' ' + 
        package.version + ' is listening on port 8080.'
    )
})
