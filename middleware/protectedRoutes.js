const jwt = require('jsonwebtoken');

const protectedRoutes = (req, res, next) => {
  console.log(req.cookies, 'req.cookies.token')
  const token = req?.cookies?.token;
  if (!token) return res.status(401).json({ message: 'Unauthorized' });
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    console.log(decoded ,'decoded')
     req.user_id = decoded?.user_id;
    next();
  } catch {
    res.status(403).json({ message: 'Invalid token' });
  }
};
module.exports = {
  protectedRoutes
}