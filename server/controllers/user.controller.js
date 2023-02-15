import User from "../db/models/user.js";

const getAllUsers = async (req, res) => {
    res.status(200).json({ message: "hello" })
    console.log("Hello")
}
const createUser = async (req, res) => {
    try {
        const { name, email, avatar } = req.body;

        const userExists = await User.findOne({ email });

        if (userExists) return res.status(200).json(userExists);

        const newUser = await User.create({
            name,
            email,
            avatar,
        });

        res.status(200).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}
const getUserInfoByID = async (req, res) => { }

export { createUser, getAllUsers, getUserInfoByID }