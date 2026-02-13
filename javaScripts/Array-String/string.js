const str = " JavaScript String Program     ";

document.write("<h3>Original String: " + str + "<br>");

document.write("<br>Find in specific index: " + str.charAt(2) + "<br>");

document.write("Length : " + str.length + "<br>");

document.write("Character Code : " + str.charCodeAt(2) + "<br>");

document.write("<br>Slice (1,5) : " + str.slice(1,5) + "<br>");

document.write("subStr (2,19) : " + str.substr(2,19) + "<br>");

document.write("subString (6,14) : " + str.substring(6,14) + "<br>");

document.write("<br>Replace : " + str.replace("Program","Programs") + "<br>");

document.write("<br>UpperCase : " + str.toUpperCase() + "<br>");

document.write("LowerCase : " + str.toLowerCase() + "<br>");

document.write("<br>Repeat : " + str.repeat(2) + "<br>");

document.write("<br>Includes : "+str.includes("Java")+"<br>")

let demo = str.trim();
document.write("<br>Without Trim, length: " + str.length + "<br>");
document.write("With Trim, length: " + demo.length + "<br>");


document.write("<br>Splite : "+str.split(" "))


let mystring="  This\nis  the    program for            understand\nthe          String          method like split\nreplace etc.          "
console.log({mystring});
document.write("<br>Split : "+mystring.toLowerCase().trim().split(/\s+/).join(" "))
 
const s1="for Understand"
document.write("<br>Concat : "+str.concat(s1))
