const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./api/routes.js');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// Create a new user


app.use('/api', userRoutes)
    
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


