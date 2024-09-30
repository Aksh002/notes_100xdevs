const input = [1,2,3,4,5]

const newarr=[]
for(let i=0;i<(input.length);i++){
    if (input[i]%2==0)
        newarr.push(input[i])
}
console.log(newarr)

//                  FILTER
// Its an array fxn which takes filterlogic fxn as arg and filter the array acc to the filter array
function filterlogic(i){
    if (i%2==0)
        return true
    else 
        return false
}
console.log(input.filter(filterlogic))


//                  Startswith
n="Akshit"
console.log(n.startsWith("A"))