var express = require('express'),
    jadeStatic = require('jade-static'),
    sassStatic = require('express-compile-sass')
    path = require('path')
    
    
var app = express()

app.use(
    '/', 
    jadeStatic(path.join(__dirname, '../')),
    sassStatic({
        root: '../'
    }),
    express.static('../')
)

app.listen(process.env.PORT, process.env.IP)
//app.listen(3000)
    