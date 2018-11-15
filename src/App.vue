<template>
    <div id="app">
        <transition name="fade-transform" mode="out-in">
            <keep-alive include="componentName1,componentName2">
                <router-view/>
            </keep-alive>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>
</style>
