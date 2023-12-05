export default function reverseArray(arr) {
    const reversedArr = arr.slice().reverse();
    const filteredNumbers = reversedArr.filter(reversedArr => reversedArr !== 2);
    const rs =[]
    for(let key of filteredNumbers){
         rs.push(key)
    }   
   return rs
  }