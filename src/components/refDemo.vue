<template>
    <div ref="container" class="container">{{ msg }}</div>
    <button @click="getElementHandel">获取元素</button>

</template>

<script>
    export default{
        data(){
            return{
                msg:"内容"
            }
        },
        methods:{
            getElementHandel(){
                console.log(this.$refs.container.innerHTML="HAHAHHA");
            }
        }
        
    }  
</script>