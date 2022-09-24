import { compareSync } from "bcryptjs";
import jwt from "jsonwebtoken";
import users from "../../database";

const userLoginService = (email, password) => {
    const user = users.find((element) => element.email === email);

    if (!user) {
      return "Email ou senha inválidos";
    }

    const passwordMatch = compareSync(password, user.password);

    if (!passwordMatch) {
      return "Email ou senha inválidos";
    }
    
    const token = jwt.sign({ id: user.id, isAdm: user.isAdm }, "SECRET_KEY", { expiresIn: "24h" });

    return token;
  };

  export default userLoginService;