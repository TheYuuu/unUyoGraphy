import { ChartBase } from '../../src/lib/chartBase';
import { AxisHeadMapOptions } from '../../types/AxisHeadMap';

import { select, Selection } from 'd3';

export default class AxisHeadMap extends ChartBase {
  constructor (opt: AxisHeadMapOptions) {
    super(opt);

    this.draw();
  }

  private draw(): void {
    
  }
}