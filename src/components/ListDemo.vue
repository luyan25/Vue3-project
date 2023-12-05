<template>    
   <p v-for="(item,index) of test.names" :key="index">{{ item }}</p>
    <button @click="fun">点我</button>
</template>

<script>
import reverseArray from '../fengzhuang/reversesTest'
    export default{
        data(){
            return{
                test:{
                    names:["卢岩","三维模型","星络",2]
                }
            }
        },
        computed:{
            reverses(){
                return this.test.names.slice().reverse();
            }
        },
        
        methods:{
           fun(){
            console.log(reverseArray(this.test.names)); 
            this.test.names = reverseArray(this.test.names)
           }
           
        }
        
    }
</script>