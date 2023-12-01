<template>
    <p>侦听器</p>
    <p>{{ msg }}</p>
    <button @click="updateValue()">
        点击我更改
    </button>

</template>

<script>
    export default{
        data(){
            return{
                msg:"这是一个old"
            }
        },
        methods:{
            updateValue(){
                this.msg="这是一个new"
            }
        },
        watch:{
            msg(newValue,oldValue){
                console.log(newValue,oldValue)

            }
        }
    }
</script>