const app = require("express");
const router= app.Router();
const registermodel= require("../models/registermodel")

router.post("/register", async (req, res) => {
    const { username, email, password } = req.body
    if (!username || !email || !password) {
        return res.status(400).json({ message: "Username, email, and password are required" })
    }
    try {
        const register = await registermodel.create({ username, email, password });
        res.status(200).json(register);
    } catch (error) {
        res.status(500).json({ message: "An error occurred while registering user" })
    }
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }
    try {
        const user = await registermodel.findOne({ email });
        if (!user || user.password !== password) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        res.status(200).json({ message: "Login successful" });
    } catch (error) {
        res.status(500).json({ message: "An error occurred while logging in" });
    }
});

module.exports =router;
