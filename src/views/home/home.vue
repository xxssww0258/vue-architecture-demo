<template>
    <Default>
        <div class="Home">
            <div class="Home-ti"> i am main </div>
            <HelloWorld/>
        </div>
    </Default>
</template>

<script>
import Default from '@/layout/default/default.vue'

import HelloWorld from '@/components/hello-world/hello-world'

export default {
    components: {
        Default, HelloWorld
    }
}
</script>

<style scoped>
.Home{
    text-align: center;
    background: pink;
}
    .Home-ti{
        font-size: 50px;
        color: #999;
        background: black;
    }
</style>
