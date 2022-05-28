module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", { //테이블명
        email: {
            type: DataTypes.STRING(30), //문자열
            allowNull: false, //not null
            unique: true, //중복허용 x
        },
        name: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(20),
            allowNull: false
        }
    }, {
        charset: "utf8",
        collate: "utf8_general_ci"
    });
    User.associate = (db) => {
        db
            .User
            .hasMany(db.Post); // 시퀄라이즈 1:N 관계
    };
    return User;
};
