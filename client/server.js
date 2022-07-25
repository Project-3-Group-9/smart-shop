const express = require("express");
const connectDB = require("../server/config/connection.js");
const userRoutes = require('../client/routes/userRoute.js');

const app = express();
connectDB();
app.use(express.json)


app.get("/", (req,res) => {
    res.send("API is running")
});

app.use('/api/users', userRoutes)