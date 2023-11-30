<template>
    <p :class="{'active':isactive,'text-danger':haserror}">Class样式绑定1</p>
    <p :class="[arrActive,arrHasError]">Class样式绑定2</p>
    <p :class="ClassBin">Class样式绑定3</p>
    <p :class="[isactive ? 'active':'haserror']">Class样式绑定4</p>
    <p :class="[isactive1,{'text-danger':haserror1}]">Class样式绑定5</p>
</template>
 
 <script>
     export default{
         data(){
             return{
                isactive1:false,
                isactive:true,
                haserror:false,
                haserror1:true,
                ClassBin:{
                    'active':true,
                    'text-danger':false
                    
                },
                arrActive:"active",
                arrHasError:"text-danger"
             }
         }   
     }
 
 </script>

 <style>
        .active{
            font-size: 30px;
            color: brown;
        }
        .text-danger{
            font-size: 30px;
            color: rgb(42, 165, 95);
        }
</style>