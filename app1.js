//DOM: chp 58-67//
//i. Get element of id “main-content” and assign them in a variable.
var vari=document.getElementById("main-content");
//ii. Display all child elements of “main-content” element.
console.log(vari);
console.log(vari.childNodes);
//iii. Get all elements of class “render” and show their innerHTML

//var render=document.getElementById("main-content").getElementsByClassName("render");//pore 5 tags aegy isse div k jink class render hai
//var render=document.getElementById("main-content").getElementsByClassName("render").length;//5 return krega number of tags

var render=document.getElementById("main-content").getElementsByClassName("render")[0].innerHTML;//value dega tags ki index dena prega
console.log(render);
render=document.getElementById("main-content").getElementsByClassName("render")[1].innerHTML;
console.log(render);
render=document.getElementById("main-content").getElementsByClassName("render")[2].innerHTML;
console.log(render);
render=document.getElementById("main-content").getElementsByClassName("render")[3].innerHTML;
console.log(render);
render=document.getElementById("main-content").getElementsByClassName("render")[4].innerHTML;
console.log(render);
//iv. Fill input value whose element id first-name using javascript.
document.getElementById("first-name").value="sabahat";
//v. Repeat part iv for id ”last-name” and “email”.
document.getElementById("last-name").value="sabir khan";
document.getElementById("email").value="xyz12@hotmail.com";
//2. use HTML code of question 1 and show the result on browser.
//i. What is node type of element having id “form-content”.
var node_type=document.getElementById("form-content").nodeType;//1 is for any element and 3 is for junkfact
console.log(node_type);
//ii. Show node type of element having id “lastName” and its child node.
node_type=document.getElementById("lastName").nodeType;
console.log(node_type);
var child=document.getElementById("lastName").childNodes[0];
console.log(child);
//iii. Update child node of element having id “lastName”.
console.log(document.getElementById("lastName").childNodes[0].nodeValue = "Last Name: school");//node pkra phir uski value pkr k chng krdi




//iv. Get First and last child of id “main-content”.

    var getFirstChild=document.getElementById("main-content").firstChild;
   console.log(getFirstChild);
   var getlastChild=document.getElementById("main-content").lastChild;
   console.log(getlastChild);


//v. Get next and previous siblings of id “lastName”.
console.log(document.getElementById("lastName").previousSibling);
console.log(document.getElementById("lastName").nextSibling);

//vi. Get parent node and node type of element having id “email”
console.log(document.getElementById("email").nodeType);
console.log(document.getElementById("email").parentNode);
