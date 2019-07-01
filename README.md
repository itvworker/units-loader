### units-loader
一个webpack loader，主要用于自定义单位的转换,
如有问题请发送邮件到xieke76@qq.com
### 安装指南
```
$ npm install units-loader --save-dev
```
在webpack上添加如以下的例子

####webpack.config.js
```js
// webpack.config.js
//
module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/,
        loader: 'units-loader', // compiles Less to CSS
      },
    ],
  },
};

```


也可以像如下使用
```js
module.exports = {
    ...
    module: {
        rules: [{
            test: /\.less$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "units-loader", options: {
                    unit: 'rem', //转换后的单位，默认转换单位为rem,可以自定义转换单位，
                    divisor: 37.5, //转换比例，默认为值为37.5
                    accuracy: 2, //精确度,保留的小数位,默认值为2位
                    raw: 'rpx' //原单位，默认值为rpx
                }
            }]
        }]
    }
};

```
