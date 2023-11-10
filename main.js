
//#1
for(let i = 10 ;i<= 20 ;i ++){
    console.log('#1' , i+',')
}
//#2
for(let i = 10; i< 20; i++){
    console.log('#2' , i**2)
}


//#3
for(let i = 0 ; i<= 10;i++){
    b =i*7
    console.log('#3' , b)
}
//#4
let sum = 0
for (let i = 1; i <= 15; i++) {

sum+=i
    
}
console.log('#4' , sum)

//#5
let num = 1;
for (let i = 15; i <= 35; i++) {
    num *= i;
    
}
console.log('#5' , num)
//#6
let res = 0

for(let i = 1 ; i < 500 ; i ++){
    res += i
    
  
}
console.log('#6' , res/500)
//#7
for (let i = 30 ; i<= 80; i ++){

    console.log('#7' , i++)
}
//#8
for(let i = 100; i<= 200 ; i++){

    if(i%3 === 0){

        console.log('#8' , i)
    }

}
//#9
for(let i = 0 ; i <= 9 ; i ++ ){

    if(8 % i === 0){
        console.log('#9' , i)
    }
}
//#10
for(let i = 0 ; i <= 9 ; i ++ ){

    if(8 % i === 0 && i !== 1){
        console.log('#10' , i)
    }
}
//#11
let sum1 = 0

for(let i = 0 ; i <= 9 ; i ++ ){
    
    if(8 % i === 0 && i !== 1){
        sum1 += i
      
    }
}
console.log('#11' , sum1)

//#12 
for(let i = 1 ; i<= 10;i++){
    
    console.log('#12' , i*10)
}