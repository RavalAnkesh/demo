let string="nayan"
document.write("<h3><br>PALINDROME")
let palindrome = value =>{
    let val=value.toString();
    let rev=val.split('').reverse().join('');
    if(val === rev){
        document.write(`<br> ${value}  is Palindrome`)
    }
    else{
        document.write(`<br>${value}  is Not Palindrome`)
    }
}
palindrome("nayan")
palindrome("ram")
palindrome(909090)
palindrome(12221)                                                              


document.write("<br><br>PRIME NUMBER")
let prime = val =>{
    if(val <= 1){
        document.write(`<br>Number ${val} Is Not Prime`)
    }
    for(let i=2;i<=Math.sqrt(val);i++){
        if(val % i == 0){
            document.write(`<br>Number ${val} Is Not Prime`)
            return;
        }
    }
    document.write(`<br>Number ${val} Is Prime`)
}
prime(41)
prime(30)


document.write("<br><br>FACTORIAL")
let n=5
function fact(n1){
    let a = 1
    for(let i=1;i<=n1 ; i++){
        a *= i
    }
    return a;
}
document.write(`<br>Factorial of ${n} is : `,fact(n))

         

document.write("<br><br>FIBONACI<br>")
function fibbo(n){
    let first=0
    let second=1
    
    for(let i=0;i<n;i++){
        document.write(first + " , ")
        let next=  first + second
        first = second
        second = next
    }
}
fibbo(10)


document.write("<br><br>ARMSTRONG NUMBER")
function arm (n){
    let str=n.toString()
    let l=str.length
    let temp = 0;
    
    for(let i=0;i<l;i++){
        temp += Math.pow(Number(str[i]),l)
    }
    if(temp === n){
        document.write(`<br>Number ${n} is Armstrong  `)
    }
    else{
        document.write(`<br>Number ${n} is Not Armstrong  `)
    }
}
arm(55)
arm(1634)

document.write("<br><br>STRONG NUMBER")
let num1=145

function strong(no){
    let str=no.toString()
    let len=str.length
    let temp=0
    let f=1;
    for(let i=0;i<len;i++){
        f=1
        for(j=1;j<=Number(str[i]);j++){
            f *= j
        }
        temp += f
    }
    if(temp === no){
        document.write(`<br>Number ${no} is Stronng `)
    }
    else{
        document.write(`<br>Number ${no} is Not Strong `)
    }
}
strong(num1)
strong(90)


let arr=[20,34,5,22,1,67,21,99,2]
document.write("<h2><br> My Array : ",arr)

document.write("<h3>Sort Array Assending<br>")
function sortassen(no){
    let l = no.length
    let temp

    for(let i=0;i < l;i++){
        for(let j=0 ; j < l-1;j++){
            if(no[j] > no [j+1]){
                temp = no[j]
                no[j] = no[j+1]
                no[j+1] = temp
            }
        }
    }
    return no
}
document.write(sortassen(arr))


document.write("<h3>Sort Array Descending<br>")
function sortdesc(no){
    let l= no.length
    let temp
    for(let i=0;i < l ; i++){
        for(let j=0;j< l-1;j++){
            if(no[j] < no[j+1]){
                temp = no[j]
                no[j] = no[j+1]
                no[j+1] = temp
            }
        }
    }
    return no
}
document.write(sortdesc(arr))



document.write("<br><br>Sum of array  ")
function sum(total){
    return total.reduce((sum,no)=> sum+no,0)
}
document.write("<br>Total Sum Of Array : ",sum(arr))


document.write("<h3>Second Largest Number in an Array")
function secondlarge(a){
    let temp=0;
    let l=a.length
    for(let i=0;i<a.length;i++){
        let high=i;
        for(let j=i+1;j<l;j++){
            if(a[j] >= a[high]){
                high=j
            }
        }
        temp=a[i]
        a[i] = a[high]
        a[high]=temp
    }
    return a[1]
}
document.write("<br>",secondlarge(arr))



let newStr ="Hello World From Me.."
document.write("<h2><br><br>My String:   ",newStr,"<h3>")
document.write("Reverse a String:   ")
function rev(s){
    let s1= s;
    let s2=[];
    for(i = 0;i<s1.length;i++){
         s2.unshift(s1[i])
    }
    document.write(s2.join(" "))
}
document.write("<br>Reverse String:   ")
rev(newStr)



document.write("<br><br>Count The Character ")
function countCharacter(str){
    let l = str.length
    let counting = 1
    for(let i=1;i<l;i++){
        counting ++
    }
    return counting
}
document.write("<br>Total Character :",countCharacter(newStr))


document.write("<br><br>Find The vowel : ")
function vowel(str){
    let vlist=["a","e","i","o","u"]
    let s =vlist.toString()
    let c= 0
    
    for(let i=0;i<=str.length;i++){
        if(vlist.includes(str[i])){
            document.write(str[i]," ")
            c++
        }
    }
    return c
}
document.write("<br>Vowel Count Is :",vowel(newStr))


document.write("<br><br>Find The Duplicate ")
function duplicate(str){
    let temp = "";
    let res =""
    for(let i=0;i<str.length;i++){
        if (res.includes(str[i])){

            if(!temp.includes(str[i])){
                temp += str[i] + " "
            }
        }
        else{
            res +=str[i]
        }
    }
    document.write("<br>New String : ",res)
    document.write("<br>Duplicate Charcter : ",temp)
}
duplicate(newStr)


document.write("<br><br>FIZZ BUZZ PROBLEM")
function fizzbuzz(){
    for(let i=1; si <= 30;i++){
        if(i % 3 == 0 && i % 5 == 0){
            document.write("<br>FIZZBUZZ")
        }
        else if (i % 3 == 0 ){
            document.write("<br>FIZZ")
        }
        else if(i % 5 == 0){
            document.write("<br>BUZZ")
        }
        else{
            document.write("<br>",i)
        }
    }
}
fizzbuzz()
