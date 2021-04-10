import charts from '../charts.json';

const routes = [
  {
      name: '组件',
      path: "/components",
      component: 'coms',
      children: charts['2D'].map((item: any)=>{
        return {
          name: item.name,
          path: '/components/' + item.key,
          component: item.key
        }
      })
  },
  {
      name: '文档',
      path: "/docs",
      component: 'docs',
  }
];

export default routes