import joi from "joi";

const responsibleSchema = joi.object({
  name: joi.string().required(),
});

export { responsibleSchema };
