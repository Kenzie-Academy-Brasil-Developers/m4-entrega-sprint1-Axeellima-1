import { response } from "express"
import createUserService from "../services/users/createuser.services"
import listUserService from "../services/users/listuser.services"
import userLoginService from "../services/users/loginUser.services"
import listUserProfileService from "../services/users/listUserProfile.services"
import deleteUserService from "../services/users/deleteUser.services"
import updateProfileServices from "../services/users/updateUserServices"

const createUser = async (req, res) =>{
    const { email, name, password, isAdm } = req.body
    const createdUser = await createUserService(email, name, password, isAdm)
    return res.status(201).json(createdUser)
}
const listUserController = (req, res) =>{
    try {
        const listedUsers = listUserService()
        return res.status(200).json(listedUsers)
    } catch (error) {

        return res.status(401).json({message: error.message })
    }
}

const loginController = async (request, response) => {
    const { email, password } = request.body;

    const userLogin = await userLoginService(email, password);
    if(userLogin !== undefined){
        return response.status(200).json({token: userLogin})
    }
    return response.status(401).json({message: "Wrong email/password"})
  };

const listUserProfile =  (req, res) => {
    const id = req.user.id
    const listedUser =  listUserProfileService(id)

    return res.json(listedUser)
}

const deleteUserController = (req, res) => {
    try{
        deleteUserService()
        return res.status(204).send('User deleted')
    } catch (error){
        return res.status(401).json({message: error.message})
    }

}
      
const updateProfileController = (req, res) => {
    const uuid = req.user.id
    const { email, name, createdOn } = req.body
    const updatedUser = updateProfileServices(uuid, name, email, createdOn)

    return res.json(updatedUser)
}

export {createUser, listUserController, loginController,listUserProfile, deleteUserController, updateProfileController}