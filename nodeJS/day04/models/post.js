module.exports = (sequelize, Datatypes) => {
    const Post = sequelize.define(
        "Post",
        {
            content:{
                type: Datatypes.TEXT,
                allowNull: false,
            },
        },
        {
            charset: "utf8mb4",
            collate: "utf8mb4_general_ci",
        }
    );
    Post.associate = (db) => {
        db.Post.belongsTo(db.User);
    };
    return Post;
};
