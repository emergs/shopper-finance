import { Router } from "express";
import { listProductsController } from "../controllers/products.controller";

const productsRoute = Router();

productsRoute.get("", listProductsController);

export default productsRoute;
