var http = require('http')

http.createServer(function(req,res){

    res.write("welcome nack alian")
    res.end()


}).listen(8080)