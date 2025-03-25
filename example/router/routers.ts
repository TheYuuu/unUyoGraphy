import charts from "../charts.json";

const routes = [
  {
    name: "组件",
    path: "/components",
    component: "coms",
    children: charts["2D"].map((item: any) => {
      return {
        name: item.name,
        path: "/components/" + item.key,
        component: item.key,
      };
    }),
  },
  {
    name: "文档",
    path: "/docs",
    component: "docs",
    children: [
      {
        name: "unUyo graph",
        path: "/docs/introduce",
        component: "introduce",
      },
      {
        name: "快速使用",
        path: "/docs/getting-started",
        component: "getting-started",
      },
      {
        name: "开发指南",
        path: "/docs/contributing",
        component: "contributing",
      },
    ],
  },
];

export default routes;
