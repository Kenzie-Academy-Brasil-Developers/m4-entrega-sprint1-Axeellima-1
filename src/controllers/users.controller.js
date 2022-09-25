import createUserService from "../services/users/createuser.services"
import listUserService from "../services/users/listuser.services"
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
      
const updateProfileController = async (req, res) => {
    const uuid = req.user.id
    const { email, name, password } = req.body
    const updatedUser = await updateProfileServices(uuid, name, email, password)

    return res.status(200).json(updatedUser)
}

export {createUser, listUserController,listUserProfile, deleteUserController, updateProfileController}