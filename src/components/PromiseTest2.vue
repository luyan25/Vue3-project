
<template>
    <!-- <p v-for="(item) of data" :key="data.id">{{ item.name }}</p> -->
    <!-- <p v-if="loading">loading......</p> -->
    <p>请耐心等待3s</p>
    
</template>

<script>
    export default{
        data(){
            return{
                data:null,
                loading:false,
                error:null
                
            }
        },
        created(){
            this.fun()
        },
        
        methods:{
           drive(){
            setTimeout(() => {
                
            }, 2000);
           },
           shopping(){
            setTimeout(() => {
                fn();
            }, 1000);
           },
           fun(){
            this.drive(()=>{
                console.log("正在开车")
            })
           }
        }
    }
</script>