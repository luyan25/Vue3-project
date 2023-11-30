<template>
    <p><b>event事件(原生js)</b></p>
    <button @click="addCount">ADD</button>
    <p @click="pointme(item,$event)" v-for="(item,index) in name" :key="index">{{ item }}</p>
    <!-- <button @click="clearCount">CLEAR</button> -->
    <p>{{ count }}</p>
    </template>
    
    <script>    
        export default{
            data(){
                return{
                    count:0,
                    name:["卢岩","三维模型","星络"]
                }
            },
            methods:{
                addCount(e){
                    e.target.innerHTML = "ADDS" + this.count
                    this.count++
                },pointme(e,ev){
                    console.log(e);
                    console.log(ev);
                }
                
            }
        }
        
    
    </script>