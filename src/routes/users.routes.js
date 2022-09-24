import { Router } from "express";
import { createUser, listUserController, listUserProfile, deleteUserController, updateProfileController } from "../controllers/users.controller";
import ensureEmailMiddlewar from "../middlewares/ensureemail.middlewar";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middlewar";
import verifyAdmMiddleware from "../middlewares/verifyAdmUser.middlewar";


const userRoutes = Router()

userRoutes.get('', verifyAuthTokenMiddleware, verifyAdmMiddleware, listUserController);

userRoutes.post('',ensureEmailMiddlewar, createUser)

userRoutes.get('/profile', verifyAuthTokenMiddleware, listUserProfile)

userRoutes.patch('/:id', verifyAuthTokenMiddleware, verifyAdmMiddleware, updateProfileController)

userRoutes.delete('/:id', verifyAuthTokenMiddleware, verifyAdmMiddleware, deleteUserController)

export default userRoutes
