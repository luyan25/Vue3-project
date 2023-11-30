<template>
    <p><b>数组变化侦听</b></p>
    <button @click="addList()">点我添加</button>
    <button @click="popList()">点我删除</button>
    <button @click="concatList()">点我合并</button>
    <ul>
        <li v-for="(item,index) of name" :key="index">{{ item }}</li>
    </ul>
    <ul>
        <li v-for="(items,index) of age" :key="index">{{ items }}</li>
    </ul>

    </template>
    
    <script>    
        export default{
            data(){
                return{
                    count:0,
                    name:["卢岩","三维模型","星络"],
                    age:["23","24","25"]
                }
            },
            methods:{
                addList(){
                    this.name.push("sakura")
                },
                popList(){
                    this.name.pop()
                },
                concatList(){
                    this.name=this.name.concat(this.age)
                }

            }
        }
        
    
    </script>