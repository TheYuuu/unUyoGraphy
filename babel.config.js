module.exports = {
  presets: [
    ["@babel/preset-env", {
      "targets": {
        "browsers": ["last 2 versions"] // 最近 2 个版本的浏览器
      },
      "env": {
        "modules": false 
      }
    }]
  ],
  plugins: ["syntax-dynamic-import"]
}
