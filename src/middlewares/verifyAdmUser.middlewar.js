const verifyAdmMiddleware = (req, res, next) => {
    const isAdm = req.user.isAdm
    if(isAdm !== true){
        return res.status(403).json({message: "Unauthorized"})
     }
     next()
}
export default verifyAdmMiddleware