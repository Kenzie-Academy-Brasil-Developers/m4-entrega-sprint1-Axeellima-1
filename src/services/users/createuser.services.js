import users from "../../database"
import { v4 as uuidv4 } from "uuid"
import { hash } from "bcryptjs"

const createUserService = async (email, name, password)=> {

    const hashedPassword = await hash(password, 8)

    const newUser = {
        id: uuidv4(),
        password: hashedPassword,
        name: name,
        email: email,
        isAdm: true,
        createdOn: "23/09/2022"
    }

    users.push(newUser)
    return newUser
}
export default createUserService