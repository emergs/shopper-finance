import { Request, Response } from "express";
import createProductsListService from "../services/createProductsList.service";

const listProductsController = async (req: Request, res: Response) => {
  return {};
};

const createProductsController = async (req: Request, res: Response) => {
  const file = req;
  const fileEdited = createProductsListService(file);
  return res.status(200);
};

export { listProductsController, createProductsController };
