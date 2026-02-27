let arr=[10,20,30,40]
document.write("<br><h3> Array : ",arr)

arr.push(50)
document.write("<br> ADD 50 last :",arr)

arr.shift()
document.write("<br> remove first :",arr)

let sum = arr.reduce((a,b)=>a+b ,0)
document.write("<br>Total sum :",sum)

document.write("<br> Array Into List :",arr.join(" - "))

arr.push(21,33,41,60)
document.write("<br><br>Current Array :",arr)
let even = arr.filter(n => n % 2==0 )
document.write("<br>Even Number :",even)

let dou = arr.map(n => n*2)
document.write("<br>Double all numbers:",dou)

let check= arr.every(n => n > 5)
document.write("<br>Find all > 5 :",check)

let finding=arr.find(n=> n>50)
document.write("<br>Find first number greater than 10:",finding )

let removing = arr.splice(1,2)
document.write("<br>Remove 2 elements starting from index 1:",arr)

let sorting= arr.sort()
document.write("<br> Sort Array : ",sorting)

document.write("<br> [1] Max number :",sorting[sorting.length-1])

let a=Math.max(...arr)
document.write("<br> [2] Max number : ",a)

document.write("<br><br>String Methods.....")
let str="   Hello From JavaScript   "
document.write("<br>String :",str)

document.write("<br>UpperCase :",str.toUpperCase())
document.write("<br>Without Trim Length :",str.length)
document.write("<br>With Trim Length :",str.trim().length)

document.write("<br> Contains specific : ",str.includes("From"))
