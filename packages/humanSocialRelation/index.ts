import ChartBase, { DefaultOptions, DefaultOpts } from "../chartBase";
export interface Opts extends DefaultOpts {}

export type HumanSocialRelationOptionData = {};

export type HumanSocialRelationOptions = {
  data: HumanSocialRelationOptionData;
  Opts?: Opts;
} & DefaultOptions;

export default class HumanSocialRelation extends ChartBase {
  private Opts = {
    ...this._opts,
  };

  constructor(opt: HumanSocialRelationOptions) {
    super(opt);

    this.init();
    this.update(opt.data);
  }

  private init() {}

  public update(data: HumanSocialRelationOptionData): void {}
}
