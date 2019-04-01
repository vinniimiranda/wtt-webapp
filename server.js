var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')

var app = express()
app.use(serveStatic(path.join(__dirname, '/dist/')))
var port = process.env.PORT || 8080
app.get(/.*/, (req, res) =>
  res.sendfile(__dirname + '/dist/index.html')
)

app.listen(port)
console.log('Servidor rodando na porta ' + port)
