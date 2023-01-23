# TASK API

An simple application for list all your tasks for the day.

## About this application

This is a RESTful API project that provides capabilities for creating, reading, updating, and deleting tasks using TypeScript, Express, and an SQL database.

## How to run

1. Clone this repository
2. Install all dependencies

```bash
 npm i
```

3. Create a database on PostgreSQL
4. In the root of the project, insert the dump file on the database that you have created

```bash
 sudo -u postgres psql DATABASE_NAME < dump.sql
```

5. Configure the `.env` file using the `.env.example`
6. Run the application in the root of project

```bash
 npm run dev
```

## Routes

- **GET**/tasks: Returns a list of all tasks

- **POST**/tasks: Creates a new task with the request body as JSON:

```json
body = {
  "title": string;
  "responsibleId": number;
  "description": string;
  "date": Date;
  realized?: boolean;
};
```

- **PUT**/tasks/:id: Updates a specific task

- **DELETE**/tasks/:id: Deletes a specific task

- **POST**/responsible: Add a person responsible for the task with the request body as JSON:
```json
body = {
  "name":string
};
```
