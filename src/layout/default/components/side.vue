<template>
    <aside class="DefaultSide">
        <ul>
            <router-link
                tag="li" class="DefaultSide-1" :to="{path:route.path}"
                v-for="route in routeTable" :key="route.name" v-if="route.meta.show"
            >
                {{ route.meta.title }}
            </router-link>
        </ul>
    </aside>
</template>

<script>
export default {
    data () {
        return {
            routeTable: this.$router.options.routes
        }
    },
    mounted () {
        console.log(this.routeTable)
    }
}
</script>

<style>
    html,body,#app,.Default,.Default-main,.DefaultSide{
        height:100%;
    }
</style>

<style scoped>
.DefaultSide{
    width: 200px;
    display: table-cell;
    background: red;
    position: relative;
    z-index: 1;
}
    .DefaultSide-1{
        background: skyblue;
        line-height: 20px;
        text-align: center;
        border:3px solid;
    }

</style>
