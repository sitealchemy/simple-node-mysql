const express = require('express')
const app = express()
var bodyParser = require('body-parser')

app.use(express.static('public'))
app.use(bodyParser.json())

var knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '',
      database : 'app'
    }
});

app.get('/api/form', (req, res) => {
    knex.select().from('form').then(result => {
        res.json(result);
    })
})

app.post('/api/form', (req, res) => {
    const data = req.body
    knex('form').insert(data).then(result => {
        res.json(result)
    })
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))