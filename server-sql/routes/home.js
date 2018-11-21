import Router from 'koa-router';
import ctrl  from '../controller/home'
const router = new Router();

router.get('', ctrl.show);

export default router;