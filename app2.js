//chp #01//
function welcome()
{
    alert("Welcome");
}

function error()
{
alert("Error!! please enter a valid password");

}
function line_change()
{
    alert("welcome to js land "+ "\n" +  "happy coding!");

}
function welcome1()
{
alert("welcome to js land");
}
function consolee()
{
console.log("Hello.... i can run js from my web browser's console ");
}
//chp #02//
function declaration()
{
    var username;

}
function initialization()
{
    var myName="Sabahat Sabir Khan";

}

function message()
{
    var message="hello world!";
    alert(message);
    
}
function student_bio_data ()
{
 var studentName="Jhone Doe";
var studentAge="15 years old";
var certified="Certified Mobile Application development";
alert(studentName);
alert(studentAge);
alert(certified);
}
function pattern()
{
alert("     PIZZA"+"\n"+"     PIZZ"+"\n"+"     PIZ"+"\n"+"     PI"+"\n"+"     P");
}
function email_print()
{
var email="sabahat12@gmail.com";
alert("My email address is "+""+email);
}
function book()
{


var book="A smarter way to learn JavaScript";
alert("I am trying to learn from book A smarter way to learn JavaScript");
}
function documentt()
{
document.write("Yah! I can write HTML content through javascript");
}
function design()
{
var design="“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ“▬▬▬▬▬▬▬▬▬";
alert(design);
}
//chp #03//
function ageshow()
{
var age=15;
alert("I am "+""+age+""+"years old");
}
//Answer #02//
function birthyear()
{
var birthyear=1999;
document.write("My birth year is "+""+birthyear+"<br>"+"Data type of my declared variable is a number"+"<br>");
}
function onlineClothing()
{
var visitor_name=prompt("Enter Your name");
var product_title=prompt("Enter Product Title");
var quantity=prompt(" how many products do you wants to order ?")
document.write(visitor_name+" "+"ordered"+" "+ quantity+product_title+" "+"on Saba Clothing Store");
}
//chp #04//
function Variable_naming()
{
var num , dash , dollar;
//Answer no 02//
//illegal//
// var 1num;
// var num 1;
// var -num;
// var P2_a&55$;
// var Number;
//legal//
var number;
var visitorName;
var _name;
var $name;
var $_;
document.write("<h1>Rules for naming JS variables</h1>");
document.write("Variables name can only contain , numbers, $, and _.For example:$my_1stvariable"+"<br>"+"Variable name must begin with a letter, $, _.For example:$name, _name or name"+"<br>"+"Variable names are case sensitive"+"<br>"+"Variable names should not be JS keywords");

}
//chp #05//
function sum()
{

var num1=+prompt("Enter 1st number");
var num2=+prompt("Enter 2nd number");
var sum=num1+num2;
document.write("Sum Of "+num1+" and "+num2+" is "+sum+"<br>")
}
function otheroperations()
{
var sub=num2-num1;
document.write("Subtraction Of "+num2+" from "+num1+" is "+sub+"<br>")
var mul=num1*num2;
document.write("Multiplication Of "+num1+" and "+num2+" is "+mul+"<br>")
var div=num1/num2;
document.write("Division Of "+num1+" and "+num2+" is "+div+"<br>")
var mod=num1%num2;
document.write("modulus Of "+num1+" and "+num2+" is "+mod+"<br>")
}
function doAsDirected()
{
var number;
document.write("value of declaration is "+number+"<br>")
number=5;
document.write("Initial value: "+number+"<br>")
number=++number;
document.write("Value after increment is: "+number+"<br>")
number=number+7;
document.write("Value after  addition  is: "+number+"<br>")
number=--number;
document.write("Value after increment is: "+number+"<br>")
number=number%3;
document.write("Reminder is: "+number+"<br>")
}
function total_cost_of_ticket()
{
var ticketPrice=600;
var ticketWantsTobuy=+prompt("how many tickets you want to buy?");
var totalCostOfTickets=ticketPrice*ticketWantsTobuy;
document.write("Total cost to buy "+ticketWantsTobuy+" is "+totalCostOfTickets+"<br>");
}
function multitable()
{
var table_Of=+prompt("Number for multiplication table : ")
for(var i=1; i<=10;i++)
{
    document.write(table_Of+" x "+i+" = "+i*table_Of+"<br>");
}
}
function temp_convertor()
{
var celsius_temp=25;
var  Fahrenheit =(celsius_temp*9/5)+32;
document.write(celsius_temp+" °C is "+Fahrenheit+" °F "+"<br>");
var Fahrenheit_temp=70;
var celsius=(Fahrenheit_temp-32)*5/9;
document.write(Fahrenheit_temp+" °F is "+celsius+" °C "+"<br>");

}
function shoppingCart()
{
    document.write("<h1>Shopping Cart</h1>"+"<br>");
    var Price_of_item1=650;
var Quantity_of_item1=+prompt("enter quanity for item 1 meanwhile its price is 650 ");
var total_cost_for_item1=Price_of_item1*Quantity_of_item1;
var Price_of_item2=100;
var Quantity_of_item2=+prompt("enter quanity for item 2 meanwhile its price is 100 only");
var total_cost_for_item2=Price_of_item2*Quantity_of_item2;

var shipping_charges=100;
var totalCost=total_cost_for_item1+total_cost_for_item2+shipping_charges;
document.write("Price Of item 1 is: "+Price_of_item1+"<br>"+"Quantity Of item 1 is: "+Quantity_of_item1+"<br>"+"Price Of item 2 is: "+Price_of_item2+"<br>"+"Quantity Of item 2 is: "+Quantity_of_item2+"<br>"+"Shipping Charges "+shipping_charges+"<br>");
document.write("Total cost of your order is: "+totalCost+"<br>");
}
function marksheet()
{
    document.write("<h1>Mark Sheets</h1>"+"<br>");
    var totalMarks=980;
var obtainMarks=804;
var percentage=(obtainMarks/totalMarks)*100;
document.write("Total Marks: "+totalMarks+"<br>"+"Obtain Marks: "+obtainMarks+"<br>"+"Percentage: "+percentage+" %"+"<br>");
}
function currencyConvertor()
{
    document.write("<h1>Currency In PKR</h1>"+"<br>");
    var quantity_of_USD_dollar=10;
    var USD_dollar_in_pkr= 104.80; 
    var quantity_of_saudi_riyal=25;
    var Saudi_riyal_in_pkr= 28;
    var totalCurrency=(quantity_of_USD_dollar*USD_dollar_in_pkr)+(quantity_of_saudi_riyal*Saudi_riyal_in_pkr);
    document.write("Total Currency in PKR is: "+totalCurrency+"<br>"); 
}
function outputt()
{
var numb=5;
numb=((numb+5)*10)/2;
document.write("output: "+numb+"<br>");
}
function AgeCalculator()
{
    document.write("<h1>Age Calculator</h1>"+"<br>");
        var currentYear=2020;
        var birthYear=+prompt("Enter Your birth year");
        var age=currentYear-birthYear;
        document.write("Current Year: "+currentYear+"<br>");
        document.write("Birth Year: "+birthYear+"<br>");
        document.write("Your Age: "+age+"<br>");
}
function Geometritizer()
{
    document.write("<h1>Geometritizer</h1>"+"<br>");
    var radius=20;
    var area=3.142*radius*radius;
    var circumference=2*3.142*radius;
    document.write("Radius of circle is: "+radius+"<br>"); 
    document.write("Circumference of circle is: "+circumference+"<br>"); 
document.write("Area of circle is: "+area+"<br>"); 
}
function LifetimeSupplyCalculator()
{
    document.write(" <h1>The Lifetime Supply Calculator</h1>"+"<br>");
        var favSnacks="chocolate chips";
        var myAge=15;
            var maxAge=65;
            var snacksAmount=3; 
            var totalSupply=(snacksAmount * 365) * (maxAge - myAge); 
          document.write("Favourite Snacks: "+favSnacks+"<br>");
          document.write("Current Age: "+myAge+"<br>");
          document.write("Estimated Age: "+maxAge+"<br>");
          document.write("Amount of snack per day: "+snacksAmount+"<br>");
          
document.write("You will need "+totalSupply+" to last you until the ripe old age of "+maxAge);

}
//chp #06-09//
function resultt()
{
document.write("<h3>Answer #01</h3>");
document.write("Result:"+"<br>");
var a=10;
document.write("value of a is: "+a+"<br>");
document.write("........................................."+"<br>");


document.write("value of ++a is: "+ ++a+"<br>");
document.write("Now the value of a is: "+a+"<br>");
document.write("value of a++ is: "+ a++ +"<br>");
document.write("value of a is: "+a+"<br>");
document.write("value of --a is: "+ --a +"<br>");
document.write("value of a is: "+a+"<br>");
document.write("value of a-- is: "+ a-- +"<br>");
document.write("value of a is: "+a+"<br>");
}
function remainingValues()
{
document.write("<h3>Answer #02</h3>");

var b = 2, c = 1; 
var result = --b - --c + ++c + c--; 
document.write("a is: "+b+"<br>");
document.write("b is: "+c+"<br>");
document.write("result is: "+result+"<br>");
}
function greet()
{

var name=prompt("Enter Your Name");
alert("Good Evenning "+name);
}
function table()
{
    var number=+prompt("Enter number for multiplication table");
    if(number=="")
    {
        for(var i=1;i<=10;i++)
    {
        document.write("5 x "+i+"="+i*5+"<br>");
    }
    }
    else
    {
        for(var i=1;i<=10;i++)
        {
        document.write(number+" x "+i+"="+i*number+"<br>");
        }

    }
}
function usertable()
{
    var totalmarks=100;
    var subject1_name=prompt("Enter first subject name");
    var obtn_mrks_subj1=+prompt("Enter first subject marks");
    var subject2_name=prompt("Enter second subject name");
    var obtn_mrks_subj2=+prompt("Enter second subject marks");
    var subject3_name=prompt("Enter third subject name");
    var obtn_mrks_subj3=+prompt("Enter third subject marks");
    var total_obtain=obtn_mrks_subj1+obtn_mrks_subj2+obtn_mrks_subj3;
    var percent1=(obtn_mrks_subj1/totalmarks)*100;
    var percent2=(obtn_mrks_subj2/totalmarks)*100;
    var percent3=(obtn_mrks_subj3/totalmarks)*100;
    var total_percentage=(percent1+percent2+percent3)/3;
    
    var total_marks_for_3subjects=300;
    document.write("<table> <tr><th>Subject</th><th>Total Marks</th><th>Obtain Marks</th><th>Percentage</th></tr><tr><td>"+subject1_name+"</td><td>"+totalmarks+"</td><td>"+obtn_mrks_subj1+"</td><td>"+percent1+"%"+"</td></tr><tr><td>"+subject2_name+"</td><td>"+totalmarks+"</td><td>"+obtn_mrks_subj2+"</td><td>"+percent2+"%"+"</td></tr><tr><td>"+subject3_name+"</td><td>"+totalmarks+"</td><td>"+obtn_mrks_subj3+"</td><td>"+percent3+"%"+"</td></tr><tr><td></td><th>"+total_marks_for_3subjects+"</th><th>"+total_obtain+"</th><th>"+total_percentage+"%"+"</th></tr></table>");


   
}
//chp #09-11//
function a1()
{
    var usercity=prompt("Enter your city name: ");
    if(usercity=="karachi")
    {
        alert("welcome to the city of lights");
    }
}
function a2()
{
 var userGender=prompt("Enter your gender: ");
 if(userGender=="male")
 {
     alert("Good Morning Sir");
 }
 else if(userGender=="female")
 {
     alert(" Good Morning Ma’am");
 }
}
function a3()
{
    var trafficColor=prompt("Enter traffic signal color");
    if(trafficColor=="red")
    {
        alert("must stop");
    }
    else if(trafficColor=="yellow")
    {
        alert("ready to move");
    }
    else if(trafficColor=="green")
    {
        alert("move now");
    }
    else
    {
        alert("enter valid traffic signal color");
    }
}
function a4(){
    var  remainingFuel=+prompt("Enter remaining fuel in the car in litres"); 
    if(remainingFuel< 0.25)
    {
        alert("Please refill the fuel in your car");
    }
}
function a5()
{
    var a = 4; if (++a === 5)
    { 
        alert("given condition for variable a is true");//diplayed//
     } 
     var b = 82;
      if (b++ === 83)
      { 
          alert("given condition for variable b is true"); //not dislayed//
        } 
        var c = 12; 
        if (c++ === 13)
        {
             alert("condition 1 is true");
             } 
             if (c === 13)
             { 
                 alert("condition 2 is true");//true//
                 }
                  if (++c < 14)
                  { 
                      alert("condition 3 is true"); 
                    } 
                    if(c === 14)
                    { 
                        alert("condition 4 is true");//true//
                     } 
                     var materialCost = 20000; 
                     var laborCost = 2000;
                      var totalCost = materialCost + laborCost; 
                      if (totalCost === laborCost + materialCost)
                      { 
                          alert("The cost equals"); //true//
                        } 
                        if
                        ("car" < "cat")
                        { 
                            alert("car is smaller than cat");//true//
                         } 
 
 
                     
 
}
function a6()
{
    document.write("<h2>MARKSHEET</h2>")
  var obtn_marks1=+prompt("Enter marks obtain in 1 subjects");
  var obtn_marks2=+prompt("Enter marks obtain in 2 subjects");
  var obtn_marks3=+prompt("Enter marks obtain in 3 subjects");

  var totalmarks=300;
  var obtain_marks=obtn_marks1+obtn_marks2+obtn_marks3;
  var percent=( obtain_marks/totalmarks)*100;
  document.write("TOTAL MARKS: "+totalmarks+"<br>");
  document.write("OBTAIN MARKS: "+ obtain_marks+"<br>" )
  document.write("Percentage: "+percent+"%"+"<br>");
  if(percent>=80)
  {
      document.write("Grade A-1"+"<br>");
      document.write("Remarks: Excellent"+"<br>");
  }
 else if(percent>=70)
  {
      document.write("Grade A"+"<br>");
      document.write("Remarks: Good"+"<br>");
  }
  else if(percent>=60)
  {
      document.write("Grade B"+"<br>");
      document.write("Remarks: You need to improve"+"<br>");
  }
  else if(percent<60)
  {
      document.write("Fail"+"<br>");
      document.write("Remarks: Sorry"+"<br>");
  }

}
function a7()
{
    var secretNumber=5;
    var guess=+prompt("Guess the secret number");
    if(guess==secretNumber)
    {
        alert("Bingo!!!!");
    }
    else if(guess==1+secretNumber)
    {
        alert("Close enough to the correct answer");
    }
}
function a8()
{
    var num=+prompt("Enter any number: ");
    var reminder=num%3;
    if(reminder==0)
    {
        alert("the number is divisible by 3");
    }
    else
    {
        alert("the number is not divisible by 3");
    }
}
function a9()
{
    var num=+prompt("Enter any number: ");
    var reminder=num%2;
    if(reminder==0)
    {
        alert("the number is even");
    }
    else
    {
        alert("the number is odd");
    }
}
function a10()
{
    var temperature=+prompt("Enter temperature: ");
    if(temperature>40)
    {
        alert("It is too hot outside");
    }
   else if(temperature>30)
    {
        alert("The Weather today is Normal");
    }
   else if(temperature>20)
    {
        alert("Today’s Weather is cool");
    }
   else if(temperature>10)
    {
        alert("OMG! Today’s weather is so Cool");
    }
}
function a11()
{
    var operand1=+prompt("Enter first operand ");
    var operator=prompt("Out of these +,-,*, / & %  enter an operator ");
    var operand2=+prompt("Enter second operand ");
    var sum=operand1+operand2;
    var sub=operand2-operand1;
    var mul=operand1*operand2;
    var div=operand1/operand2;
    var mod=operand1%operand2;
    if(operator=="+")
    {
        alert("Sum is: "+sum);
    }
    else  if(operator=="-")
    {
        alert("Difference is: "+sub);
    }
    else  if(operator=="*")
    {
        alert("Product is: "+mul);
    }
    else  if(operator=="/")
    {
        alert("Qoutient is: "+div);
    }
    else  if(operator=="%")
    {
        alert("Modulus is: "+mod);
    }
}
//chp 12-13
function largerint()
{
    var int1=+prompt("Enter first integer");
    var int2=+prompt("Enter Second integer");
    if(int1>int2)
    {
        alert("larger one:"+int1);
    }
    else if(int1<int2)

    {
        alert("larger one:"+int2);
    }
}
function check_number()
{
    var int=+prompt("Enter any number");
    if(int>0)
    {
        alert("number is positive");
    }
    else if(int<0)
    {
        alert("number is negative");
    }
else  if(int==0)
{
    alert("number is zero");
}
}
function vowel()
{
    character=document.getElementById("atext").value;
   if(character=="")
  {
alert("please enter an aphabet");
  }
    else if(character=="a"||character=="e"||character=="i"||character=="o"||character=="u")
    {
        alert("true");
    }
    else
    {
        alert("false");
    }
}
function password_check()
{
    var password="admin123";
    var input_password=prompt("enter your password");
    if(input_password=="")
    {
        alert("please enter your password");
    }
    else if(input_password==password)
    {
        alert("correct");
    }
    else if(input_password!=password)
    {
        alert("incorrect");
    }
}
function fix_error()
{
    var greeting;
     var hour = 13; 
     if (hour < 18) 
     {
          greeting = "Good day"; 
          alert(greeting);
     }
          else 
          {
          greeting = "Good evening";
          alert(greeting);
         } 
 
 
}
function timeFormat()
{
    var time=+prompt("enter time in 24 hours format ie:1900");
    if(time>=0000 && time<1200)
    {
alert("good morning");
    }
    else if(time>=1200&&time<1700)
    {
        alert("good afternoon");
    }
    else if(time>=1700&&time<2100)
    {
        alert("good evening");
    }
    else if(time>=2100&&time<=2300)
    {
        alert("good night");
    }
}
//chp 14-16//
function declaration_of_array_literal()
{
    var students=[];
}
function declaration_of_array_object()
{
    var students=new students();
}
function declaration_and_initialization_of_array()
{
    var strings_array=["apple","banana","graps"];
    var numbers_array=[23,56,78];
    var boolArray = [true,false];
    var mix_array=["apple",56,true];
}
function array_element()
{
    var qualifications=[" SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
    document.write("<h1> Qualifications</h1> "+"<br>");
    document.write("1) "+qualifications[0]+"<br>");
    document.write("2) "+qualifications[1]+"<br>");
    document.write("3) "+qualifications[2]+"<br>");
    document.write("4) "+qualifications[3]+"<br>");
    document.write("5) "+qualifications[5]+"<br>");
    document.write("6) "+qualifications[6]+"<br>");
    document.write("7) "+qualifications[7]+"<br>");
}
function students_array()
{
    var studentNames=["Michael","John","Tony"];
    var scores=[320,230,480];
    var percent=[];
   
    for (var i=0; i<=2; i++)
    {
        percent[i]=scores[i]/500*100;
     document.write("Score of "+studentNames[i]+" is "+scores[i]+". Percentage: "+percent[i]+"%<br/>");

    }

}
function array_update()
{
    var colors=["Red","Pink","Green","Yellow"];
    document.write("<h1>Colors List:</h1><br/>");
    document.write("Initialized"+"<br><br>");
    for (var i=0 ;i<=3; i++)
    {
        document.write(colors[i]+"<br>");
    }
    var addColor=prompt("which color do you want to add at beginning");
   
    colors.unshift(addColor);
    document.write("<br>Add At Beginning"+"<br><br>");
    for (var i=0 ;i<=colors.length-1; i++)
    {
        document.write(colors[i]+"<br>");
    }
    var add_last=prompt("which color do you want to add at end");
    colors.push(add_last);
    document.write("<br>Add At End"+"<br><br>");
    for (var i=0 ;i<=colors.length-1; i++)
    {
        document.write(colors[i]+"<br>");
    }
    colors.unshift("puple","black");
    document.write("<br>Two More Added At Beginning"+"<br><br>");
    for (var i=0 ;i<=colors.length-1; i++)
    {
        document.write(colors[i]+"<br>");
    }
    colors.shift()
    document.write("<br>Delete first color of array"+"<br><br>");
    for (var i=0 ;i<=colors.length-1; i++)
    {
        document.write(colors[i]+"<br>");
    }
    colors.pop();
    document.write("<br>Delete Last color of array"+"<br><br>");
    for (var i=0 ;i<=colors.length-1; i++)
    {
        document.write(colors[i]+"<br>");
    }
    var index_add=+prompt("At which index do you want to add new color");
    var color_name=prompt("enter that perticular color you want to add to recently defined index");
    colors.splice(index_add,0,color_name);
    document.write("<br>Add color to desire position of array"+"<br><br>");
    for (var i=0 ;i<=colors.length-1; i++)
    {
        document.write(colors[i]+"<br>");
    }
    var dlt_from_where=+prompt("from which index you want to delete the colors")
    var dlt_how_many=+prompt("how many colors do you want to delete");
    colors.splice(dlt_from_where,dlt_how_many);
    document.write("<br>Delete color from desire position of array"+"<br><br>");
    for (var i=0 ;i<=colors.length-1; i++)
    {
        document.write(colors[i]+"<br>");
    }
}
function sort()
{
    var std_scores=[320,230,480,120];
    document.write("Before sorting<br>");
    for (var i=0 ;i<=std_scores.length-1; i++)
    {
        document.write(std_scores[i]+",");
    }
    std_scores.sort();
    document.write("<br><br>After sorting<br>");
    for (var i=0 ;i<=std_scores.length-1; i++)
    {
        document.write(std_scores[i]+",");
    }
}
function copy_elements()
{
    var cities=["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
    document.write("<br><br>Cities List<br>");
    for (var i=0 ;i<=cities.length-1; i++)
    {
        document.write(cities[i]+",");
    }
    var selected_cities= [];
   var selected_cities= cities.slice(2,4);
   document.write("<br><br>Selected Cities List<br>");
   for (var i=0 ;i<=selected_cities.length-1; i++)
   {
       document.write(selected_cities[i]+",");
   }


}
function array_join()
{
    var arr = [ "This",  "is", "my", "cat"];
    document.write("Array:<br>");
    for (var i=0 ;i<=arr.length-1; i++)
    {
        document.write(arr[i]+",");
    } 
    var string=arr.join(" ");
    document.write("<br><br>String: <br>");
  document.write(string);
    
}
function fifo()
{
    var device=["keyboard","mouse","printer","monitor"];
    document.write("Devices:<br>")
    for(var i=0; i<=3; i++)
    {
        
       document.write(device[i]+",");
    }
    document.write("<br>");
    var element1;
    for(var i=0; i<=3; i++)
    {
        var element1= device.shift(device[i]);
        document.write("Out:<br>")
       document.write(element1+"<br>");
    }
}
function lifo()
{
    var device=["keyboard","mouse","printer","monitor"];
    document.write("Devices:<br>")
    for(var i=0; i<=3; i++)
    {
        
       document.write(device[i]+",");
    }
    document.write("<br>");
    var element1;
    for(var i=0; i<=3; i++)
    {
        var element1= device.pop(device[i]);
        document.write("Out:<br>")
       document.write(element1+"<br>");
    }
}
function dropDown()
{
   var mobile_manufactures=["Apple", "Samsung", "Motorola", "Nokia", "Sony" , "Haier"];

   document.write("<select><Option>"+"Mobile Manufactures"+"</Option><Option>"+mobile_manufactures[0]+"</Option><Option>"+mobile_manufactures[1]+"</Option><Option>"+mobile_manufactures[2]+"</Option><Option>"+mobile_manufactures[3]+"</Option><Option>"+mobile_manufactures[4]+"</Option><Option>"+mobile_manufactures[5]+"</Option></select>");
  
}
//chp 17-20
function multi_array()
{
    var myarr=[2,3];
    var number_array=[2,3];
    for(var i=0;i<=2; i++)
    {
        for(var j=0; j<=4; j++)
        {
           document.write(number_array[i,j]=j);
        }
        document.write("<br>");
    }
}
function loop()
{
    for(var i=1; i<=10; i++)
    document.write(i+"<br>");
}
function multiplication_table()
{
var table_Of=+prompt("Number for multiplication table : ");
var j=+prompt("enter multiplication table length");
for(var i=1; i<=j;i++)
{
    document.write(table_Of+" x "+i+" = "+i*table_Of+"<br>");
}
}
function arrayprint()
{
    var fruits=["apple", "banana", "mango", "orange", "strawberry"];
    for(var i=0; i<=fruits.length-1; i++)
    {
        document.write(fruits[i]+"<br>")
    }
    document.write("<br>");
    for(var i=0; i<=fruits.length-1; i++)
    {
        document.write("Element at "+"index ["+i+"] is "+fruits[i]+"<br>")
    }
}
function series()
{document.write("<h3>Counting:</h3><br>")
    for(var i=1; i<=10; i++)
    {
        document.write(i+",")
    }
    document.write("<h3>Reverse Counting:</h3><br>")
    for(var i=10; i>=1; i--)
    {
        document.write(i+",")
    }
    document.write("<h3>Even:</h3><br>")
    for(var i=0; i<=20; i++)
    {
        var reminder=i%2;
        if(reminder==0)
        {
        document.write(i+",");
        }
    
    }
    document.write("<h3>Odd:</h3><br>")
    for(var i=0; i<=20; i++)
    {
        var reminder=i%2;
        if(reminder!=0)
        {
        document.write(i+",");
        }
    
    }
    document.write("<h3>Series:</h3><br>")
    for(var i=1; i<=20; i++)
    {
        var reminder=i%2;
        if(reminder==0)
        {
        document.write(i+"k ,");
        }
    
    }
}
    function search()
    {
        var items=["cake", "apple pie", "cookie", "chips", "patties"];

        var bakry_item=prompt("Welcome to ABCD Bakery.What do you want to order sir/mam?");

      for(var i=0; i<=items.length;  i++ )
         {
             if(items[i]==bakry_item)
             {
                  
                 alert(bakry_item+" is available at index "+i);
               
             }
            
            

            
            
         }
         alert("We are sorry "+bakry_item+" is not available in our bakery");
    }
    function largest_and_smallest_num()
    { 
        var array=[24, 53, 78, 91, 12];
        document.write("<h3>Array items:</h3>");
        for(var i=0; i<=array.length-1; i++)
        {
            document.write(array[i]+",");
        }
      var max=Math.max(24, 53, 78, 91, 12);
        document.write("<h3>Largest Number</h3>");
        document.write(max);
      var min=Math.min(24, 53, 78, 91, 12);
      document.write("<h3>Smallest Number</h3>");
      
      document.write(min);



    }
    function multiples_of_5()
    {

        for(var i=1; i<=100; i++)
        {
            var rem=i%5;
            if(rem==0)
            {
            document.write(i+",");
            }
        }

    }

