const { Op } = require('sequelize');
const User = require('../../models/User');

module.exports = {
    async show(req, res) {
        // Encontrar todos usuários que tem email que termina com @rocketseat.com
        // Desses usúarios eu quero buscar todos que moram na rua "Rua Guilherme Gembala"
        // Desses Usúarios eu quero buscar as tecnologias que começam com React

        const users = await User.findAll({
            // findAll() => select *
            attributes: ["name", "email"],

            where: {
                email: {
                    [Op.iLike]: '%@rocketseat.com',
                },
            },

            include: [
                { association: 'addresses', where: { street: 'Rua Guilherme Gembala' } }, // Endereços

                {
                    association: 'techs', // Tecnologias
                    required: false, // Vai selecionar também os usuários que satisfaz a condição anterior
                    where: {
                        name: {
                            [Op.iLike]: 'React%',
                        },
                    },
                },
            ],
        });

        return res.json(users);
    }
};
