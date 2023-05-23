const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const documentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 2,
        trim: true,
        uppercase: true,
    },
    lastName: {
        type: String,
        required: true,
        minLength: 2,
        trim: true,
        lowercase: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email Is Not Valid, Kindly Try Again..");
            }
        },
    },
    phone: {
        type: Number,
        required: true,
    },
    tokenVal: [{
        token: {
            type: String,
            required: true,
        }
    }],
});




documentSchema.methods.createRegisterToken = async function () {
    try {
        const registerToken = await jwt.sign({ id: this._id.toString() }, process.env.REACT_APP_SECRET_KEY);

        this.tokenVal = await this.tokenVal.concat({ token: registerToken });

        return registerToken;
    } catch (err) {
        console.warn(err);
    }
};

documentSchema.methods.createLogInToken = async function () {
    try {
        const logInToken = await jwt.sign({ id: this._id.toString() }, process.env.REACT_APP_SECRET_KEY);

        this.tokenVal = await this.tokenVal.concat({ token: logInToken });

        await this.save();

        return logInToken;
    } catch (err) {
        console.warn(err);
    }
};



const createCollection = new mongoose.model("dataCollection", documentSchema);

module.exports = createCollection;