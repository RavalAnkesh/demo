const nums = [1, 2, 3, 4, 5, 6];

function isEven(num) {
    return num % 2 === 0;
}

const isOdd = num => num % 2 !== 0;

const evenNums = nums.filter(isEven);   
const oddNums = nums.filter(isOdd);     

document.write("<h3>Even Numbers  ", evenNums+"</h3>");
document.write("<h3>Odd Numbers : ", oddNums+"</h3>");




document.write("<br>")

const cart = [
    {name:"TV",price:70000},
    {name:"Fridge",price:45000},
    {name:"mobile",price:25500},
    {name:"AC",price:41800}
]

document.write("<h3>Available Products </h3>");
document.write("<ul>");
for (let i = 0; i < cart.length; i++) {
    document.write("<li>" + cart[i].name + " , " + cart[i].price + "</li>");
}

function carttotal(item){
    let total=0

    for(let i=0;i<item.length;i++){
        total +=item[i].price
    }
    return total
}

document.write(`<br><li>Total Items: ${cart.length}, Total Price: ${carttotal(cart)}</li>`);
document.write("</ul>");



const expensive = cart => cart.filter(item => item.price > 30000);
const demo = expensive(cart);
document.write("<h3>Price more than 30000</h3>");
document.write("<ul>");
for (let i = 0; i < demo.length; i++) {
    document.write(
        "<li style='font-weight:bold'>" +
        demo[i].name + " , " + demo[i].price +
        "</li>"
    );
}
document.write("</ul>");




function addproduct(cart){
    function additem(name,price){
        cart.push({name,price})
        return cart
    }
    return additem
}

const add=addproduct(cart)

add("Laptop",65000)

document.write("<h3>Adding New Product Using (Inner Function)</h3>");
document.write("<ul>");
for (let i = 0; i < cart.length; i++) {
    document.write("<li>" + cart[i].name + " , " + cart[i].price + "</li>");
}
document.write("</ul>");




function removeItem(cart, name) {
    const index = cart.findIndex(item => item.name === name);
    if (index !== -1) cart.splice(index, 1);
    return cart;
}

removeItem(cart, "TV");
document.write("<h3>Delete Item From Cart</h3>");
document.write("<ul>");
for (let i = 0; i < cart.length; i++) {
    document.write("<li>" + cart[i].name + " , " + cart[i].price + "</li>");
}
document.write("</ul>");




function updatePrice(cart, name, newPrice){
    const item = cart.find(item => item.name === name);
    if(item) item.price = newPrice;
    return cart;
}

updatePrice(cart, "Laptop", 69999);
document.write("<h3>update Item From Cart</h3>");
document.write("<ul>");
for (let i = 0; i < cart.length; i++) {
    document.write("<li>" + cart[i].name + " , " + cart[i].price + "</li>");
}
document.write("</ul>");
