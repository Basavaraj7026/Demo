// // let abbc=10;
// // console(abbc)



// // function general(cb,inf){

// // for(let i=0;i<10;i++)
// // if(cb(i))
// // {
// //     console.log(inf+i);
// // }
// // }

// // function checkOdd(y){

// // return y%2!=0;
// // }

// // function checkEven(x){
// //     return x%2==0;
// // }

// // general(checkEven,"Even")
// // general(checkOdd,"Odd")


// function para(){
// var a=20;

// console.log(a);
// console.log("i am parent");

// function child(){

// console.log("i am a child");

// function grandchild(){
// console.log("i am grandchild");

// }
// // grandchild();
// }
// // child ();
// }
// para();

// var std={

// name:"vikram";
// regular:function(){

//     console.log(this.name1);
//     console.log(std.name1);
// },

// arrow1:(){

// }

// }

// name(){
    
// }

// var fruits=["apple", "orange", ",black", ",mango", "banana"]
// var num=[1,2,3,4,5,6,7,8,9,10];
// num[9]=11;
// num[10]=12;
// num[11]=13;
// num[12]=14;
// console.log(num);
// console.log(num[1])

// var mix=[1,true,undefined,40n,null,NaN,function(){console.log("i am function"),[100,200,300,400,500]}]
// console.log(mix);

// for(let i=0;i<num.length;i++){
//     console.log(num[i]);
// }
// mix[6]()

// var arr=[100,200,300,500,600,700,800,900]
// arr[4]=16;
// arr.push(1000,2000,3000,4000)
// console.log(arr);
// arr.pop()
// console.log(arr);
// arr.push("hii","hello")
// console.log(arr);
// arr.unshift(0,1,2,3)
// console.log(arr)
// arr.shift()
// console.log(arr)

// console.log(arr.length)

// var ans=[];
// for(var i=0; i<3; i++){
// ans.push(arr[i]);
// }
// console.log((ans));


// console.log(arr.splice(1,2,"hii","helloworld"));
// console.log(arr);
// console.log(arr.splice(1,0,"hii","helloworld"));
// console.log(arr);

var arr=[12,14,76,56,54,98,35,40];
var forAns=arr.forEach((el,inde,arr)=>{
return Math.pow(inde,2);
});
console.log(forAns)
// Math.pow()

var ans=arr.map((el,inde,arr)=>{
return Math.pow(inde,2);
})
console.log(ans)

var ansFilter=arr.filter((el,inde,arr)=>{
  return el>18;  
});
console.log(ansFilter)

var ansMap=ansFilter.map((el,inde,arr)=>{
 
    if(el>60){
        return 2000
    }
    
    else{
        return 1000;
    }
})
console.log(ansMap)

var reduceAns=ansMap.reduce((acc,el,ind,arr)=>{

    console.log(acc,el,ind+"\n")
    return acc+el;
},0)
console.log("Total sum of Array elements"+reduceAns+"\n")