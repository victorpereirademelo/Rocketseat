const { Model, DataTypes } = require('sequelize');

class Tech extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
        },
            {
                sequelize: connection,
                tableName: 'techs',
            });
    };

    static associate(models) {
        this.belongsToMany(models.User, { foreignKey: 'tech_id', through: 'user_techs', as: 'users' });
        // belongsToMany => Relacionamento de muitos para muitos (N,N)
    };
};

module.exports = Tech;
