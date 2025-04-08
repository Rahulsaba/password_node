const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// const helmet = require('helmet');
const userRoutes = require('./api/routes.js');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const allowedOrigins = [
  'https://savepassword.vercel.app', // Production
  'http://localhost:5173'            // Local development
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));


// app.use(
//   helmet({
//     contentSecurityPolicy: false,
//     // xDownloadOptions: false,  
//   }),
// );

// Create a new user


app.use('/api', userRoutes)


if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}