const express= require("express")
const app = express()
require('dotenv').config()
const cors= require("cors")
const connection= require("./dbconnection")
connection();

app.use(express.json());
app.use(cors());
app.use("/Auth",require("./routes/Auth"))
app.use("/car",require("./routes/car"))
app.use("/usermodel",require("./routes/usermodel"))
app.listen(process.env.PORT,()=>{
    console.log("listening on port:",process.env.PORT)
})