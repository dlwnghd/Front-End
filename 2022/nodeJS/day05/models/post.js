module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define("Post", {
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    }, {
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci"
    });
    Post.assoicate = (db) => {
        db
            .Post
            .belongsTo(db.User); // 1:1 관계
    };
    return Post;
};
