import users from "../database"

const ensureEmailMiddlewar = async (req, res, next) => {
    const { email } = req.body
    const user = users.find( user=> user.email === email)

 if(user){
    return res.status(400).json({message: "This email adress is already being used"})
 }
 next()
}
export default ensureEmailMiddlewar