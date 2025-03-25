declare interface EsModuleComponent {
  default: any;
}

declare interface routerItem {
  path: string;
  component: string;
  name: string;
  children?: routerItem[];
}

declare module "*.md" {
  const content: string;
  export default content;
}
