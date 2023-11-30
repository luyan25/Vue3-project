
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
            this.test()
        },
        
        methods:{
           
          eve1(){
            return "我是第一个";
          },
          
          eve2(){
            return new Promise((resolve, reject) => {
                setTimeout(()=>{
                resolve("我是第二个")
            },3000)
            
            })
           
            
          },
          eve3(){
            return "我是第三个";
          },
            async test(){
                console.log(this.eve1());
                console.log(await this.eve2());
                console.log(this.eve3());
                // document.write(<p>ss</p>)
            }
                
               



                // this.loading=true;
                // const fetchDataPromise = new Promise(
                //     (resolve,reject)=>{
                //     setTimeout(()=>{
                // var mockData = [
                // { id: 1, name: 'Item 1' },
                // { id: 2, name: 'Item 2' },
                // { id: 3, name: 'Item 3' },
                // ];
                //      resolve(mockData);
                  
                // },1000);
                // });

                // fetchDataPromise.then(
                //     (dt)=>{
                //     this.data=dt
                //     console.log(dt)
                //     this.loading=false;
                //     }
                // ).catch(
                //     (error)=>{
                //     this.error= 'Error fetching data: ' + error.message;
                //     this.loading = false;
                //     }   
                // ) 

            }
         

           
        }
</script>