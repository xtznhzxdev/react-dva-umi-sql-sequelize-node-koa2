import Router from 'koa-router';
import ctrl from '../controller/article'
const router = new Router();

// 创建文章
router.post('/create', ctrl.createArticle)
// 更新文章
router.post('/update', ctrl.updateArticle)
// 获取文章详情
router.post('/detail', ctrl.findOneArticle)
// 获取某作者下文章列表
router.post('/otherArticles', ctrl.findOtherArticles)
// 获取文章列表
router.post('/list', ctrl.queryArticleList)
// 删除文章
router.post('/delete', ctrl.deleteOneArticle)

export default router;