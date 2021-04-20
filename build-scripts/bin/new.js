var inquirer = require('inquirer');
var fs = require("fs");
const path = require('path');

var name = "";
var key = '';
var keyPath = '';
var components = [];

inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: '请输入图表中文名称',
    default: ''
  },
  {
    type: 'input',
    name: 'key',
    message: '请输入图表英文名称,（请使用大写字母开头驼峰命名）',
    default: ''
  }
]).then((answers) => {
  name = answers.name;
  key = answers.key;
  keyPath = key[0].toLocaleLowerCase() + key.slice(1);

  main();
});

async function main () {
  await addBuildJson();
  await addTypesLib();
  await createPackages();
  await addExample();

  console.log('创建完成');
}

async function saveFile(_path, data) {
   fs.writeFileSync(path.join(__dirname, _path), data);
}

async function saveDir(_path) {
  try {
    fs.mkdirSync(path.join(__dirname, _path));
  } catch (e) {

  }
}

async function addBuildJson() {
  const data = fs.readFileSync(path.join(__dirname, "../../charts.build.json"));

  let buildJSON = JSON.parse(data.toString());
  buildJSON[key] = `./packages/${keyPath}`;

  for (let k in buildJSON) {
    components.push({
      key: k,
      keyPath: buildJSON[k].split('/').pop()
    })
  }

  saveFile("../../charts.build.json", JSON.stringify(buildJSON, null, 2));
}

async function addTypesLib() {
  const content = `import ChartBase, { defaultOptions, defaultOpts } from './chartBase';

export interface opts extends defaultOpts {}

export interface ${keyPath}Options extends defaultOptions {
    data: ${keyPath}Data;
    opts?: opts;
}

export default class ${key} extends ChartBase {
    private data;
    private opts;
    constructor(opt: ${keyPath}Options);
    update(data: ${keyPath}OptionData): void;
}
  `;

  saveFile(`../../types/${keyPath}.d.ts`, content);

  const unUyoIndexImport = `${components.map(v => `import ${v.key} from './${v.keyPath}';\n`).join('')}`

  const unUyoIndex = `\nexport {\n${components.map((v,index) => `  ${v.key}${index === components.length - 1 ? '' : ',' }\n`).join('')}};\n`;
  
  saveFile(`../../types/unUyo.d.ts`, unUyoIndexImport + unUyoIndex);

  const libIndexImport = `${components.map(v => `import ${v.key} from '../packages/${v.keyPath}';\n`).join('')}`

  const libIndex = `\nexport default {\n${components.map((v,index) => `  ${v.key}${index === components.length - 1 ? '' : ',' }\n`).join('')}};\n`;

  saveFile(`../../src/index.ts`, libIndexImport + libIndex);
};

async function createPackages() {
  const content = `import ChartBase, { defaultOptions, defaultOpts } from '@/src/lib/chartBase';
export interface opts extends defaultOpts {}

export interface ${keyPath}OptionData {
}

export interface ${keyPath}Options extends defaultOptions {
  data: ${keyPath}OptionData;
  opts?: opts
}

export default class ${key} extends ChartBase {
  private opts = {
    ...this._opts
  };

  constructor (opt: ${keyPath}Options) {
    super(opt);

    this.init();
    this.update(opt.data);
  }

  private init() {}

  public update(data: ${keyPath}OptionData): void {}
}`;

  saveDir(`../../packages/${keyPath}`);

  try {
    saveFile(`../../packages/${keyPath}/index.ts`, content);
  } catch(e) {
    console.log('写入创建package 文件夹失败')
  }
}

async function addExample() {
  const data = fs.readFileSync(path.join(__dirname, "../../example/charts.json"));

  let exampleJSON = JSON.parse(data.toString());
  exampleJSON['2D'].push({
    name: name,
    key: keyPath
  });

  saveFile("../../example/charts.json", JSON.stringify(exampleJSON, null, 2));

  saveDir(`../../example/demo/${keyPath}`);

  const demoIndex = `
import React, { useState, useEffect } from "react";

import unUyo from '@/src/index';

import DemoModel from '../demoModel';
import docs from './docs';

// import MarkdownContent from '@lib/markdownContent';
// import contributing from './contributing.md';

const { ${key} } = unUyo;

const containerStyle = {
  width: '500px',
  height: '400px'
}

export default function ${key}Demo() {
  const [${keyPath}, set${key}] = useState<InstanceType<typeof ${key}> | null>(null);

  useEffect(() => {
    set${key}(new ${key}({
      dom: '#container',
      data: {},
      opts: {}
    }))
  }, []);

  return (
    <section>
      <section>
        <div id="container" style={containerStyle}>todo</div>
      </section>
      <DemoModel docs={docs}></DemoModel>
      {/* <section className="mt-lg">
        <MarkdownContent content={contributing}></MarkdownContent>
      </section> */}
    </section>
  );
}
  `;

  try {
    saveFile(`../../example/demo/${keyPath}/index.tsx`, demoIndex);
  } catch(e) {
    console.log('写入创建demo 文件夹失败')
  }

  const docsDemo = `export default {
  chartsDesc: [
    '图表描述'
  ],
  useDesc: [
    '使用场景'
  ],
  dataDesc: [
    '数据集说明'
  ],
  optsData: [
    {
      key: '1',
      params: 'todo',
      desc: 'todo',
      type: 'string',
      default: 'todo'
    }
  ],
  methodData: [
    {
      key: '1',
      params: 'todo',
      desc: 'todo',
      type: 'todo',
      default: 'todo'
    }
  ]
}
  `;

  try {
    saveFile(`../../example/demo/${keyPath}/docs.ts`, docsDemo);
  } catch(e) {
    console.log('写入创建demo说明 失败败')
  }

  const md = `
## 图表说明

## 推荐场景


## 数据集

## Opts
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |


## Method
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
`
  try {
    saveFile(`../../example/demo/${keyPath}/contributing.md`, md);
  } catch(e) {
    console.log('写入创建demo说明 失败败')
  }
}