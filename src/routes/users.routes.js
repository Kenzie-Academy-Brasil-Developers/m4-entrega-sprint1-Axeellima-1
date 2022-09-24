import { Router } from "express";
import { listUser } from "../controllers/users.controller";
import { createUser, listUser, listUserProfile, deleteUserController } from "../controllers/users.controller";
import ensureEmailMiddlewar from "../middlewares/ensureemail.middlewar";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middlewar";
import verifyAdmMiddleware from "../middlewares/verifyAdmUser.middlewar";


const userRoutes = Router()

userRoutes.get('', verifyAuthTokenMiddleware, verifyAdmMiddleware, listUser);

userRoutes.post('',ensureEmailMiddlewar, createUser)

userRoutes.get('/profile', verifyAuthTokenMiddleware, listUserProfile)

userRoutes.delete('/:id', verifyAuthTokenMiddleware, verifyAdmMiddleware, deleteUserController)

export default userRoutes
