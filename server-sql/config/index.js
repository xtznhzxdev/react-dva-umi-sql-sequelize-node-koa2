// 数据库信息
import { db } from './db';

// 签名
const sign = 'yourSign';

// 文章相关参数
const article = {
  integration: 5
};

module.exports = {
  port: process.env.PORT || 8009,
  db,
  sign,
  article,
}