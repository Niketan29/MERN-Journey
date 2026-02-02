module.exports = (schema) => {
  return async (req, res, next) => {
    try {
      const validatedData = await schema.validate(req.body, {
        abortEarly: true,
        stripUnknown: true,
      });

      req.body = validatedData; 
      next();
    } catch (error) {
      error.statusCode = 400;
      next(error);
    }
  };
};
