const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('you should check our /shows/rick in the url')
})

app.get('/shows/:title', (req, res) => {
  let title = req.params.title;
  res.render('index.ejs', {title: title})
})

app.listen(3000);
