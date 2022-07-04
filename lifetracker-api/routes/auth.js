const express = require("express")
const User = require("../models/user")
const router = express.Router()
const { createUserJwt } = require("../utils/tokens")
const security = require("../middleware/security")

router.get("/me", security.requireAuthenticatedUser, async (req, res, next) => {
    try {
        const { email } = res.locals.user
        const user = await User.fetchUserByEmail(email)
        const publicUser = await User.makePublicUser(user)
        return res.status(200).json({ user:publicUser })
    } catch (err) {
        next(err)
    }
  })

router.post("/login", async (req, res, next) => {
    try {
        // take user email and password + try to authenticate
        const user = await User.login(req.body)
        const token = createUserJwt(user)
        return res.status(200).json( { user, token } )
    } catch(err) {
        console.log(err)
        next(err)
    }
})

router.post("/register", async (req, res, next) => {
    try {
        // take email, password, + create a new user in the database
        const user = await User.register(req.body)
        const token = createUserJwt(user)
        return res.status(201).json( { user, token } )
    } catch(err) {
        next(err)
    }
})

module.exports = router