import { validationResult } from "express-validator";

export const validateMiddleware = (schema) => [
  ...schema,
  (req, res, next) => {
    const result = validationResult(req.body);
    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
    }
    next();
  }
];
