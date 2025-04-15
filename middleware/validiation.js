const validate = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (err) {
    return res.status(400).json({
      error: true,
      message: err.errors?.[0]?.message || 'Validation failed',
    });
  }
};


module.exports = validate;
