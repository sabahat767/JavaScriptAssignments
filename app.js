
//chp 38-42
//1.Write a custom function power ( a, b ), to calculate the value of a raised to b.
function power(val1,val2)
{
   val1=document.getElementById("val1").value;
  val2=document.getElementById("val2").value;
  var result=document.getElementById("result");
  var output=Math.pow(val1,val2);
result.innerHTML=output;


}
//2.Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not.
function leapYear()
{
  var Year=document.getElementById("Year").value;
  var leapYear=document.getElementById("leapYear");
  if((Year%4==0)&&(Year%100!=0)||(Year%400==0))
  {
    leapYear.innerHTML="entered year is a leap year";
  }
  else{
    leapYear.innerHTML="entered year is not a leap year";

  }
}
//3.If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by
//area = S(S − a)(S − b)(S − c)
//where, S = ( a + b + c ) / 2
//Calculate area of triangle using 2 functions
function areaOfTriangle(a,b,c)
{
   a=document.getElementById("a").value;
   
 b=document.getElementById("b").value;
  c=document.getElementById("c").value;
  var showresult=document.getElementById("p2");
var side1=parseInt(a);//input ki value by default string hoti h islye covert.toInt krae 
var side2=parseInt(b);
var side3=parseInt(c);
    var output;
  function secondFunction()
  {
   
    var s=(side1+side2+side3)/2;
 
  output=s*(s-a)*(s-b)*(s-c);
  
  }
  
  secondFunction();
 showresult.innerHTML="area of triangle is "+output;
}
//4.Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these
//marks. there should be 3 functions one is the mainFunction and other are for average and percentage. Call those functions from mainFunction and display result in mainFunction.
function std_data(sub1,sub2,sub3)
{
  sub1=document.getElementById("sub1").value;
  sub2=document.getElementById("sub2").value;
  sub3=document.getElementById("sub3").value;
  subject1=parseInt(sub1);
  subject2=parseInt(sub2);
  subject3=parseInt(sub3);

  var showresult=document.getElementById("p3");
var obtn_mrks;
  var aver;
  var percent;
  
  function percentage()
  {
    obtn_mrks=subject1+subject2+subject3;
    percent=(obtn_mrks/300)*100;
    
  }
  function average()
    {
      aver=(subject1+subject2+subject3)/3;
    }
    average();
    percentage();
    showresult.innerHTML="average is: "+aver+"<br>"+"percentage of student is "+percent;
}
//5.You have learned the function indexOf. Code your own custom function that will perform the same functionality. You can code for single character as of now.
function indexof()
{
  var str=document.getElementById("str1").value;
  var chr=document.getElementById("chr").value;
  var indexoff=str.split('');
  for(var i=0 ; i<=indexoff.length-1;i++)
  {
    if(chr==indexoff[i])
    {
      alert(i);
    }
  }
}
//6.Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long.
function remove_vowel(str) {
  str=document.getElementById("str").value;
 var result=str.replace(/[aeiou]/gi, '');
 document.getElementById("p4").innerHTML=result;
}
//7.Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text. For example, in the sentence
function vowelOcu()
{
  var sent=document.getElementById("sentence").value;

}
//8. The distance between two cities (in km.) is input through the keyboard. Write four functions to convert and print this distance in meters, feet, inches and centimeters.
function distance(dist)
{
  dist=document.getElementById("dis").value;
  var distance=parseInt(dist);
  var meter,centimeter,feet,inches;
  function meters()
  {
     meter=distance*1000;
     document.getElementById("p7").innerHTML="meters: "+meter+" m <br>";
  }
  function centim()
   {
     centimeter=distance*100000;
     document.getElementById("p7").innerHTML+="centimeters: "+centimeter+" cm <br>";
     
   }
  
   function feets()
  {
    feet=distance*3280.84;
    document.getElementById("p7").innerHTML+= "feets: "+feet+" ft <br>";
  }
 function inch()
   {
     inches=distance*39370.1;
     document.getElementById("p7").innerHTML+=" inches: "+inches+" inch";
   }
 // document.getElementById("p7").innerHTML="meters: "+meter+"<br> centimeters: "+centimeter+"<br> feets: "+feet+"<br> inches: "+inches;
//console.log(typeof(distance));
meters();
centim();
feets();
 inch();

}
//9.Write a program to calculate overtime pay of employees. Overtime is paid at the rate of Rs. 12.00 per hour for every hour worked above 40 hours. Assume that employees do not work for fractional part of an hour.

function extraPay()
{
  var working_hours=prompt("enter total hours you worked");
 
  if(working_hours>40)
  {
      var over_time = working_hours - 40;
      var over_time_pay = over_time * 12.00;
     var op=parseInt(over_time_pay);
     alert(" overtime pay is "+ op);
  }
  else
      alert("You have to work for more than 40 hours to get over time pay");
}
//10. A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through the keyboard in hundreds, find the total number of currency notes of each denomination the cashier will have to give to the withdrawer.

