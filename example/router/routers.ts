import { coms } from '../components/coms/coms';
import { docs } from '../components/docs/docs';

import charts from '../charts.json';

const routes = [
  {
      path: "/components",
      component: coms,
      children: charts['2D'].map((item: any)=>{
        return {
          name: item.name,
          path: '/components/' + item.key,
          component: () => import('../demo/' + item.key)
        }
      })
  },
  {
      path: "/docs",
      component: docs
  }
];

export default routes