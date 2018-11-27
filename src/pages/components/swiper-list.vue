<template>
    <div>
        <scroll-view
            scroll-x
            style="width: 100%"
        >
            <div class="container">
                <div class="blue"></div>
                <div class="green"></div>
                <div class="red"></div>
            </div>
        </scroll-view>
    </div>
</template>
<script>
export default {
    props: {
        list: {
            type: Array,
            default () {
                return []
            }
        }
    }
}
</script>
<style lang="less" scoped>
div {
    scroll-view {
        div.container {
            display: flex;
            flex-direction: row;
            
        }
    }
}
</style>