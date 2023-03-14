// 可折叠的侧边栏
export const sidebarZh = {
  '/zh/': [
    {
      text: 'HTML',
      collapsible: true,
      children: ['/zh/html/README.md'],
    },
    {
      text: 'CSS',
      collapsible: true,
      children: ['/zh/css/README.md'],
    },
    {
      text: 'javaScript',
      collapsible: true,
      children: ['/zh/javascript/README.md'],
    },
    {
      text: '算法',
      collapsible: true,
      children: ['/zh/algo/README.md']
    },
    {
      text: '工具利器',
      collapsible: true,
      children: [
        '/zh/git/README.md',
        '/zh/tools/efficient.md',
        '/zh/tools/prettier.md',
        '/zh/tools/site.md',
        '/zh/tools/buildtools',
        '/zh/tools/nginx',
      ],
    },
    {
      text: '部署',
      collapsible: true,
      children: ['/zh/deploy/README.md']
    },
    {
      text: 'TODO',
      path: '/zh/TODO',
      collapsible: true,
      children: ['/zh/TODO/todo_list'],
    },
  ],
  '/zh/html/': [
    {
      text: 'HTML',
      children: ['/zh/html/README.md'],
    },
  ],

  '/zh/css/': [
    {
      text: 'CSS',
      children: ['/zh/css/README.md'],
    },
  ],
  '/zh/javascript/': [
    {
      text: 'javaScript',
      children: ['/zh/javascript/README.md'],
    },
  ],
  '/zh/algo/': [
    {
      text: '算法',
      children: ['/zh/algo/README.md']
    },
  ],
  '/zh/deploy/': [
    {
      text: '部署',
      children: ['/zh/deploy/README.md']
    },
  ],
  '/zh/english/': [
    {
      text: '英语',
      collapsible: true,
      children: ['/zh/english/README.md'],
    },
  ],
}
