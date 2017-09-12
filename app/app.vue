<template>
    <div>
        <div class="content">
            <router-view></router-view>
        </div>
        <div class="nav">
            <router-link to="/">首页</router-link>
        </div>
    </div>
</template>
<style type="text/css" lang="less">
    /*使用less样式*/
    @import './common/css/reset.css';
    .nav{
        position: fixed;
        bottom: 0;
        width: 100%;
        display: flex;
        border-top: 1px solid #ccc;
        background: white;
        a{
            flex:1;
            display: block;
            text-align: center;
            line-height: 50px;
            color: black;
        }
    }
    .content{
        font-size: 30px;
        padding-bottom: 50px;
    }
</style>