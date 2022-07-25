const User = require('../models/User.js')
const asyncHandler = require("express-async-handler");

const signUser = async (req, res) => {
    const {username, email, password} = req.body

    const findUser = await User.findOne({ email });

    if (findUser) {
        res.status(400);
        throw new Error("This user already exists")
    }

    const userResponse = await User.create({
        username,
        email,
        password,
    })
    if (userResponse) {
        res.status(201).json({
            _id: userResponse._id,
            username: userResponse.username,

        })
    } else {
        res.status(400)
        throw new Error("invalid input")
    }

};

const authorUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const userResponse = await User.findOne({ email });

    if (userResponse && (await userResponse.isCorrectPassword(password))) {
        res.json({
            _id: userResponse._id,
            username: userResponse.username,
        });
    } else {
        res.status(400);
        throw new Error("invald input")
    }
});
module.exports = { signUser, authorUser }