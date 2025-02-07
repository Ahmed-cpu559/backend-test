import { check } from "express-validator";

export const productValidationSchema = [
  check("name")
    .notEmpty().withMessage("Product name is required")
    .isString().withMessage("Product name must be a string")
    .isLength({ min: 2 }).withMessage("Product name is too short!"),

  check("category")
    .optional()
    .isString().withMessage("Category must be a string"),

  check("price")
    .isFloat({ gt: 0 }).withMessage("Price must be a positive number"),

  check("quantity")
    .isInt({ min: 0 }).withMessage("Quantity must be a non-negative integer")
];
