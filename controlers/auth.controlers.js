
const prisma = require("../db.config");
const { generateAccessToken } = require("../middleware/authMiddleware");

const createUser = async (req, res) => {
    const { fullName, email, password } = req.body;
    console.log(fullName, email, password, 'req-res');
    try {
        //  Check if user already exists by email or fullName
        const existingUser = await prisma.User.findFirst({
            where: {
                OR: [
                    { email: email },
                    { fullName: fullName }
                ]
            }
        });

        if (existingUser) {
            return res.status(409).json({ error: true, message: "User already exists" });
        }

        // Proceed to create the user (you'll probably want to hash password too)
        await prisma.User.create({
            data: {
                fullName,
                email,
                password, // hash before saving
            }
        });
        return res.status(201).json({ error: false, message: "User created successfully" });

    }
    catch (error) {
        return res.status(500).json({ error: true, message: "Internal server error" });
    }
};

const loginUser = async (req, res) => {

    const { email, password } = req?.body;
    try {
        const existingUser = await prisma.User.findFirst({
            where: {
                OR: [
                    { email: email },
                    { password: password }
                ]
            }
        });

        if (!existingUser) {
            return res.status(401).json({ error: true, message: "Invalid credentials" });
        }
        const token = generateAccessToken({ user_id: existingUser?.id });

        res.cookie('token', token, {
            httpOnly: true,
            secure: false,
            // set to false if you're on localhost
            sameSite: 'Strict',
            // sameSite : true // if in localhost not then "none"
            maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
        });

        return res.status(201).json({ error: false, isAuth: true, message: "Login successfully" });
    }
    catch (error) {
        return res.status(500).json({ error: true, message: "Internal server error" });
    }
}

const logoutUser = async (req, res) => {
    try {
        await res.clearCookie("token", {
            httpOnly: true,
            sameSite: "Strict",
            secure: false, // true if you're on HTTPS
        });
        res.status(201).json({ message: "Logged out successfully" });
    } catch (error) {
        return res.status(500).json({ error: true, message: "Internal server error" });
    }
}

module.exports = {
    createUser,
    loginUser,
    logoutUser

}