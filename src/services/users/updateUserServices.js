import moment from "moment";
import users from "../../database";
import { hash } from "bcryptjs";

const updateProfileServices = async (uuid, name, email, password) =>{

    const updatedUser = {
        uuid,
        name,
        email,
        updatedOn: moment()
    }


    if(password !== undefined) {
        const hashedPassword = await hash(password, 10)

        password = hashedPassword

        updatedUser.password = password
    }

const userIndex = users.findIndex( user => user.uuid === uuid)

if(userIndex === -1){
    return 'User not found'
}

users[userIndex] = {...users[userIndex], ...updatedUser}

const returnUser = {
    uuid: users[userIndex].uuid,
    name:users[userIndex].name,
    isAdm: users[userIndex].isAdm,
    email: users[userIndex].email,
    createdOn:users[userIndex].createdOn,
    updatedOn: users[userIndex].updatedOn
}

return returnUser
}

export default updateProfileServices