<template>
    <div class="header">
        {{title}}
    </div>
</template>
<script type="text/javascript">
    export default {
        props:["title"]
    }
</script>
<style type="text/css">
    .header {
        background: #ddd;
        text-align: center;
        line-height: 50px;
    }
</style>