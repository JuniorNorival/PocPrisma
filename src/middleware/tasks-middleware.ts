import { NextFunction, Request, Response } from "express";
import { search } from "../repositories/tasks-repositorie.js";
import { taskSchema } from "../schemas/tasks-schemas.js";

const validateTask = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body);
  const { error } = taskSchema.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    res.status(422).send(error.message);
    return;
  }
  next();
};

const searchTask = async (req: Request, res: Response, next: NextFunction) => {
  const valid = await search(Number(req.params.id));

  if (!valid) {
    res.status(404).send({ message: "Tarefa não existe" });
    return;
  }
  res.locals.realized = valid.realized;
  next();
};

export { validateTask, searchTask };
