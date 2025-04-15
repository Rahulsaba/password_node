const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
// const helmet = require('helmet');
const userRoutes = require('./api/routes.js');
const authRoutes = require('./api/auth.routes.js');
const notesRoutes = require('./api/notes.routes.js');




const app = express();
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.disable("x-powered-by");
const allowedOrigins = [
  'https://savepassword.vercel.app', // Production
  'http://localhost:5173'            // Local development
];

app.use(cors({
  origin: "http://localhost:5173" ,
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


app.use('/api', authRoutes)
app.use('/api', userRoutes)
app.use('/api',notesRoutes )


if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}