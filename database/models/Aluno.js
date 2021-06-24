module.exports = (sequelize, DataTypes) => {
    // const Usuario = sequelize.define('nome do modelo')
    const Aluno = sequelize.define('Aluno', {
        id_aluno: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        sobrenome: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        senha: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        data_nascimento: {
            // DATEONLY = Date without time
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        cpf: {
            type: DataTypes.STRING(11),
            allowNull: false,
            unique: true
        },
        nacionalidade: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        estado_civil: {
            type: DataTypes.ENUM('Solteiro(a)', 'Casado(a) ou União Estável', 'Divorciado(a) ou separado(a) judicialmente', 'Viúvo(a)', 'Não informado'),
            allowNull: false
        },
        genero: {
            type: DataTypes.ENUM('M', 'F', 'Não-Binário', 'Não Informado'),
            allowNull: true
        },
        cep: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        endereco: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        numero: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        complemento: {
            type: DataTypes.STRING(45),
            allowNull: true
        },
        bairro: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        municipio: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        estado: {
            type: DataTypes.STRING(2),
            allowNull: false
        },
        telefone: {
            type: DataTypes.STRING(14),
            allowNull: true
        },
        celular: {
            type: DataTypes.STRING(45),
            allowNull: true
        },
        modalidade_pago_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        }
    }, {
        tableName: 'aluno',
        timestamps: false
    });
    return Aluno
}