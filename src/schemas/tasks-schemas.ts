import joi from "joi";

const taskSchema = joi.object({
  title: joi.string().required(),
  responsibleId: joi.number().required(),
  description: joi.string().required(),
  date: joi.date().required(),
  realized: joi.boolean(),
});
export { taskSchema };
