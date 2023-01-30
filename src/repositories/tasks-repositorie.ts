import prisma from "../database/db.js";
import { Prisma } from "@prisma/client";

async function createTask(task: Prisma.tasksCreateInput) {
  return await prisma.tasks.create({ data: task });
}
async function deleteTask(taskId: number) {
  return await prisma.tasks.delete({ where: { id: taskId } });
}
async function search(taskId: number) {
  return await prisma.tasks.findFirst({ where: { id: taskId } });
}
async function updateTask(taskId: number, realized: boolean) {
  return await prisma.tasks.update({
    where: { id: taskId },
    data: { realized: !realized },
  });
}
async function listTasks() {
  return await prisma.tasks.findMany();
}
async function createTaskCategory(categoryName: string) {
  return await prisma.taskCategories.create({
    data: { category: categoryName },
  });
}
export { createTask, deleteTask, search, updateTask, listTasks };
