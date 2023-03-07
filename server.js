const path = require('path')
const express = require('express');
const bodyparser = require('body-parser');
const router = require('./routes/note-route');
const app = express();

app.set('view engine', 'ejs');
app.set("views", 'views');

app.use(bodyparser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(router)

app.listen(3000, () =>
    console.log('Server is running on port http://localhost:3000')
);