<template>
<p><b>事件修饰符</b></p>
<a @click.prevent="eventtest" href="https://www.baidu.com">百度一下</a>
<p>{{ name.split("") }}</p>
<div @click="cp">
    <p @click.stop="cs">
        测试冒泡
    </p>
</div>
</template>

<script>    
    export default{
        data(){
            return{
                name:"我的名字是卢岩哈哈哈哈"
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
            },
            eventtest(e){
                // e.preventDefault();
                console.log("point");
            },
            cp(){
                console.log("我是父");
            },
            cs(){
                console.log("我是子");
            }
        }
    }
    

</script>