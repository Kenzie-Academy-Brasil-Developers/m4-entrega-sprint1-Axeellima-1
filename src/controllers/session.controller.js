import userLoginService from "../services/users/loginUser.services";

const loginController = (request, response) => {
    const { email, password } = request.body;

    const userLogin = userLoginService(email, password);

    return response.json(userLogin);
  };

  

export {loginController}