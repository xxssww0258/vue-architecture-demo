import Vue from 'vue'
const vm = new Vue()
vm.$on('hello', function (params) {
    console.log('this is eventBus')
})
vm.$emit('hello')
export default vm
