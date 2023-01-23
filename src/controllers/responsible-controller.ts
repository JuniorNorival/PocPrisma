import { createResponsible } from "../repositories/responsible-repositorie.js";
import { Request, Response } from "express";
import { Responsible } from "../protocols/responsible.js";

const addResponsible = async (req: Request, res: Response) => {
  const name = req.body as Responsible;

  try {
    const response = await createResponsible(name);
    res.status(201).send(`Àdicionado ${response} responsavel`);
  } catch (error) {
    console.log({ message: error.message });
    res.sendStatus(500);
  }
};

export { addResponsible };
