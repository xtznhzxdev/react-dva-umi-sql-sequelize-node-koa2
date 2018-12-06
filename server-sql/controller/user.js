import crypto from 'crypto';
import jwt from 'jsonwebtoken'; // 用来创建和确认用户信息摘要
import util from 'util';
import { userModel } from '../models';
import config from '../config';
import { print, tokenError, tokenMaxAge } from '../utils';

const verify = util.promisify(jwt.verify);

// 注册
exports.signup = async(ctx) => {
  try {
    const data = ctx.request.body;
    if(!data.username) {
      return ctx.body = {
        code: 1,
        msg: '用户名称不能为空'
      }
    }
    if(!data.password) {
      return ctx.body = {
        code: 1,
        msg: '密码不能为空'
      }
    }
    if(!data.email) {
      return ctx.body = {
        code: 1,
        msg: '邮箱不能为空'
      }
    }
    if(data.username && data.email && data.password) {
      // 用户名查重
      const existUsername = await userModel.findUserByName(data.username);
      if(existUsername) {
        return ctx.body = {
          code: 1,
          msg: `用户名（${data.username}）已注册，换个名称吧`
        }
       } 

      // 用户邮箱查重
      const existEmail = await userModel.findUserByEmail(data.email);
      if(existEmail) {
        return ctx.body = {
          code: 1,
          msg: `邮箱（${data.email}）已注册，换个邮箱吧`
        }
      } 

      // 密码加密
      const hmac = crypto.createHmac('sha256', config.sign);
      data.password = hmac.update(data.password).digest('hex');
      data.power = 1;

      // 创建用户
      await userModel.createUser(data);
      const { id, username, power = 1 } = await userModel.findUserByName(data.username);
      
      // 签发token-储存token失效有效期1小时
      const userToken = { id, username, power };
      const token = jwt.sign(userToken, config.sign, { expiresIn: tokenMaxAge });

      return ctx.body = {
        code: 0,
        token,
        msg: '创建用户成功'
      }
    }
  } catch(err) {
    throw (err, '注册报错');
  }
}

// 登录
exports.login = async(ctx) => {
  try {
    let data = ctx.request.body;

    if(!data.username) {
      return ctx.body = {
        code: 1,
        msg: '用户名称不能为空'
      }
    }

    if(!data.password) {
      return ctx.body = {
        code: 1,
        msg: '密码不能为空'
      }
    }

    if(data.username && data.password) {
      // 查询用户
      const userInfo = await userModel.findUserByName(data.username);

      // 验证用户是否存在
      if(!userInfo) {
        return ctx.body = {
          code: 1,
          msg: `用户（${data.username}）不存在`
        }
      }
      
      // 密码加密
      const hmac = crypto.createHmac('sha256', config.sign);
      data.password = hmac.update(data.password).digest('hex');

      // 验证密码是否正确
      if(data.password !== userInfo.password) {
        return ctx.body = {
          code: 1,
          msg: '密码错误'
        }
      }
      
      // 签发token-储存token失效有效期1小时
      const userToken = { 
        id: userInfo.id, 
        username: userInfo.username,
        power: userInfo.power,
        nickName: userInfo.nickName,
        avatar: userInfo.avatar
      };
      const token = jwt.sign(userToken, config.sign, { expiresIn: tokenMaxAge });
      
      return ctx.body = {
        code: 0,
        data: userToken,
        token,
        msg: `用户（${data.username}）登录成功`
      }
    }
  } catch(err) {
    throw (err, '登录报错');
  }
}

// 登出
exports.logout = async(ctx) => {
  ctx.header.authorization = null;
  await ctx.redirect('/');
}

// 注销用户
exports.deleteUser = async(ctx) => {
  const token = ctx.header.authorization;
  if(token) {
    try {
      const { id, username } = await verify(token.split(' ')[1], config.sign);
      if(id && !isNaN(id)) {
        await userModel.deleteUser(id);
        return ctx.body = {
          code: 0,
          msg: `退出用户（${username}）成功！`
        }
      }
    } catch (err) {
      return ctx.body = {
        code: 1,
        msg: '退出失败，authorization error!'
      }
    }
  }
}

// 用户信息
exports.info = async(ctx) => {
  const token = ctx.header.authorization;
  if(token) {  
    let payload
    try {
      payload = await verify(token.split(' ')[1], config.sign);
      const userInfo = {
        id: payload.id,
        username: payload.username,
      }
      return ctx.body = {
        code: 0,
        data: userInfo,
        msg: `查询用户（${userInfo.username}）成功！`
      }
    } catch (err) {
      return ctx.body = tokenError;
    }
  }
}

// 用户列表
exports.list = async(ctx) => {
  const token = ctx.header.authorization;
  if(token) {
    try {
      const { power, username } = await verify(token.split(' ')[1], config.sign);
      if(power !== 0) {
        return ctx.body = {
          code: 1,
          msg: `用户（${username}）不是管理员，没有查询权限！`
        }
      }

      const userList = await userModel.findUserList();
      return ctx.body = {
        code: 0,
        data: userList,
        msg: '查询成功'
      }
    } catch (err) {
      return ctx.body = tokenError;
    }
  }
}