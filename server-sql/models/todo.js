import Sequelize from 'sequelize';
import moment from 'moment';
import Todo from '../schema/todo';
import { print, validateFields } from '../utils';

const Op = Sequelize.Op;

// 创建todo
exports.createTodo = async (data) => {
  if (!data) {
    return {}
  }
  return Todo.create(data);
}

// 删除todo
exports.deleteTodo = async (id) => {
  if (!id) {
    return false;
  }
  await Todo.destroy({
    where: { id }
  });
}

// 更新信息todo
exports.updateTodo = async (id, data) => {
  if(!data) {
    return {}
  }

  const fields = validateFields(data, ['title', 'category', 'description', 'status', 'updatedAt']);
  await Todo.update(data, {
    where: { id },
    fields: fields
  });
}

// 更新todo状态
exports.updateTodoStatus = async (id, data) => {
  if(!data) {
    return {}
  }
  await Todo.update(data, {
    where: { id },
    fields: ['status']
  });
}

exports.findTodoList = async ({ category = '', status = '', sort = 'DESC', dateSearch, authorId }) => {
  const startTime = moment(dateSearch).format('YYYY-M') + '-1';
  const endTime = moment(startTime).add(1, 'month').subtract(1, 'day').format('YYYY-M-D');
  const where = {
    authorId: authorId,
    time: {
      [Op.gte]: startTime,
      [Op.lte]: endTime,
    }
  }

  const ret = await Todo.findAndCountAll({
    where,
    order: [
      ['status', sort],
      ['time', sort]
    ]
  });

  return {
    data: ret.rows,
    total: ret.count
  }
}