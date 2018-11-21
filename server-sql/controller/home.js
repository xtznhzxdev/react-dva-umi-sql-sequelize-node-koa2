import config from '../config';

class Home {
  constructor(){
    this.show = this.show.bind(this);
  }

  // 主页展示
  async show (ctx, next) {
    try {
      ctx.body = {
        code: 3
      }
    } catch(err) {
      await next();
    }
  }
}

export default new Home();