import express from "express";
import userRoutes from "./routes/users.routes";
import loginRoutes from "./routes/sesssion.routes";
import "dotenv/config"

const app = express();
app.use(express.json());
app.use('/users', userRoutes)
app.use('', loginRoutes)

export default app