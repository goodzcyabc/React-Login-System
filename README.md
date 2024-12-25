# React+Redux+Login

## 安装依赖
```js
npm install --save react-router-dom
npm install --save redux
npm install --save react-redux
npm install --save-dev redux-devtools-extension
```

## 使用路由
创建路由基本结构


## 使用BootStrap
官网：getbootstrap.com
中文网：https://www.bootcss.com/
Bootstrap 是最受欢迎的 HTML、CSS 和 JS 框架，用于开发响应式布局、移动设备优先的 WEB 项目。

CDN:网络地址

## 使用validator
参考地址：https://github.com/validatorjs/validator.js

## 跨域解决方案
1. 后台：cors第三方
    npm install --save cors
2. 前台：设置跨域代理
    参考地址：https://github.com/facebook/create-react-app/blob/master/docusaurus/docs/proxying-api-requests-in-development.md

## 动态处理样式
classnames 第三方库
```js
import classnames from 'classnames'

<div className=classnames({
    'class1': true,
    'class2': true
    )>
</div>
```

## 链接数据库
npm install --save mysql

## 服务器自动更新
1. npm install -g nodemon
2. 配置
3. 启动：nodemon index.js


## 登陆验证
1. authActions中返回网络请求结果res
2. SignInForm接受action返回的网络请求结果res，调用提示返回成功和失败的提示
3. 增加登陆用户名密码不能为空的验证：validator.js文件操作
4. 登陆页面视图响应：class样式和文本提示
5. 修复errors的提示问题


## token认证
参考地址：http://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html

流程：
1. 后台返回token(后台要配置token字段)
    安装依赖：npm install --save jsonwebtoken
2. 前端处理token问题
    redux/本地
3. 修改顶部导航显示问题
    1.视图变更
    2.退出登陆



## token流程

### token是什么?
令牌，用户凭证

### token作用？
token存储的是用户登陆状态的唯一凭证

### token流程
用户登陆 -> 生成token -> 存储token -> 新的网络请求携带token -> 验证token -> 返回数据 -> 返回错误信息

### 请求API携带token
在网络请求的封装方法中携带token
token的携带式通过请求头进行携带的！

1. server里增加了一个网络请求
2. 修改网络请求的请求头添加方案
```js
if (store.getState().auth.user.token) {
    // 设置请求头
    config.headers.Authorization = store.getState().auth.user.token;
}
```
3. 首页增加网络请求


## 优化调整
1. 在程序中，尽量避免字符串的存在，因为字符串容易写错，而且在编译过程中还不报错