import jwt from 'jsonwebtoken';
import util from 'util';
import config from '../config';
import { userModel, articleModel } from '../models';
import { print } from '../utils';

const verify = util.promisify(jwt.verify);


// 创建文章
exports.createArticle = async(ctx) => {
  const { token, title, content } = ctx.request.body;
  if(token) {
    try {
      const { id, username } = await verify(token.split(' ')[1], config.sign);

      // 新增
      await articleModel.createArticle({
        authorId: id,
        authorName: username,
        title,
        content
      });

      // 给用户增加积分
      // await userModel.addIntegration(id, config.article.integration)
      return ctx.body = {
        code: 0,
        msg: `文章（${title}）创建成功！`
      }
    } catch(err) {
      throw (err, '创建文章');
    }
  }
}

// 更新文章
exports.updateArticle = async (ctx) => {
  ctx.body = {
    code: 'updateArticle'
  }
}

// 获取文章详情
exports.findOneArticle = async (ctx) => {
  try {
    const { id } = ctx.request.body;
    if(!id) {
      return ctx.body = {
        code: 1,
        msg: '文章id不能为空'
      }
    }
    const ret = await articleModel.findOneArticle(id);
    if(!ret){
      return ctx.body = {
        code: 1,
        msg: '获取文章失败'
      }
    } 
    return ctx.body = {
      code: 0,
      data: ret,
      msg: '获取文章成功'
    }
  } catch(err) {
    throw (err, '获取文章详情错误');
  }
}

// 获取某作者下文章列表
exports.findOtherArticles = async (ctx) => {
  const data = ctx.request.body;
  try {
    const ret = await articleModel.findArticleList(data);
    if(!ret) {
      return ctx.body = {
        code: 1,
        data: [],
        total: 0,
        msg: '获取文章失败',
      }
    }

    return ctx.body = {
      code: 0,
      data: ret.data,
      total: ret.total,
      meta: ret.meta,
      msg: `本页获取${ret.data.length}篇文章，一共有${ret.total}篇文章`,
    }
  } catch(err) {
    throw (err, '获取文章列表错误');
  }
}

// 获取文章列表
exports.queryArticleList = async (ctx) => {
  const data = ctx.request.body;
  try {
    const ret = await articleModel.findArticleList(data);
    if(!ret) {
      return ctx.body = {
        code: 1,
        data: [],
        total: 0,
        msg: '获取文章失败',
      }
    }
    return ctx.body = {
      code: 0,
      data: ret.data,
      total: ret.total,
      meta: ret.meta,
      msg: `本页获取${ret.data.length}篇文章，一共有${ret.total}篇文章`,
    }
  } catch(err) {
    throw (err, '获取文章列表错误');
  }
}

// 删除文章
exports.deleteOneArticle = async (ctx) => {
  ctx.body = {
    code: 'deleteOneArticle'
  }
}