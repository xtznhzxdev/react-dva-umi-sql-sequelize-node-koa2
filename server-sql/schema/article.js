import moment from 'moment';
import Sequelize from 'sequelize';
import sequelizeConfig from './sequelize-config';

const Article = sequelizeConfig.define('article', {
  id: { 
    type: Sequelize.INTEGER(11),
    unique: true,
    primaryKey: true,
    autoIncrement: true,
    allowNull: true,
    comment: '文章id'
  },
  authorId: { 
    type: Sequelize.INTEGER(11),
    allowNull: false,
    field: 'authorId',
    comment: '作者id'
  },
  authorName: { 
    type: Sequelize.STRING(55),
    allowNull: false,
    field: 'authorName',
    comment: '作者'
  },
  title: { 
    type: Sequelize.STRING(55),
    allowNull: false,
    field: 'title',
    comment: '标题'
  }, 
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
    field: 'content',
    comment: '内容'
  },
  // 分类
  category: {
    type: Sequelize.STRING(55),
    allowNull: false,
    defaultValue: 'all',
    field: 'category',
    comment: '分类'
  },
  tag: {
    type: Sequelize.JSON,
    allowNull: false,
    defaultValue: 'all',
    field: 'tag',
    comment: '标签'
  },
  pv: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    defaultValue: 0,
    field: 'pv',
    comment: '浏览次数'
  },
  like: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    defaultValue: 0,
    field: 'like',
    comment: '赞'
  },
  replyCount: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    defaultValue: 0,
    field: 'replyCount',
    comment: '回复数'
  },
  allowComment: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true,
    comment: '是否允许评论'
  },
  isPublic: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true,
    comment: "是否公开"
  },
  isRecommend: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
    comment: '是否为推荐'
  },
  createdAt: {
    type: Sequelize.DATE,
    get() {
      return moment(this.getDataValue('createdAt')).format('YYYY/MM/DD HH:mm');
    },
    comment: '创作时间'
  },
  updatedAt: {
    type: Sequelize.DATE,
    get() {
      return moment(this.getDataValue('updatedAt')).format('YYYY/MM/DD HH:mm');
    },
    comment: '更新时间'
  }
}, {
  // true 则表的名称和 model 相同，即 user
  // false MySQL创建的表名称会是复数 users
  // 如果指定的表名称本就是复数形式则不变
  freezeTableName: true
});

Article.sync(); // 创建表

module.exports = Article;