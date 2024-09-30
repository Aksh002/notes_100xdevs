const input=[1,2,3,4,5]
const newarr=[]
for (i=0;i<(input.length);i++){
    newarr[i]=input[i]*2;
}
console.log(newarr)
// Given an array and a transformation fxn(which transform array(eg-multiply by 2)), a map is a fxn of an array that applies that transformation fxn on the whole array and transform the data
// It takes transformation fxn as the argument
function transformation(i){
    return i*2;
}
console.log(input.map(transformation))

//another way
console.log(input.map(function(i){
    return i*2;
}))



//                              find
const num=3
const element=input.find(function(i){
    return i==num;
})
console.log(num)