# vue-architecture-demo
> 参考vue-element-admin 移除了element
architecture-demo
+ 自定义eslint
+ 添加lint-staged husky 做提交规范
+ 定义axios
+ 添加api文件
+ 添加mock文件
+ 事件巴士
+ 组件分为
    + layout 布局
    + views 视图
        + reload 从定向组件 实现刷新 
    + components 通用组件
+ 组件目录
    + component-a
        + img 组件图片资源
        + component-a.vue 组件代码
+ 路由第一层是layout 第二层才是组件
+ vuex
+ 404
+ navigation-guard.js 路由守卫
+ router
    + demoRoute 用来查看全部组件和视图组件  直观的查看到各个组件
+ utils
    + env 环境判断
    + localStorage
    + fn-util 自定义工具
+ filter.js
    + formatDate
+ directive
    + guide 只单纯的封装了一个modal效果
+ mixin
    + toTop
+ icons
    + fons-awesome
    + customize-icons

# 缺:
+ clipboard 配合 icons 做开发页组件
+ 加入element
+ 加入vux

# 需要手动添加的
+ package.json
    + `yarn add axios cross-env driver.js eslint-formatter-friendly fastclick html5-reset husky lint-staged mockjs vue-awesome vue-i18n vuex`
+ 脚手架
    + 插入svg-sprite-loader webpack配置
    ```js
        rules:[
             {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
                include: [resolve('src/icons')],  //
                options: {
                symbolId: 'icon-[name]',
                }
            },
            //  排除url-loader
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                exclude: [resolve('src/icons')],  // folders other than src/icons use url-loader
                options: {
                limit: 10000,
                name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
        ]
    ```
