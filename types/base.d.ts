export interface defaultOptions {
  dom: string | HTMLElement;
  data: any;
  mode?: 'svg' | 'canvas';
  opts?: opts;
}

export interface opts {
  padding?: number;
  duration?: number;
}