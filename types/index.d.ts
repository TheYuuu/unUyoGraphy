declare interface EsModuleComponent {
  default: any;
}

declare interface routerItem {
  path: string;
  component: string;
  name: string;
  children?: routerItem[]
}