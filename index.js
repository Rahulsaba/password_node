const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// const helmet = require('helmet');
const userRoutes = require('./api/routes.js');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  origin: "http://localhost:5173", // allow Vite frontend to access
  credentials: true,
}));
// app.use(
//   helmet({
//     contentSecurityPolicy: false,
//     // xDownloadOptions: false,  
//   }),
// );

// Create a new user


app.use('/api', userRoutes)
    
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


