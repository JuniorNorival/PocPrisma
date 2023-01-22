import { NextFunction, Request, Response } from "express";
import { search } from "../respositories/tasks-repositorie.js";
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
  console.log(valid.rows);
  if (valid.rowCount === 0) {
    res.status(404).send({ message: "Tarefa não existe" });
    return;
  }
  res.locals.realized = valid.rows[0].realized;
  next();
};

export { validateTask, searchTask };
