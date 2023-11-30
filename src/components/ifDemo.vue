<template>
    <h3 v-if="flag">你能看到我么</h3>
    <h3 v-else="flag">那你还是看看我吧</h3>
</template>

<script>
    export default{
        data(){
            return{
                flag:false
            }
        }
    }
</script>