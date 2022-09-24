import loginController from "../controllers/session.controller";
import { Router } from "express";

const loginRoutes = Router()

loginRoutes.post('/login', loginController)

export default loginRoutes