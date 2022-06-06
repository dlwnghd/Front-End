module.exports = (sequelize, DataTypes) => {
  const Reply = sequelize.define(
    "Reply",
    {
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
    }
  );
  Reply.associate = (db) => {
    db.Reply.belongsTo(db.User);
    db.Reply.belongsTo(db.Post);
    db.Reply.belongsTo(db.Comment);
  };
  return Reply;
};
