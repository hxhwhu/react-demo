# 从零搭建 React 项目

## 1. 初始化项目

### 环境准备

```bash
# node 18.12.1
node -v # 18.12.1

# 安装 React 脚手架并使用 create-react-app 创建项目
npx create-react-app react-demo

# 全局安装 yarn
npm install --global yarn

# 启用项目
cd react-demo
yarn start
```

### 配置 Webpack

```bash
# 暴露配置文件
yarn eject

# 支持 Sass/Scss
yarn add node-sass --dev
```

设置路径别名：修改 config/webpack.config.js

```js
'@': path.join(__dirname, '..', 'src')
```

### 引入 Ant Design

```bash
yarn add antd
```
