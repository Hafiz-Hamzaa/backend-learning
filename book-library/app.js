const express = require('express');
const app = express();
const bookRoutes = require('./routes/bookRoutes');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use('/', bookRoutes);

// app.js me static folder serve karo
app.use(express.static('public'));


app.listen(3000, () => console.log('Server running on http://localhost:3000'));
