<template>
    <div class="Default">
        <Top/>
        <div class="Default-main">
            <Side/>
            <main class="table-ceil">
                <transition name="fade-transform" mode="out-in">
                    <router-view/>
                </transition>
            </main>
        </div>
    </div>
</template>

<script>
import Side from './components/side/side'
import Top from '../components/top/top'
export default {
    components: {Side, Top}
}
</script>

<style scoped>
.Default-main{
    width: 100%;
    display: table;
}
    .table-ceil{
        background: green;
        display: table-cell;
        vertical-align:top;
    }

</style>
