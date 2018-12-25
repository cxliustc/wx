<template>
    <div class="friends-list">
        <div class="detail-image">
            <img src="" alt="">
        </div>
        <div class="user">
            <div class="container">
                <div class="rank">{{userInfo.rank}}</div>
                <div>{{userInfo.name}}</div>
                <div>{{userInfo.stepNumber}}</div>
                <div>111</div>
            </div>
        </div>
        <div class="list-container">
            <ul>
                <li class="table-head">
                    <div>排名</div>
                    <div>用户</div>
                    <div>运动步数</div>
                    <div>唤醒</div>
                </li>
                <li v-for="(item, index) in friends" :key="index">
                    <div class="rank">{{item.rank}}</div>
                    <div>{{item.name}}</div>
                    <div>{{item.stepNumber}}</div>
                    <div></div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            friends: [{
                rank: 1,
                name: 'S_DOG',
                stepNumber: '10001'
            }, {
                rank: 1,
                name: 'S_DOG',
                stepNumber: '10001'
            }, {
                rank: 1,
                name: 'S_DOG',
                stepNumber: '10001'
            }, {
                rank: 1,
                name: 'S_DOG',
                stepNumber: '10001'
            }],
            userInfo: {
                rank: 1,
                name: 'S_DOG',
                stepNumber: '10001'
            }
        }
    }
}
</script>
<style scoped lang="less">
@import '../../assert/css/varibale.less';
.friends-list {
    .detail-image {
        width: 100%;
        height: 200px;
        background: red;
        > img {
            height: 200px;
            width: 100%;
        }
    }
    .user {
        width: 100%;
        .container {
            .flex;
            > div {
                flex: 1;
            }
            > div.rank {
                text-indent: 12px;
                box-sizing: border-box;
            }
            box-sizing: boder-box;
            font-size: 16px;
            color: #666;
            padding: 0 20px;
            margin-right: 20px;
            flex-direction: row;
            width: 100%;
            margin-top: 15px;
        }
    }
    .list-container {
        ul {
            .flex;
            box-sizing: border-box;
            padding: 0 20px;
            li.table-head {
            }
            li {
                margin-top: 15px;
                width: 100%;
                .flex;
                flex-direction: row;
                > div {
                    flex: 1;
                    font-size: 16px;
                    color: #666;
                }
                > .rank {
                    box-sizing: border-box;
                    text-indent: 12px;
                }
            }
        }
    }
}
</style>