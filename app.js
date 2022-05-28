const express = require('express')
const datas = require('./datas')
const app = express()
// console.log(datas);

app.use(express.urlencoded());
app.use(express.json());

app.get('/friends', (req, res)=>{
	res.json(datas)
})

app.get('/friends/:id', (req, res)=>{
	console.log(req.params.id);
	const to_send = datas.find((e)=> e.id == req.params.id)
	res.json(to_send)
})

app.post('/friends', (req, res)=>{
	// console.log(req.body);
	datas.push(req.body) 
	res.json(req.body)
})

app.listen(process.env.PORT || 3000, ()=>{
	console.log('started listening');
})
