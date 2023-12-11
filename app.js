const express = require('express')
const app = express()
const path = require('path')

const port = 3030
const createPath = (filename) => path.join(__dirname,`./views/${filename}.html`)
app.use(express.static("public"))

app.listen(port,() => console.log(`http://localhost:${port}`))
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'./views/index.html'))
})
app.get('/babbage',function(req,res){
    res.sendFile(path.join(__dirname,'./views/babbage.html'))
})
app.get('/berners-lee',function(req,res) {
    res.sendFile(createPath('berners-lee'))
})
app.get('/clarke',function(req,res){
    res.sendFile(createPath('clarke'))
})
app.get('/hamilton',function(req,res){
    res.sendFile(createPath('hamilton'))
})
app.get('/hopper',function(req,res){
    res.sendFile(createPath('hopper'))
})
app.get('/lovelace',function(req,res){
    res.sendFile(createPath('lovelace'))
})
app.get('/turing',function(req,res){
    res.sendFile(createPath('turing'))
})

