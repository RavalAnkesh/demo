const language=["html","css","java","javascript","python"];

document.write(language.toString() + "<br>");

document.write("<br>Length Of Array: " + language.length + "<br>");
document.write("Type Of Array: " + typeof language + "<br>");

document.write("<br>Get Single Element<br>");
document.write(language[2] + "<br>");
document.write(language[0] + "<br>");
document.write(language[language.length -1] + "<br>");

document.write("<br>Update Existing Element<br>");
language[2] = "C++";
document.write(language + "<br>");

document.write("<br>Add New In Existing Array<br>");
language.push("PHP");
document.write(language + "<br>");

document.write("<br>Delete element<br>");
language.pop();
document.write(language + "<br>");

document.write("<br><br>JavaScript Methods<br>");
document.write("To String: " + language.toString() + "<br>");
document.write("Length: " + language.length + "<br>");
document.write("Join: " + language.join(' --- ') + "<br>");

language.push("C");
document.write("Push: " + language + "<br>");

language.unshift("react","node");
document.write("Unshift: " + language + "<br>");

language.pop();
document.write("Pop: " + language + "<br>");

language.shift();
document.write("Shift : " + language + "<br>");

language.reverse();
document.write("Reverse: " + language + "<br>");

const demo=["DBMS","OS","SE"];
const result=language.concat(demo);
document.write("<br>New Array: " + demo + "<br>");
document.write("Concat Array: " + result + "<br>");

delete demo[1];
document.write("Delete demo[1]: " + demo + "<br>");

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
document.write("<br> Map Function : ",doubled)
document.write("<br>Map : ",numbers.map(n=>n+10))

document.write("<br><br>Current Array : ",language)
document.write("<br> Slice : ",language.slice(1,5))

document.write("<br>Splice : ",language.splice(1,3))




document.write("<br>.......................................................<br> ")
document.write("<br>String Example.....<br> ")
const str = " Hello World ";

document.write("Original String: `" + str + "`<br>");

document.write("Using Template Literal: Say `" + str + "`<br>");

document.write("<br>Slice (1,5): " + str.slice(1,5) + "<br>");

document.write("subStr (1,7): " + str.substr(1,7) + "<br>");

document.write("subString (6,11): " + str.substring(6,11) + "<br>");

document.write("Replace : " + str.replace("World","Worlds!!!!") + "<br>");

document.write("UpperCase: " + str.toUpperCase() + "<br>");

document.write("LowerCase: " + str.toLowerCase() + "<br>");

let demo1 = str.trim();
document.write("Without Trim, length: " + str.length + "<br>");
document.write("With Trim, length: " + demo1.length + "<br>");
