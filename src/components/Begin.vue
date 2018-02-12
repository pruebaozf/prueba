<template>
    <div class="container">
        <div class="selectorgroup">
            <drop-down-a class="col-sm-3 col-xs-12"></drop-down-a>
            <drop-down-b class="col-sm-3 col-xs-12"></drop-down-b>
            <drop-down-c class="col-sm-3 col-xs-12"></drop-down-c>
        </div>
    </div>   
</template>
<script>
    import DropDownA from './DropDownA.vue'
    import DropDownB from './DropDownB.vue'
    import DropDownC from './DropDownC.vue'
    export default {
        name: 'Begin',
        components: {
            DropDownA,
            DropDownB,
            DropDownC
        }
    }
</script>
<style scoped>
    .selectorgroup{
        display: flex;
        justify-content: space-between;
    }
</style>
