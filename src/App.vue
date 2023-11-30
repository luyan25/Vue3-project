<script>
import PromiseTest1 from './components/PromiseTest1.vue';
import PromiseTest2 from './components/PromiseTest2.vue';
import ifDemo from './components/ifDemo.vue';
import ListDemo from './components/ListDemo.vue';
import EventDemo1 from './components/EventDemo1.vue'
import EventDemo2 from './components/EventDemo2.vue'
import EventDemo3 from './components/EventDemo3.vue'
import ArrayList from './components/ArrayList.vue'
import ComputedDemo from './components/ComputedDemo.vue'
import ClassBind from './components/ClassBind.vue'
  export default{
    data() {
        return {
            msg: "三维模型",
            rawHTML: "<a href='https://www.baidu.com'>百度</a>"
        };
    },
    components: { ifDemo,ListDemo,EventDemo1,EventDemo2,EventDemo3,ArrayList,ComputedDemo,ClassBind,PromiseTest1,PromiseTest2}
} 
</script>

<template>
    <PromiseTest2 />
    <!-- <ifDemo /> -->
    <!-- <h v-html="rawHTML"></h> -->
    <!-- <EventDemo1/> -->
    <!-- <ListDemo /> -->
    <!-- <EventDemo2 /> -->
    <!-- <EventDemo3 /> -->
    <!-- <ArrayList /> -->
    <!-- <ComputedDemo /> -->
    <!-- <ClassBind /> -->

</template>



