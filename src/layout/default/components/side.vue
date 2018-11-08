<template>
    <aside class="DefaultSide">
        <ul>
            <li class="DefaultSide-1">1</li>
            <li class="DefaultSide-1">2</li>
            <li class="DefaultSide-1">3</li>
            <li class="DefaultSide-1">4</li>
            <li class="DefaultSide-1">5</li>
        </ul>
    </aside>
</template>

<script>
export default {

}
</script>

<style scoped>
.DefaultSide{
    width: 200px;
    display: table-cell;
    background: red;
}
    .DefaultSide-1{
        background: skyblue;
        line-height: 20px;
        text-align: center;
        border:3px solid;
    }

</style>
