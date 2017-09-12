<template>
    <div class="home">
        <header1 title="首页"></header1>
        <div>{{data}}</div>
    </div>
</template>
<script type="text/javascript">
    import Header1 from '../component/header/header.vue';
    export default {
        components:{
            Header1
        },
        data(){
            return{
                data:"这是首页"
            }
        }
    }
</script>