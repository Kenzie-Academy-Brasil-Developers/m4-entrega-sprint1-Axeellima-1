import moment from "moment";
import users from "../../database";

const updateProfileServices = (uuid, name, email, createdOn) =>{

    console.log(createdOn)
const updatedUser = {
    uuid,
    name,
    email,
    updatedOn: moment()
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