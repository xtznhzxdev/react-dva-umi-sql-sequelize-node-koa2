import Article from '../schema/article';

// 创建文章
exports.createArticle = async (data) => {
  if(!data) {
    return {};
  }
  return Article.create(data);
}

// 更新文章
exports.updateArticle = async (id, data) => {
  if(!data) {
    return false;
  }
  await Article.update(data, {
    where: { id },
    fields: ['title', 'introduction', 'content', 'tag', 'category', 'updatedAt']
  })
  return true
}


// 获取文章详情
exports.findOneArticle = async (id) => {
  if(!id) {
    return {};
  }
  return await Article.findOne({
    where: { id }
  })
}


// 获取文章列表
exports.findArticleList = async ({ current = 1, pageSize = 20, category = '', sort = 'desc', authorId }) => {
  current = parseInt(current, 10)
  pageSize = parseInt(pageSize, 10)
  if((current <=0 )|| (pageSize <= 0)) {
    return {
      data: [],
      total: 0,
      meta: {
        current: 0,
        pageSize: 0,
        totalPage: 0
      }
    }
  }

  // 条件
  const where = {}
  if(category) {
    where.category = category;
  }
  if(authorId) {
    where.authorId = authorId;
  }

  const ret = await Article.findAndCountAll({
    offset: (current - 1) * pageSize,
    limit: pageSize, // 每页多少
    where: where,
    order: [
      ["updatedAt", sort]
    ]
  })

  return {
    data: ret.rows,
    total: ret.count,
    meta: {
      current,
      pageSize,
      total: ret.count,
      totalPage: Math.ceil(ret.count / pageSize)
    }
  }
}

// 删除文章
exports.findOneArticle = async (id) => {
  if(!id) {
    return {};
  }
  return await Article.findOne({
    where: { id }
  })
}