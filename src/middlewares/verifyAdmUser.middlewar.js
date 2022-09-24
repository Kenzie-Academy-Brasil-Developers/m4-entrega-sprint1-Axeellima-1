const verifyAdmMiddleware = (req, res, next) => {
    const id = req.user.id
    const idUpdate = req.params.id
    const isAdm = req.user.isAdm
    id === idUpdate
    if(    id === idUpdate){
        next()
     }
    if (isAdm !== true){
        return res.status(401).json({message: "Unauthorized"})
     }
     next()
}
export default verifyAdmMiddleware