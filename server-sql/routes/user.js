import Router from 'koa-router';
import ctrl  from '../controller/user';
const router = new Router();

router.post('/register', ctrl.signup); // 注册
router.post('/login', ctrl.login);   // 登录
router.get('/logout', ctrl.logout);  // 登出
router.get('/info', ctrl.info);      // 用户信息
router.get('/list', ctrl.list);      // 用户列表
router.delete('/delete', ctrl.deleteUser);  // 注销

export default router;