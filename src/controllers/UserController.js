const User = require('../../models/User');

module.exports = {
    async index(req, res) {
        const users = await User.findAll();
        // select * from users;

        return res.json(users);
    },

    async store(req, res) {
        const { name, email } = req.body;

        const treatment = await User.findOne({ where: { email } });

        if (treatment) {
            return res.status(400).json({ msg: 'This email already exists.' });
        }

        const user = await User.create({ name, email });

        return res.json(user);
    }
};
