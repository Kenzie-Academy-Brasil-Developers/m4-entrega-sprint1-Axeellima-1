import userLoginService from "../services/users/loginUser.services";

const loginController = async (request, response) => {
  const { email, password } = request.body;

  const userLogin = await userLoginService(email, password);
  if(userLogin !== undefined){
      return response.status(200).json({token: userLogin})
  }
  return response.status(401).json({message: "Wrong email/password"})
};
  

export default loginController