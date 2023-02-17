const express = require('express')
const catalyst = require('zcatalyst-sdk-node')
const app = express()

const login = require('../Main_Function/helperUtil/login')

app.use(express.json());      
app.use(express.urlencoded({ extended: false }));

app.get('/',(req,res)=>{
	return res.send("hello world")
})

app.post('/addUser',(req,res)=>{
	const data = req.body
	var catalystApp = catalyst.initialize(req);
	login(data,catalystApp)
	return res.sendStatus(200);
})

module.exports = app