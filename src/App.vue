<script>
import PromiseTest1 from './components/PromiseTest1.vue';
import PromiseTest2 from './components/PromiseTest2.vue';
import ListDemo from './components/ListDemo.vue';
import EventDemo1 from './components/EventDemo1.vue'
import EventDemo2 from './components/EventDemo2.vue'
import EventDemo3 from './components/EventDemo3.vue'
import ArrayList from './components/ArrayList.vue'
import ModelDemo from './components/ModelDemo.vue'
import refDemo from './components/refDemo.vue'

  export default{
    data() {
        return {
            msg: "三维模型",
          
        };
    },
    components: { refDemo,ListDemo,EventDemo1,EventDemo2,EventDemo3,ArrayList,PromiseTest1,PromiseTest2,ModelDemo}
} 
</script>

<template>
    <ListDemo/>
    <!-- <EventDemo2 /> -->
    <!-- <EventDemo3 /> -->
    <!-- <ArrayList /> -->
    <!-- <ComputedDemo /> -->
    <!-- <ClassBind /> -->

</template>



