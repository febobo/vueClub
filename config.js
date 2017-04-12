/**
 * config
 */

var path = require('path');

var config = {
  // debug 为 true 时，用于本地调试
  debug: true,
  // debug: false,

  //get mini_assets() { return !this.debug; }, // 是否启用静态文件的合并压缩，详见视图中的Loader

  get mini_assets() { return !this.debug; }, // 是否启用静态文件的合并压缩，详见视图中的Loader

  name: 'VueClub', // 社区名字
  description: 'Vue：Vue.js专业中文社区', // 社区的描述
  keywords: 'vue, vue-router , vue-valider , nodejs, node, express, connect, socket.io',

  // 添加到 html head 中的信息
  site_headers: [
    '<meta name="author" content="EDP@TAOBAO" />'
  ],
  //site_logo: '/public/images/cnodejs_light.svg', // default is `name`
  site_logo: '/public/images/vue.png', // default is `name`
  site_icon: '/public/images/vue.png', // 默认没有 favicon, 这里填写网址
  // 右上角的导航区
  site_navs: [
    // 格式 [ path, title, [target=''] ]
    [ '/about', '关于' ]
  ],
  // cdn host，如 http://cnodejs.qiniudn.com
  site_static_host: '', // 静态文件存储域名
  // 社区的域名
  host: 'www.vue-js.com',
  // 默认的Google tracker ID，自有站点请修改，申请地址：http://www.google.com/analytics/
  google_tracker_id: 'UA-80268239-1',
  // 默认的cnzz tracker ID，自有站点请修改
  cnzz_tracker_id: '',

  // mongodb 配置
  db: 'mongodb://127.0.0.1:10086/vue_club_dev',
  db_name: 'vue_club_dev',


  session_secret: 'vue_club_secret', // 务必修改
  auth_cookie_name: 'vue_club',

  // 程序运行的端口
  port: 3000,

  // 话题列表显示的话题数量
  list_topic_count: 20,

  // 限制发帖时间间隔，单位：毫秒
  post_interval: 2000,

  // RSS配置
  rss: {
    title: 'CNode：Node.js专业中文社区',
    link: 'http://cnodejs.org',
    language: 'zh-cn',
    description: 'CNode：Node.js专业中文社区',
    //最多获取的RSS Item数量
    max_rss_items: 50
  },

  // 邮箱配置
  mail_opts: {
    host: 'smtp.126.com',
    port: 25,
    auth: {
      user: 'vueclub@126.com',
      pass: '123456qq'
    }
  },

  //weibo app key
  weibo_key: 10000000,
  weibo_id: 'your_weibo_id',

  // admin 可删除话题，编辑标签，设某人为达人
  admins: { febobo: 'admin','ab8512': 'admin','bailicangdu': 'admin', 'lzxb': 'admin'},

  // github 登陆的配置
  GITHUB_OAUTH: {
    clientID: '981a5e0bb7aaa4b76443',
    clientSecret: '55d43c59a806d35bf9f055b39725d85c19c9779d',
    callbackURL: 'http://www.vue-js.com/auth/github/callback'
  },
  // 是否允许直接注册（否则只能走 github 的方式）
  allow_sign_up: true,

  // newrelic 是个用来监控网站性能的服务
  newrelic_key: 'yourkey',

  //7牛的access信息，用于文件上传
  qn_access: {
    accessKey: 'K1EzvixYD2GbvvsiX3ko6g989GuVMUZkyrCdUl5o',
    secretKey: 'ggoFiqnCsE_Un4XpKPRqYQJyke8_Yo6kApm2bcsh',
    bucket: 'vueclub',
    domain: 'http://ooaa8syjw.bkt.clouddn.com'
  },

  //文件上传配置
  //注：如果填写 qn_access，则会上传到 7牛，以下配置无效
  upload: {
    path: path.join(__dirname, 'public/upload/'),
    url: '/public/upload/'
  },

  // 版块
  tabs: [
    ['weex', 'weex'],
    ['share', '分享'],
    ['ask', '问答'],
    ['job', '招聘'],
  ],

  // 极光推送
  jpush: {
    appKey: 'YourAccessKeyyyyyyyyyyyy',
    masterSecret: 'YourSecretKeyyyyyyyyyyyyy',
    isDebug: false,
  }
};

module.exports = config;
