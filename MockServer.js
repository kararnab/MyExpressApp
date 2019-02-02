const express = require('express')
const app = express()
const bodyParser = require("body-parser");

var port = process.env.PORT || 8080;

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

app.listen(port, function() {
  console.log('Our app is running on http://localhost:' + port);
});
