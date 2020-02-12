const User = require('../Models/UserModel');

module.exports = {
    async UserRegister(req, res) { 

        const { name, userName, email, password, phone, dateOfBirth, githubUrl, jobPosition} = req.body;

        const user = await User.create({
            name,
            userName,
            email,
            password,
            phone,
            dateOfBirth,
            githubUrl,
            jobPosition
        })

        return res.json(user);
    },

    async listUsers(req, res) {
        const users = await User.find();

        return res.json(users);
    }
}