document.write("<h3> EXAMPLE OF HIGH ORDER FUNCTION")


function one(){
  document.write("<br>Hello...")
}
function two(arg){
  arg()
  arg()
}
two(one)


const n = [1, 20, 3,4,5,6,7,8,9];
document.write("<br><br>Number : ",n)

const squar = n.map(n => n * n);
document.write("<br><br>Map Function : ",squar)


const even = n.filter(num => num % 2 === 0);
document.write("<br>Filtter Function : ",even)


document.write("<br>ForEach : ")
n.forEach((num) => document.write(" ",num * 2));
            
const sum = n.reduce((total, num) => {
    return total + num;
  }, 0);
  
document.write("<br>Total Using Reduce : ",sum)
  

const f = n.find(num => num % 2 === 0)
document.write("<br>Find : ",f)



const n2=[11,20,-4,30,300]
document.write("<br><br> Number : ",n2)
const somedemo = n2.some(num => num % 2 === 0)
document.write("<br> Some : ",somedemo)

const everydemo = n2.every(num => num > 0);
document.write("<br> Every : ",everydemo)


document.write("<h2><br><br>Advance technique</h2><h3>")

const double = x => x * 2
const square = x => x * x
const compose = (f, g) => x => f(g(x))
const doublesquare = compose(square, double)
document.write("Function Composition",doublesquare(3))


const mul = a => b => a * b
const dou = mul(2)
document.write("<br>Currying : ",dou(5))


function customMap(arr, callbak) {
    const result = [];
  
    for (let i = 0; i < arr.length; i++) {
      result.push(callbak(arr[i]));
    }
  
    return result;
}
  
document.write("<br><br> Make Custome MAP : ",customMap(n, x => x * 3));
  
