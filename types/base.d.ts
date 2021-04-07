export interface defaultOptions {
  dom: string | HTMLElement;
  mode: 'svg' | 'canvas';
  data: any;
  opts?: opts;
}

export interface opts {
  padding: number;
  duration: number;
}