import Router from 'koa-router';
import ctrl from '../controller/todo';
const router = new Router();

// 创建待办事项
router.post('/create', ctrl.createTodo);
// 删除待办事项
router.post('/delete', ctrl.deleteTodo);
// 更新
router.post('/update', ctrl.updateTodo);
// 更新状态
router.post('/updateStatus', ctrl.updateTodoStatus);
// 获取列表待办事项
router.post('/list', ctrl.queryTodoList);


export default router;