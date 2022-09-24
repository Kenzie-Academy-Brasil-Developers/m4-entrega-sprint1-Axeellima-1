import users from "../../database";

const listUserProfileService = (id) => {
    const user = users.find(user => user.id === id)
    if(user){
       return user
     }
     console.log('deu ruim')
}

export default listUserProfileService