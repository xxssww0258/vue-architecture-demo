<template>
    <div>
        <Top/>
        <main>
            <router-view/>
        </main>
    </div>
</template>

<script>
import Top from '../components/top/top'

export default {
    components: {Top}
}
</script>

<style>

</style>
