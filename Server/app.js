const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const FormData = require("form-data");
const path = require("path");

const authenticateUser = require("./src/Authentication/authenticateUser");

const userData = require("./src/Models/userSchema");
require("../Server/src/DB/userConnection");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");


app.use(cookieParser());








app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const PORT = 8080;


// app.get("/", (req, res) => {
//     res.send("Home Section Server..");
// });


app.post("/register", async (req, res) => {
    try {
        // console.log("Registering User..");
        const getFirstName = req.body.firstName;
        const getLastName = req.body.lastName;
        const getEmail = req.body.email;
        const getPhone = req.body.phone;

        const insertData = new userData({
            firstName: getFirstName,
            lastName: getLastName,
            email: getEmail,
            phone: getPhone,
        });

        const getRegisterToken = await insertData.createRegisterToken();

        console.log("Register Token = " + getRegisterToken);

        res.cookie("Register_Cookie", getRegisterToken);



        const getData = await insertData.save();

        res.status(200).json({ message: `${getFirstName} Registered Successfully!!` });

        console.log(getData);

    } catch (err) {
        console.log(err);
        res.status(404).json({ error: "Could Not Register.." });
    }

});


// app.use(express.static(path.join(__dirname + "/public")));




if (process.env.NODE_ENV == "production") {

    app.use(express.static(path.join(__dirname + "/client/build")));


    // app.get("*", (req, res) => {

    //     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));

    // })
}


app.listen(PORT, "127.0.0.1", () => {
    console.log("Server Connected Suucessfully!! 👍 👍");
});