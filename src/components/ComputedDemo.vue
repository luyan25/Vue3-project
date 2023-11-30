<template>
   <h1>{{ value1 }}</h1>
   <p>{{ ceshiContend }}</p>
   <button @click="zhi">点我计算长度</button>
   <p>{{ value }}</p>
   <ul>
        <li v-for="(item,index) of content" :key="index" >
            {{ item }}

        </li>
   </ul>
</template>

<script>
    export default{
        data(){
            return{
                value1:"computed计算属性",
                content:["三维模型","pdms","sss"],
                value:0
            }
        },
        //计算属性
        computed:{
            ceshiContend(){
                return this.content.length > 0 ? '对了':'错了'
            }
        },methods:{
            zhi(){
                this.value=this.content.length
            }
        }
    }

</script>