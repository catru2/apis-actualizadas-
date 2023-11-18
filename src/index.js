require("dotenv").config()
require("./configs/ConfiDB")
const express = require("express");
const app= express();
const PORT= process.env.PORT
const userRoute=require("./routes/usuario.route")
const pinturaRoute=require("./routes/pinturas.routes")
const seguidoresRoute=require("./routes/seguidores.routes")
const cors = require('cors')
const authRoutes= require("./routes/auth.routes")
app.use(cors())
app.use(express.json())


app.use("/api",userRoute,authRoutes,pinturaRoute,seguidoresRoute)






app.listen(PORT,() => {
console.log(`El servidor esta funcionando en el puerto ${PORT}`);
});