// 配置
window.Config = {

  // 站点名
  SiteName: 'Uptime Status',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'm784818699-3f7d48939ec2b7a995669f20',
    'm784818702-dc395403627c8e1baac671d1',
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: '免费图床',
      url: 'https://up.fastvm.org/'
    },
    {
      text: 'GitHub',
      url: 'https://github.com/yb/uptime-status'
    }
  ]
};
