import users from "../../database";

const listUserProfileService = (id) => {
    const user = users.find(user => user.uuid === id)
    if(user){
      const returnUser = {
        uuid: user.uuid,
        name: user.name,
        email: user.email,
        isAdm: user.isAdm,
        createdOn: user.createdOn,
        updatedOn: user.updatedOn
    }
       return returnUser
     }
     console.log('deu ruim')
}

export default listUserProfileService