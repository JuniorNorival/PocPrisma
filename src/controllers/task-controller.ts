import { Request, Response } from "express";
import {
  createTask,
  deleteTask,
  listTasks,
  updateTask,
} from "../respositories/tasks-repositorie.js";
import { Task } from "../protocols/tasks.js";

async function create(req: Request, res: Response) {
  const task = req.body as Task;
  try {
    await createTask(task);
    res.sendStatus(201);
  } catch (error) {
    console.error(error.message);
    res.sendStatus(500);
  }
}
async function taskDelete(req: Request, res: Response) {
  const taskId = Number(req.params.id);

  try {
    await deleteTask(taskId);
    res.sendStatus(200);
  } catch (error) {
    console.error(error.message);
    res.sendStatus(500);
  }
}
async function update(req: Request, res: Response) {
  const taskId = Number(req.params.id);
  const { realized } = res.locals;
  console.log(realized);
  try {
    await updateTask(taskId, realized);
    res.sendStatus(200);
  } catch (error) {
    console.error(error.message);
    res.sendStatus(500);
  }
}
async function list(req: Request, res: Response) {
  try {
    const tasks = await listTasks();
    console.log(tasks);
    return res.status(200).send(tasks.rows);
  } catch (error) {
    console.error(error.message);
    return res.sendStatus(500);
  }
}
export { create, taskDelete, update, list };
