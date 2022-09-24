import { response } from "express"
import createUserService from "../services/users/createuser.services"
import listUserService from "../services/users/listuser.services"
import userLoginService from "../services/users/loginUser.services"
import listUserProfileService from "../services/users/listUserProfile.services"
import deleteUserService from "../services/users/deleteUser.services"

const createUser = async (req, res) =>{
    const { email, name, password, isAdm } = req.body
    const createdUser = await createUserService(email, name, password, isAdm)
    return res.status(201).json(createdUser)
}
const listUser = (req, res) =>{
    const listedUsers = listUserService()
    return res.json(listedUsers)
}

const loginController = (request, response) => {
    const { email, password } = request.body;

    const userLogin = userLoginService(email, password);

    return response.json(userLogin);
  };

const listUserProfile =  (req, res) => {
    const id = req.user.id
    const listedUser =  listUserProfileService(id)

    return res.json(listedUser)
}

const deleteUserController = (req, res) => {
    try{
        const id = req.user.id
        deleteUserService(id)
        return res.status(204).send('User deleted')
    } catch (error){
        return res.status(400).json({message: error.message})
    }

}
      

export {createUser, listUser, loginController,listUserProfile, deleteUserController}