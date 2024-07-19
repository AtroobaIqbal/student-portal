const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

const app = express()
const Routes = require("./routes/route")

const PORT = process.env.PORT || 5000
dotenv.config();

app.use(express.json({limit : '10mb'}))
app.use(cors())
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(console.log("Connect to mongodb"))
.catch((err) => console.log("not connected to network", err))
app.use("/", Routes);
app.listen(PORT, () => {
    console.log(`server started at port no. ${PORT}`)
})