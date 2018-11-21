import Router from 'koa-router';
import Home from './home';
import User from './user';
import Article from './article';
import Todo from './todo';
const router = new Router();


export default app => {
  router.use('/', Home.routes(), Home.allowedMethods());
  router.use('/user', User.routes(), User.allowedMethods());
  router.use('/article', Article.routes(), Article.allowedMethods());
  router.use('/todo', Todo.routes(), Todo.allowedMethods());

  app.use(router.routes(), router.allowedMethods())
}