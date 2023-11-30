
export let a=[
    { id: 1, name: 'Item 4' },
    { id: 2, name: 'Item 5' },
    { id: 3, name: 'Item 6' },
     ];
export let b=[
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
         ];
export function fetchData(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
                resolve(a)
                 console.log(a);
        }
        ,ms )
    })
   }

export function fetchData1(ms){
    setTimeout(()=>{
        
         console.log(b);
}
,ms )
   }