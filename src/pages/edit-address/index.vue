<template>
    <div class="edit-address">
        <div class='item' v-for='(item, index) in list' :key='index'>
            <span>{{item.title}}</span>
            <input :type="item.type" :name='item.name' :placeholder="item.placeholder">
        </div>
        <a href="" class='saveBtn'>保存</a>
    </div>
</template>
<script>
import {userApi} from '../../apis/index'
const list = [
    {
        title: '联系人',
        name: 'name',
        placeholder: '',
        type: 'text'
    }, {
        title: '手机号码',
        name: 'phone',
        placeholder: '',
        type: 'number'
    }, {
        title: '选择地区',
        name: 'area',
        placeholder: '',
        type: 'text'
    }, {
        title: '详细地址',
        name: 'address',
        placeholder: '如道路/门牌号/小区/单元室等',
        type: 'text'
    }
]
export default {
    data () {
        return {
            list
        }
    },
    created () {
    },
    methods: {
        editFn (id) {
            console.log(id)
        },
        deleteFn (id) {
            console.log(id)
        },
        setDefaultFn (id) {
            console.log(id)
        }
    }
}
</script>
<style lang="less">
@import '../../assert/css/varibale.less';
.edit-address{
    .flex;
    height:100vh;
    flex-direction: column;
    background: #ececec;
    .item{
        border-bottom: 1px solid #ddd;
        width:100%;
        margin-left: 10px;
        .flex;
        height:50px;
        flex-direction: row;
        span{
            font-size: 14px;
            width:70px;
            margin-left: 10px;
        }
        input{
            // border:1px solid #ccc;
            flex:1;
            margin-right: 10px;
            font-size: 14px;
        }
    }
    .saveBtn{
        width: 120px;
        height:40px;
        font-size: 14px;
        border-radius: 40px;
        margin-top: 100px;
        border:1px solid #999;
        color:#666;
        .flex;
        align-items: center;
        justify-content: center;
    }
}

</style>