## 前期知识准备
1. JavaScript
2. HTML+CSS
3. 构建工具：Webpack
4. 安装node
5. cnpm命令
6. 官方文档

## 创建React项目
npx create-react-app
cd react-demo
npm start

## 环境介绍
node_modules: 非常大
public: 入口文件
src: 源码文件

## React基础知识
### JSX语法介绍
JSX语法：JavaScript + XML语法
解读JSX语法： 遇到<>按照XML语法解析，遇到大括号按照JavaScript语法解析

### 元素渲染

### 组件
组件的后缀可以是js, 也可以是jsx
一个React项目，是由成千上万个组件组成

### props属性、
组件的复用性很重要

### 事件处理
1. this问题
2. 向事件处理程序传递参数

### State

### React生命周期函数
随着我们对React理解和使用越来越多，生命周期的参考价值越来越高
函数列表：
    componentWillMount:在组件渲染之前执行
    componentDidMount:在组件渲染之后执行
    shouldComponentUpdate:返回true和false, true代表允许改变, false代表不允许改变
    componentWillUpdate:数据在改变之前执行(state,props)
    componentDidUpdate:数据修改完成(state,props)
    componentWillReceiveProps:props发生改变执行
    componentWillUnmount:组件卸载前执行
子传父！！！
父传子！！！