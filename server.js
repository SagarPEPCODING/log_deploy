const express = require('express');
const app = express();
console.log('am in server.js');
//Define Routes

app.use('/api/users/signup', require('./routes/signup'));
app.use('/api/users', require('./routes/login')); // routing

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`server started on part ${PORT}`));
