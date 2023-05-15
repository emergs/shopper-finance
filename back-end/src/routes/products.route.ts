import { Router } from "express";
import { createProductsController, listProductsController } from "../controllers/products.controller";

const productsRoute = Router();

productsRoute.get("", listProductsController);
productsRoute.post("", createProductsController);

export default productsRoute;
