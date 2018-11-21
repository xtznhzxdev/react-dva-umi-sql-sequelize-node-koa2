import jwt from 'jsonwebtoken';
import util from 'util';
import moment from 'moment';
import config from '../config';
import { todoModel } from '../models';
import { print, tokenError } from '../utils';

const verify = util.promisify(jwt.verify);

// 创建待办事项
exports.createTodo = async (ctx) => {
  const { token, title, description, category, time } = ctx.request.body;
  
  if(token) {
    try {
      const { id, username } = await verify(token.split(' ')[1], config.sign);
      if(!id) {
        return ctx.body = tokenError;
      }

      // 新增
      await todoModel.createTodo({
        authorId: id,
        authorName: username,
        title, 
        category,
        description,
        time
      });

      return ctx.body = {
        code: 0,
        msg: `待办事项（${title}）创建成功！`
      };
    } catch(err) {
      return ctx.body = tokenError;
    }
  } else {
    return ctx.body = tokenError;
  }
}

// 删除待办事项
exports.deleteTodo = async (ctx) => {
  const { token, id } = ctx.request.body;
  if(token) {
    try {
      const tokenVerify = await verify(token.split(' ')[1], config.sign);
      if(tokenVerify) {
        await todoModel.deleteTodo(id);
        return ctx.body = {
          code: 0,
          msg: `待办事项删除成功！`
        };
      }
    } catch(err) {
      return ctx.body = tokenError;
    }
  } else {
    return ctx.body = tokenError;
  }
}

// 更新待办事项
exports.updateTodo = async (ctx) => {
  const { token, id, title, description, category } = ctx.request.body;
  if(token) {
    try {
      const tokenVerify = await verify(token.split(' ')[1], config.sign);
      if(tokenVerify) {
        await todoModel.updateTodo(id, { title, description, category });
        return ctx.body = {
          code: 0,
          msg: `待办事项更新成功！`
        };
      }
    } catch(err) {
      return ctx.body = tokenError;
    }
  } else {
    return ctx.body = tokenError;
  }
}

// 更新待办事项状态
exports.updateTodoStatus = async (ctx) => {
  const { token, id, status } = ctx.request.body;
  if(token) {
    try {
      const tokenVerify = await verify(token.split(' ')[1], config.sign);
      if(!tokenVerify) {
        return ctx.body = tokenError;        
      }

      await todoModel.updateTodoStatus(id, { status });
      return ctx.body = {
        code: 0,
        msg: `待办事项状态更新成功！`
      };
    } catch(err) {
      return ctx.body = tokenError;
    }
  } else {
    return ctx.body = tokenError;
  }
}

// 获取列表待办事项
exports.queryTodoList = async (ctx) => {
  const data = ctx.request.body;
  if(data.token) {
    try{
      const { id } = await verify(data.token.split(' ')[1], config.sign);
      if(!id) {
        return ctx.body = tokenError;
      }
      delete data.token;
      data.authorId = id;
      const ret = await todoModel.findTodoList(data);
      
      const arr = data.dateSearch.split('-');
      let date = '';
      if(arr.length === 1) {
        date = `${arr[0]}年`;
      } else if(arr.length === 2) {
        date = `${arr[0]}年${arr[1]}月`;
      }

      return ctx.body = {
        code: 0,
        data: ret.data,
        total: ret.total,
        meta: ret.meta,
        msg: `${date}一共有${ret.total}项待办事项`
      }
    } catch(err){
      return ctx.body = tokenError;
    }
  } else {
    return ctx.body = tokenError;
  }
}