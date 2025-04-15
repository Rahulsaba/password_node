{
username: '{"$gt": ""}',
password: 'TestPassword'
}

npm i express-mongo-sanitize

require('crypto').randomBytes(48, function(err, buffer) { var token = buffer.toString('hex'); console.log(token); });


function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }

  const { URI, PORT, SECRET_ACCESS_TOKEN } = process.env;