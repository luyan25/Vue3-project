<template>
<p><b>内联事件处理器</b></p>
<button @click="addCount">ADD</button>
<button @click="clearCount">CLEAR</button>
<p>{{ count }}</p>
</template>

<script>    
    export default{
        data(){
            return{
                count:0
            }
        },
        methods:{
            addCount(){
                console.log("方法创建成功！")
                this.count++
            },
            clearCount(){
                console.log("方法创建成功！")
                this.count=0
            }
        }
    }
    

</script>