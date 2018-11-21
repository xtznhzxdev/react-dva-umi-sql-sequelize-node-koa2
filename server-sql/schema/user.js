import moment from 'moment'
import Sequelize from 'sequelize';
import sequelizeConfig from './sequelize-config';

const User = sequelizeConfig.define('user', {
  id: { 
    type: Sequelize.INTEGER(11), 
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    comment: '用户id'
  },
  power: {
    type: Sequelize.INTEGER(11),
    allowNull: true,
    defaultValue: 1,
    comment: '用户权限，0：管理员；1：浏览者'
  },
  username: {
    type: Sequelize.STRING(50),
    allowNull: false,
    unique: true,
    comment: '用户名称，唯一，必填'
  },
  nickName: {
    type: Sequelize.STRING(50),
    allowNull: true,
    comment: '昵称'
  },
  password: {
    type: Sequelize.STRING(255),
    allowNull: false,
    comment: '密码，必填'
  },
  email: {
    type: Sequelize.STRING(50),
    allowNull: false,
    unique: true,
    comment: '邮箱，唯一，必填'
  },
  avatar: {
    type: Sequelize.STRING(50),
    comment: '用户头像'
  },
  createdAt: {
    type: Sequelize.DATE,
    get() {
      return moment(this.getDataValue('createdAt')).format('YYYY/MM/DD HH:mm:ss');
    },
    comment: '注册时间'
  },
  updatedAt: {
    type: Sequelize.DATE,
    get() {
      return moment(this.getDataValue('updatedAt')).format('YYYY/MM/DD HH:mm:ss');
    },
    comment: '登录或更新时间'
  }
}, {
  freezeTableName: true
});

User.sync(); // 创建表

module.exports = User;