function currency()
{
  var amount=prompt("enter currency");
  var hundred,fifty,ten;
  if (amount / 10)
  {
   hundred = amount / 100;
   amount = amount % 100;
   var a=parseInt(hundred);
   fifty = amount / 50;
   var b=parseInt(fifty);
   amount = amount % 50;
   ten = amount / 10;
   var c=parseInt(ten);
   //coins = amount % 10;
alert("You will have "+a+" hundreds nootes "+b+" fifty notes "+c+" ten notes ");
}
}
//chp 43-48//
//1. Show an alert box on click on a link.
function alertBox()
{
    alert("welcome");
}
//2.Display some Mobile images in browser. On click on an image Show the message in alert to user.
function alertimg()
{
    alert("Thanks for purchasing a phone from us");
}
//3.Display 10 student records in table and each row should contain a delete button. If you click on a button to delete a record, entire row should be deleted.
function deleterow(r) {
    var i = r.parentNode.parentNode.rowIndex;
  
    document.getElementById("myTable").deleteRow(i);
  }
  //4.Display an image in browser. Change the picture on mouseover and set the first picture on mouseout.
  function rollover(my_image)
  {

      my_image.src ="images/mob3.jpg";

  }
  function rollaway(my_image)
  {
    my_image.src="images/mob2.jpg";
  }
//   function rollmove(my_image)
//   {
// my_image.src="images/mob.jpg";
//   }
//5.Show a counter in browser. Counter should increase on click on increase button and decrease on click on decrease button. And show updated counter value in browser.

 function inc() {
    var inc = document.getElementById("value");
   var b=inc.value++;
   console.log(b); 
}
function dec()
{
  var dec=document.getElementById("value");
  var b=dec.value--;
  console.log(dec);
}
function reset()
{
  var val=document.getElementById("value");
  val.value="0";
}

//chp 49-52//
//1.Create a signup form and display form data in your web page on submission.
function signup()
{
  var email=document.getElementById("email").value;
  var password=document.getElementById("pass").value;
//console.log(email)
 document.write("email is: "+email+"<br> password is "+password);
 
}

//document.write(txt);

//2.Suppose in your webpage there is content area in which you have entered your item details, but user can only see some details on first look. When user clicks on “Read more” button, full detail of that particular item will be displayed.
function details()
{
  var text=document.getElementById("text");
  var more="- Moondust is the ultimate highlighting shade for the lids, inner corner of the eye, or on the cheekbones for an extra glow <br>- Metallic shadows might show an uneven surface due to back-injection production methods, which ensures maximum pigment and a creamy texture."
text.innerHTML+=more;

}
//3. In previous assignment you have created a tabular data using javascript. Let’s modify that. Create a form which takes student’s details and show each student detail in
//table. Each row of table must contain a delete button and an edit button. On click on delete button entire row should be deleted. On click on edit button, a hidden form will
//appear with the values of that row.

function edit_btn()//ye sirf row ki values utha k feilds m lara hai
{
   var form=document.getElementById("studentForm");
form.style.visibility="visible";
var table=document.getElementById("Table"),rowIndex;//getting table by id
for (var i=0;i<table.rows.length;i++)
{
  table.rows[i].onclick=function()
  {
    rowIndex=this.rowIndex;
    document.getElementById("rollno").value=this.cells[0].innerHTML;
    document.getElementById("studentName").value=this.cells[1].innerHTML;
    document.getElementById("studentClass").value=this.cells[2].innerHTML;

  }
}
}
function edit()
 {
  var table=document.getElementById("Table");//get table by id

   var rollno=document.getElementById("rollno").value;
   var studentName=document.getElementById("studentName").value;
   var studentClass=document.getElementById("studentClass").value;
   table.rows[this.rowIndex].cells[0].innerHTML=rollno;
   table.rows[this.rowIndex].cells[1].innerHTML=studentName;
   table.rows[this.rowIndex].cells[2].innerHTML=studentClass;
console.log(studentClass)


}

function addROw()
{
  var rollno=document.getElementById("rollno").value;//get feilds values
  var studentName=document.getElementById("studentName").value;
  var studentClass=document.getElementById("studentClass").value;
  
  var table=document.getElementById("Table").insertRow(1);//get table by id
  //var newrow=table.insertRow(0);//insert new row
  var cell1=table.insertCell(0);
  var cell2=table.insertCell(1);//insert cells in new row
  var cell3=table.insertCell(2);
  var cell4=table.insertCell(3);
  
  cell1.innerHTML=rollno;//set feild values to new row cells 
  cell2.innerHTML=studentName;
  cell3.innerHTML=studentClass;
  var btn=document.createElement("button");
  button.setAttribute('type', 'button');
  button.setAttribute('value', 'Read Table Data');
  button.setAttribute('onclick', 'deleteRow(this)');
  document.body.appendChild(table);
  var cell5=table.insertCell(3).appendChild(button);

  //edit_btn();
}

function deleteRow(r) {
  var i = r.parentNode.parentNode.rowIndex;

  document.getElementById("Table").deleteRow(i);
}
//chp-52-57
//1. create images modal
var modalElement=document.querySelector(".modal");
var modalImage=document.querySelector(".modalImage");
Array.from(document.querySelectorAll(".ImgThumbnail")).forEach(item=>{
item.addEventListener("click",event=>{
  modalElement.style.display="block";
  modalImage.src=event.target.src;
});

});
document.querySelector(".close").addEventListener("click",()=>{
  modalElement.style.display="none";
});

//q:2 on each click of zomm+ button increase size of para font and on each click of zoom- button dec sixe of para font
function increaseFontSize(id, increaseFactor){
    txt = document.getElementById(id);
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize + increaseFactor) + 'px';
}

