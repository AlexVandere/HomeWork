let b = prompt('ведіть довжину масива')
let a = []
for(let i = 0; i < b ;i++){
 let g = prompt('ведіть індекс ' + i)
 a.push(g)
}
a.splice( 2 , 3)
a.sort(b,a => {
     return a-b
})

alert(a)
console.log()