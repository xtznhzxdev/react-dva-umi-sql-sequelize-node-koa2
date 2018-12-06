export const setting = {
  siteName: '江湖再见',
  author: '胖芮'
};

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


export const gridLayout = {
  xs: 24,
  sm: 24,
  md: 12,
  lg: 8
}

// 分类
export const articleCategory = {
  'html': 'HTML/CSS',
  'javascript': 'Javascript',
  'vuejs': 'Vue.js',
  'reactjs': 'React.js',
  'nodejs': 'Node.js',
  'jquery': 'jQuery',
  'webapp': 'WebApp',
  'fetool': '前端工具',
  'python': 'Python',
  'database': '数据库',
  'machine': '机器学习'
};

// 头像
export const imageUrl = {
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
  image: 'https://i.alipayobjects.com/e/201311/1V4o0zhQPN_src.jpg'
};

// 左侧菜单
export const menusData = [
  {
    title: '一览众生晓',
    link: '/mine/',
    key: 'dashboard',
    icon: 'dashboard',
    iconTheme: 'outlined'
  },
  {
    title: '要去做的事',
    link: '/mine/todo',
    key: 'todo',
    icon: 'calendar',
    iconTheme: 'outlined'
  },
  {
    title: '左右手写我口',
    link: '/mine/article',
    key: 'article',
    icon: 'bulb'
  },
  {
    title: '去新建书单',
    link: '/mine/book',
    key: 'book',
    icon: 'book'
  },
  {
    title: '有问就去提',
    link: '/mine/wen',
    key: 'wen',
    icon: 'bulb'
  },
  {
    title: '有想法就答',
    link: '/mine/da',
    key: 'da',
    icon: 'bulb'
  },
  {
    title: '给我的消息',
    link: '/mine/notices',
    key: 'notices',
    icon: 'notification'
  },
  {
    title: '创造新工具',
    link: '/mine/tool',
    key: 'tool',
    icon: 'diff'
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
