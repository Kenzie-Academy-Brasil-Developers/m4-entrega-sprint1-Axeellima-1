import { loginController } from "../controllers/users.controller";
import { Router } from "express";

const loginRoutes = Router()

loginRoutes.post('/login', loginController)

export default loginRoutes