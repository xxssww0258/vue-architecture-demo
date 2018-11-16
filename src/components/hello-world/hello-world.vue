<template>
    <section class="hello" v-guide.close="guide">
        显示guide:{{ guide }}
        <v-icon name="signal"/>
        <div>
            <img src="./img/logo.png" alt=""/>
        </div>
        <h1>{{ msg }}</h1>
        <p>{{ data.spell }}</p>
        <p>{{ data.title }}</p>
        <p>{{ data.content }}</p>
    </section>
</template>

<script>
import {loginAjax} from '@/api/user'
export default {
    name: 'HelloWorld',
    data () {
        return {
            guide : false,
            // 事件 把该组件所有的emit事件统一写在这 方便查阅
            events: {
                click: this.$emit.bind(this, 'click'),
                hover: this.$emit.bind(this, 'hover')
            },
            // 样式
            styleMargin    : 2,
            stylePaddingTop: 2,
            // 路由参数
            userId         : this.$route.params.userId,
            userName       : this.$route.query.userName,

            // 普通
            msg : 'Welcome to Your Vue.js App',
            data: ''
        }
    },
    mounted () {
        loginAjax('zhangsan', '123456')
            .then(res => {
                console.log(res)
                this.data = res.showapi_res_body.data
            })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
