<template>
    <div class="user">
        <div class="header"></div>
        <div class="personal-order"></div>
        <div class="personal-modules">
            <ul>
                <li></li>
            </ul>
        </div>
        <div class="recommendation-app">
            <ul>
                <li></li>
            </ul>
        </div>
    </div>
</template>
<script>
import {userApi} from '../../apis/index'
export default {
    data () {
        return {
            personalOrders: [],
            personalModules: [],
            recommendApps: []
        }
    },
    created () {
    },
}
</script>
<style lang="less">
    
</style>