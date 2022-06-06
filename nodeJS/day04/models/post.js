module.exports = (sequelize, Datatypes) => {
    const Post = sequelize.define(
        "Post",
        {
            content:{
                type: Datatypes.TEXT,   // 문자열
                allowNull: false,   // not null
                unique: true,   // 중복허용 X
            },
        },
        {
            charset: "utf8mb4",
            collate: "utf8mb4_general_ci",
        }
    );
    Post.associate = (db) => {
        db.Post.belongsTo(db.User); // 1:1 관계
    };
    return Post;
};
