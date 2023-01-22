import { QueryResult } from "pg";
import connection from "../database/db.js";
import { Task } from "../protocols/tasks.js";

async function createTask(task: Task): Promise<QueryResult<Task>> {
  return await connection.query(
    `INSERT INTO tasks ("responsibleId",title,description,date) VALUES ($1,$2,$3,$4)`,
    [task.responsibleId, task.title, task.description, task.date]
  );
}
async function deleteTask(taskId: number) {
  return await connection.query(`DELETE FROM tasks WHERE id=$1`, [taskId]);
}
async function search(taskId: number): Promise<QueryResult<Task>> {
  return await connection.query(`SELECT * FROM tasks WHERE id=$1`, [taskId]);
}
async function updateTask(taskId: number, realized: boolean) {
  return await connection.query(
    `UPDATE tasks SET realized = $1 WHERE id = $2`,
    [!realized, taskId]
  );
}
async function listTasks() {
  return await connection.query("SELECT * FROM tasks");
}
export { createTask, deleteTask, search, updateTask, listTasks };
