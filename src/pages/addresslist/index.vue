<template>
    <div class="address">
        <div class="addressList">
        <div class='detail' v-for='(item, index) in addressList' :key='index'>
            <p class='nameAndTel'>
                <span class='name'>{{item.name}}</span>
                <span class='phone'>{{item.phone}}</span>
            </p>
            <p class="address">{{item.address}}</p>
            <p class='operation'>
                <span v-if='item.isDefault' class="default">[默认]</span>
                <span v-else class="notDefault" @click="setDefaultFn(item.id)">设为默认</span>
                <span class='edit'>
                    <span @click="editFn(item.id)">
                        <i class="iconfont icon-edit"></i>
                        编辑
                    </span>
                    <span @click="deleteFn(item.id)">
                        <i class="iconfont icon-delete"></i>
                        删除
                    </span>
                </span>
            </p>
        </div>
    </div>
    <a href="javascript:;">
        <i class="iconfont icon-add"></i>
    </a>
    </div>
</template>
<script>
import {userApi} from '../../apis/index'
const list = [
    {
        id: '111',
        name: '小爱思',
        phone: '13053808522',
        address: '上海市浦东新区上桥路968号50号楼702室',
        isDefault: true
    }, {
        id: '222',
        name: '小爱思',
        phone: '13053808522',
        address: '上海市浦东新区上桥路968号50号楼702室',
        isDefault: false
    }, {
        id: '333',
        name: '小爱思',
        phone: '13053808522',
        address: '上海市浦东新区上桥路968号50号楼702室',
        isDefault: false
    }
]
export default {
    data () {
        return {
            addressList: list
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
.addressList{
    width:100%;
    background: #ececec;
    min-height:670px;
    .flex;
    margin-top: 10px;
    .detail{
        background: #fff;
        margin-bottom: 7px;
        padding:10px 15px;
        box-sizing: border-box;
        width:100%;
        .nameAndTel{
            .flex;
            flex-direction: row;
            justify-content: space-between;
            margin-bottom: 15px;
            .name{
                font-size: 14px;
            }
            .phone{
                font-size: 12px;
            }
        }
        .address{
            color:#939393;
            font-size: 12px;
            padding-bottom: 10px;
            border-bottom: 1px solid #ececec;
        }
        .operation{
            margin-top: 10px;
            .flex;
            flex-direction: row;
            justify-content: space-between;
            .default{
                font-size: 12px;
                color:orange;
            }
            .notDefault{
                font-size: 12px;
                width:65px;
                height:20px;
                border-radius: 5px;
                .flex;
                border:1px solid #ececec;
                justify-content: center;
                color:#939393;
            }
            .edit{
                .flex;
                flex-direction: row;
                span{
                    font-size: 12px;
                    padding-left: 5px;
                    color:#939393;
                    .flex;
                    flex-direction: row;
                    i{
                        font-size: 16px;
                        color:#939393;
                        margin-right: 5px;
                    }
                }
            }
        }
    }
}
</style>