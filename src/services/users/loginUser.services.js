import { compareSync } from "bcryptjs";
import jwt from "jsonwebtoken";
import users from "../../database";

const userLoginService = (email, password) => {
    const user = users.find((element) => element.email === email);

    if (!user) {
      return 
    }

    const passwordMatch = compareSync(password, user.password);

    if (!passwordMatch) {
      return
    }
    
    const token = jwt.sign({ id: user.uuid, isAdm: user.isAdm }, "SECRET_KEY", { expiresIn: "24h" });

    return token
  };

  export default userLoginService;