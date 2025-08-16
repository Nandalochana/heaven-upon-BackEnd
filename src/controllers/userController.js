const User = require("../models/userModel");

const getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};

const createUser = async (req, res) => {
    try {
        const { name } = req.body;
        const user = await User.create({ name });
        res.status(201).json({ data: user }); // Respond with the user and send as a JSON object
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = { getUsers, createUser };
