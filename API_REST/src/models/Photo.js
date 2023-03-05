import Sequelize, { Model } from 'sequelize';
import config from '../config/url';

export default class Photo extends Model {
  static init(sequelize) {
    super.init({
      original_name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: "The original name can't be null",
          },
        },
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: "The filename name can't be null",
          },
        },
      },
      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${config.url}/images/${this.getDataValue('filename')}`;
        },
      },

    }, {
      sequelize,
      tableName: 'photos',
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Student, { foreignKey: 'student_id' });
    // if associate an Student to Photo
    // this.hasOne(models.Photo, { foreignKey: 'student_id' });
  }
}
