let arr = [12]
let a=new Array(1,2,3,4,5)

document.write("<h3>First Array :",arr)
document.write("<br>Second Array :",a)
document.write("<h3>Type of array : ",typeof(arr))
document.write("<br>Length : ",arr.length)

let res=arr.concat(a)
document.write("<br><br>Concat : ",res)
document.write("<br>join : ",res.join(" @ "))

document.write("<br><br>push : ",arr.push(20,100,210,11,2.0,23,"a","b"))
document.write("<br>unshift() : ",arr.unshift("ankesh"))
document.write("<br>After push and unshift : ",arr)

document.write("<br><br>pop : ",arr.pop())
document.write("<br>shift : ",arr.shift())
document.write("<br>After pop and shift : ",arr.toString())

document.write("<br><br>toLocaleString : ",arr.toLocaleString())
document.write("<br><br>Every : ",arr.every( n => n < 21))


document.write("<br><br>map with function(add 5) : ",arr.map(
    function (n){
        return n +5
    }
))
document.write("<br>map with Arrow function(add 10) : ",arr.map(a =>a+10))


document.write("<br><br>filter with function : ",arr.filter( 
    function(a){
        return a % 2 == 1
    }
))
document.write("<br>filter with arrow : ",arr.filter( n => n% 2===0))

document.write("<br><br>Array : ",arr)
document.write("<br>find with function (val < 11): ",arr.find(
    function (f){
        return f < 11
    }
))                   

document.write("<br>find with arrow function (val < 15) : ",arr.find(n => n <15))