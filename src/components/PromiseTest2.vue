
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
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve("我在开车呢")
            }, 2000);
                
            })
           
           },
           shopping(){
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve("我逛商场")
            }, 1000);
                
            })
           
           },
           fun(){
            this.drive().then((data)=>{
                console.log(data)
                return this.shopping()
            }).then((data)=>{
                console.log(data)
            })
           }
        }
    }
</script>