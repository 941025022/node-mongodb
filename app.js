var express = require('express')
var port = process.env.PORT || 3000
var app = express()

app.set('views', './views')
app.set('view engine', 'jade')
app.listen(port)

console.log('imooc started on port' + port)

app.get('/', function (req, res) {
	res.render('index', {
		title: 'imooc 首页'
	})
})

app.get('/', function (req, res) {
	res.render('detail', {
		title: 'imooc 详情页'
	})
})

app.get('/', function (req, res) {
	res.render('admin', {
		title: 'imooc 后台录入页'
	})
})

app.get('/', function (req, res) {
	res.render('list', {
		title: 'imooc 列表页'
	})
})