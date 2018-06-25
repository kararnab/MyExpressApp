const express = require('express')
const app = express()
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hey Aranb! Your server is running fine.'))

app.post('/login', (req, res) => {
  let masterPassForMock = "aaaaaaa"
  if(req.body.password===masterPassForMock){
    res.send(require('./mockFiles/loginMock/loginSuccess.json'));
  }else{
    res.send(require('./mockFiles/loginMock/loginError.json'));
  }
})

app.get('/chathistory',(req, res) => res.send(require('./mockFiles/chatHistoryMock/chat_history.json')))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
