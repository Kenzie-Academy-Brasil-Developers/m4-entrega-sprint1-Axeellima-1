import users from "../../database"
import { v4 as uuidv4 } from "uuid"
import { hash } from "bcryptjs"
import moment from "moment"

const createUserService = async (email, name, password, isAdm)=> {

    const hashedPassword = await hash(password, 10)

    const newUser = {
        uuid: uuidv4(),
        name: name,
        email: email,
        isAdm: isAdm,
        password: hashedPassword,
        createdOn: moment(),
        updatedOn: moment()
    }
    const returnUser = {
        uuid: uuidv4(),
        name: name,
        email: email,
        isAdm: isAdm,
        createdOn: moment(),
        updatedOn: moment()
    }

    users.push(newUser)
    return returnUser
}
export default createUserService