// 分页
export const pagination = {
  current: 1,
  pageSize: 20,
  total: 0
};

// 表格大布局
export const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
}

// 分类
export const articleCategory = [
  {
    key: 'html',
    value: 'HTML/CSS'
  },
  {
    key: 'javascript',
    value: 'Javascript'
  },
  {
    key: 'vuejs',
    value: 'Vue.js'
  },
  {
    key: 'reactjs',
    value: 'React.js'
  },
  {
    key: 'nodejs',
    value: 'Node.js'
  },
  {
    key: 'jquery',
    value: 'jQuery'
  },
  {
    key: 'webapp',
    value: 'WebApp'
  },
  {
    key: 'fetool',
    value: '前端工具'
  },
  {
    key: 'python',
    value: 'Python'
  },
  {
    key: 'database',
    value: '数据库'
  },
  {
    key: 'machine',
    value: '机器学习'
  },
];

// 头像
export const avatarUrl = 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png';

// 左侧菜单
export const menusData = [
  {
    title: '一览众生',
    link: '/',
    key: 'dashboard',
    icon: 'dashboard',
    iconTheme: 'outlined'
  },
  {
    title: '我的待办',
    link: '/todo',
    key: 'todo',
    icon: 'bars',
    iconTheme: 'outlined'
  },
  {
    title: '活在当下',
    link: '/moment',
    key: 'moment',
    icon: 'schedule',
    iconTheme: 'outlined',
    children: [
      {
        title: '技术文章',
        link: '/moment/article',
        key: 'article'
      },
      {
        title: '远虑近忧',
        link: '/moment/plan',
        key: 'plan'
      },
      {
        title: '它山之石',
        link: '/moment/tool',
        key: 'tool'
      }
    ]
  }
];

// 待办分类
export const todoCategory = {
  'job': '工作',
  'study': '新识',
  'article': '文章',
  'diary': '日记',
  'special': '纪念日'
};

// 待办状态
export const todoStatus = {
  'todo': 'warning',
  'done': 'success',
};

// 状态颜色
export const statusColor = {
  'success': '#52c41a',
  'error': '#f5222d',
  'default': '#eee',
  'processing': '#1890ff',
  'warning': '#faad14'
};
