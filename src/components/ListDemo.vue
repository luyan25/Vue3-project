<template>
    <!-- <p>列表渲染</p> -->
    <!-- <p v-for="item in name">{{ item }}</p> -->
    
    <p v-for="(items,key,index) in test.names">{{ items }}</p>
    
</template>

<script>
    export default{
        data(){
            return{
                name:["卢岩","三维模型","星络"],
                test:{
                    id:"luyan",
                    age:18,
                    address:"jiangsu",
                    names:["卢岩","三维模型","星络"]
                }
            }
        }
        
    }
</script>