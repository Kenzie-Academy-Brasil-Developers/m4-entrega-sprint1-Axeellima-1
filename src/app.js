import express, { response } from "express";
import userRoutes from "./routes/users.routes";
import loginRoutes from "./routes/sesssion.routes";
import "dotenv/config"

const app = express();
app.use(express.json());
app.use('/users', userRoutes)
app.use('', loginRoutes)

const PORT = process.env.PORT || 3000   

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`)
}); 

export default app