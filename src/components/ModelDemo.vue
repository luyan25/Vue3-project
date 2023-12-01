<template>
    <input type="text" v-model="msg">
    <p>{{ msg }}</p>
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">{{ checked }}</label>
</template>

<script>
    export default{
        data(){
            return{
                msg:null,
                checked:false
            }
        }
    }
</script>