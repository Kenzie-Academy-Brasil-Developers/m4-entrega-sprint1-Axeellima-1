import users from "../database"
const verifyIdUserMiddleware = (req, res, next) => {
    const id = req.user.id

    const user = users.find(user => user.id === id)
    if(user){
       return user
     }
}
export default verifyIdUserMiddleware