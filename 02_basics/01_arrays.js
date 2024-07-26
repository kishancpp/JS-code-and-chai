// const myKishan = [0,2,5,7,]
// const myKishan2 = new Array(1,5,8,"kishan", true)
// console.log(myKishan2[3])

// //array methods 
// const cgKishan = []
// console.log(cgKishan.length)
// cgKishan.push(1,7,8,9,6)
// console.log(cgKishan.length)
// cgKishan.pop()
// console.log(cgKishan)
const myArr = new Array(1,2,3,4,5,6,7,8,9)
// myArr.unshift(3)
// myArr.shift()
// console.log(myArr.includes(9))
// console.log(myArr.indexOf(6))
const newArr = myArr.join() // convert array into strings 1,2,3,4,5,6,7,8,9
// console.log(newArr)

console.log("A", myArr)

const mya1 = myArr.slice(1,3)
console.log(mya1)

console.log("B", myArr)
const mya2 = myArr.splice(1,3)
console.log(mya2)

console.log("C", myArr)