import express from "express";
import "dotenv/config";
import productsRoute from "./routes/products.route";
import cors from "cors"

const app = express();
app.use(express.json());
app.use(cors())
app.use('/products', productsRoute)

export default app;
