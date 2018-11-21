import moment from 'moment';
import Sequelize from 'sequelize';
import sequelizeConfig from './sequelize-config';

const Todo = sequelizeConfig.define('todo', {
  id: {
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    autoIncrement: true,
    allowNull: true,
    commen: '待办id'
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
    type: Sequelize.STRING(20),
    allowNull: false,
    field: 'title',
    comment: '标题'
  },
  description: {
    type: Sequelize.STRING(100),
    allowNull: true,
    field: 'description',
    comment: '描述'
  },
  category: {
    type: Sequelize.STRING(55),
    allowNull: false,
    defaultValue: '',
    field: 'category',
    comment: '分类'
  },
  status: {
    type: Sequelize.STRING(55),
    allowNull: false,
    defaultValue: 'todo',
    field: 'status',
    comment: '状态'
  },
  time: {
    type: Sequelize.STRING(55),
    allowNull: false,
    defaultValue: moment().format('YYYY-M-D'),
    field: 'time',
    comment: '待办事项所属日期'
  },
  createdAt: {
    type: Sequelize.DATE,
    get() {
      return moment(this.getDataValue('createdAt')).format('YYYY-M-D HH:mm:ss');
    },
    comment: '创建时间'
  },
  updatedAt: {
    type: Sequelize.DATE,
    get() {
      return moment(this.getDataValue('updatedAt')).format('YYYY-M-D HH:mm:ss');
    },
    comment: '更新时间'
  }
}, {
  freezeTableName: true
});

Todo.sync();

module.exports = Todo;
