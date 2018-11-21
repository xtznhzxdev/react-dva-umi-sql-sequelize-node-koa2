import Koa from 'koa';
import routes from './routes';
const bodyparser = require('koa-bodyparser');
const json = require('koa-json');
const cors = require('koa-cors');

import config from './config';

const app = new Koa();
app.use(cors());
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}));
app.use(json());

// 路由-最后到达路由，由它分发到相应的处理controller，简单mvc
routes(app);

module.exports = app;