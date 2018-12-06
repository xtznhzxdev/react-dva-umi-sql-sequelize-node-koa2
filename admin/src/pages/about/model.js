import loginScreen from '@/assets/image/screen/login@2x.png';
import aboutScreen from '@/assets/image/screen/about@2x.png';
import { imageUrl } from '@/utils';

export default {
  namespace: 'about',
  state: {
    data: [
      {
        time: '2018年12月',
        icon: 'schedule',
        list: [
          {
            src: aboutScreen,
            title: '6日',
            url: '/about',
            description: '关于页面发布'
          }
        ]
      },
      {
        time: '2018年11月',
        icon: 'schedule',
        list: [
          {
            src: imageUrl.image,
            title: '5日',
            url: '/article',
            description: '我手写我口（文章）列表发布'
          },
          {
            src: imageUrl.image,
            title: '1日',
            url: '/mine/article',
            description: '左右手写我口（文章）新增、编辑和删除等操作发布'
          }
        ]
      },
      {
        time: '2018年10月',
        icon: 'solution',
        list: [
          {
            src: imageUrl.image,
            title: '21日',
            url: '/mine/todo',
            description: '要去做的事（待办事项/日历）、新增事项、编辑事项及事项是否完成发布'
          },
          {
            src: imageUrl.image,
            title: '12日',
            icon: 'user-add',
            url: '/account/register',
            description: '用户注册发布'
          },
          {
            src: loginScreen,
            title: '8日',
            icon: 'idcard',
            url: '/account/login',
            description: '用户登录发布'
          }
        ]
      },
      {
        time: '2018年9月',
        icon: 'layout',
        color: 'green',
        url: '/',
        description: '基本思路确定，快速搭建服务器、中后台及前端展示界面'
      }
    ],
    profileList: [
      {
        icon: 'code',
        target: true,
        url: 'http://www.ruizhengyun.cn/',
        title: '我的博客'
      },
      {
        icon: 'book',
        target: true,
        url: 'http://ruizhengyun.cn/tutorial/',
        title: '糖衣炮弹'
      },
      {
        icon: 'github',
        target: true,
        url: 'https://github.com/ruizhengyun',
        title: 'Github'
      },
      {
        icon: 'calculator',
        title: '微信公众号'
      }
    ]
  },
  subscriptions: {

  },
  effects: {

  },
  reducers: {

  }
}
