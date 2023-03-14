export const navbarZh = [
  { text: '主页', link: '/zh/' },
  // { text: '指南', link: '/zh/guide/', target: '_self' },
  {
    text: '前端',
    children: [
      { text: 'HTML', link: '/zh/html/' },
      { text: 'CSS', link: '/zh/css/' },
      { text: 'JavaScript', link: '/zh/javascript/' },
      { text: '设计模式', link: '/zh/javascript/#设计模式' },
    ],
  },
  { text: '后端', link: '/zh/backend/' },
  {
    text: '工具利器',
    link: '/zh/tools/',
    children: [
      { text: 'Git', link: '/zh/git/' },
      { text: '工具', link: '/zh/tools/' },
      { text: '代码格式化', link: '/zh/tools/prettier' },
    ],
  },
  {
    text: '随笔',
    link: '/zh/note/',
    children: [
      // { text: '关于我', link: '/zh/about/' }
      { text: '英语', link: '/zh/english/README.md' }

    ],
  },
  {
    text: 'Note',
    ariaLabel: 'Note Menu',
    children: [
      { text: '算法', link: '/zh/algo/' },
      { text: '数据分析', link: '/zh/analyzes/' },
      { text: '面试', link: '/zh/面试/' },
    ],
  },
]
