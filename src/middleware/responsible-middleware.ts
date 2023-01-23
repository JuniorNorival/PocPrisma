import { NextFunction, Request, Response } from "express";
import { responsibleSchema } from "../schemas/responsible-schema.js";

const validateName = (req: Request, res: Response, next: NextFunction) => {
  const { error } = responsibleSchema.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    res.status(422).send(error.message);
    return;
  }
  next();
};
export { validateName };
