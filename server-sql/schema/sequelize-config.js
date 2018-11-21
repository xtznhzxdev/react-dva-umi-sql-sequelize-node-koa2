// 配置Sequelize
import Sequelize from 'sequelize';
import config from '../config';

const sequelize = new Sequelize(config.db.dbName, config.db.userName, config.db.password, {
  host: config.db.host,
  dialect: config.db.dialect,
  protocol: config.db.dialect,
  port: config.db.port,
  // 字段以下划线（_）来分割（默认是驼峰命名风格）
  // underscored: true,
  dialectOptions: {
    // 字符集
    ssl: config.db.ssl
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  timezone: config.db.timezone // 东八区
});

module.exports = sequelize;