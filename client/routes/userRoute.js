const express = require('express')
const { signUser, authorUser } = require("../routes/userController")
const router = express.Router()

router.route('/').post(signUser)
router.route("/login").post(authorUser)

module.exports = router;