<template>
    <section class="Home">
        <div class="Home-ti"> i am main </div>
        <HelloWorld/>
    </section>
</template>

<script>

import HelloWorld from '@/components/hello-world/hello-world'

export default {
    components: {
        HelloWorld
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
