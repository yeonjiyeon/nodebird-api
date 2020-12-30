const Sequelize = require('sequelize');

module.exports = class Domain extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      host: {//인터넷 주소
        type: Sequelize.STRING(80),
        allowNull: false,
      },
      type: {//도메인 종류
        type: Sequelize.ENUM('free', 'premium'),
        //ENUM 넣을 수 있는 값을 제한하는 형식 free,premium 둘중 하나만 선택가능
        allowNull: false,
      },
      clientSecret: {//클라이언트 비밀키:api를 사용할 때 필요한 키
        type: Sequelize.STRING(36),
        allowNull: false,
      },
    }, {
      sequelize,
      timestamps: true,
      paranoid: true,
      modelName: 'Domain',
      tableName: 'domains',
    });
  }

  static associate(db) {
    db.Domain.belongsTo(db.User);
  }
};