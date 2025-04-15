const router = require('express').Router()
const validate = require('../middleware/validiation');
const { userLoginSchema, userRegistrationSchema } = require('../controlers/req.validiations');
const { createUser, loginUser, logoutUser } = require('../controlers/auth.controlers');





router.post('/createuser', validate(userRegistrationSchema), createUser);
router.post('/loginuser', validate(userLoginSchema), loginUser);
router.post("/logoutuser", logoutUser);
module.exports = router;