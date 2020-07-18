              /*************************************<h1>Assignment 26-30</h1>*****************************************************/

// Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.
function ans1()
{
    var firstName=prompt("Enter First Name:");
    var lastName=prompt("Enter Last Name:");
    var fullName=firstName+" "+lastName;
    alert("Welcome "+fullName);
}
// Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser
function ans2()
{
    var str=prompt("Enter your favorite mobile phone model:");
    str=str.toUpperCase();
    var length=str.length;
    document.write("My favorite mobile phone model is: "+str+"<br>"+"Length of string is: "+length);
}
// Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .
function ans3()
{
    var word="Pakistani";
    for(var i=0; i<word.length ;i++)
    {
        if(word[i]==="n")
        {
            document.write("String: "+word+"<br> index of 'n' is: "+i);
        }
    }
}
// Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.
function ans4()
 {
 var message="Hello World";
 var n=message.lastIndexOf("l",message.length-1);
 document.write("String: "+message+"<br>"+"Last index of 'l' is: "+n);
} 
//Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.
function ans5()
{
    var word="Pakistani";
    for(var i=0; i<=3 ;i++)
    {
        if(i==3)
        {
            document.write("String: "+word+"<br> Character at index 3 is:"+word[i]);
        }
    }
} 
//Repeat Q1 using string concat() method.
function ans6()
{
    var firstName=prompt("Enter First Name:");
    var lastName=prompt("Enter Last Name:");
    firstName=firstName.concat(" "+lastName);
    alert("Welcome "+firstName);
}
//Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.
function ans7()
{
   var  s1="Hyderabad";  
var replaceString=s1.replace("Hyderabad","Islamabad");
document.write("City: "+s1+"<br> After Replacement: "+replaceString);
    
}
//Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
function ans8()
{
   var  s2="Ali and Sami are best friends. They play cricket and football together";  
var replace_string=s2.replace(/and/gi,"&");
document.write("Message: "+s2+"<br> After Replacement: "+replace_string);
    
}
//Write a program that converts a string “472” to a number 472. Display the values & types in your browser.
function ans9()
{
    var st="472";
    var n=parseInt(st);
    document.write("Value: "+st+"<br> Type: "+typeof(st)+"<br> Value: "+st+"<br> Type: "+typeof(n));
 
}
//Write a program that takes user input. Convert and show the input in capital letters.
function ans10()
{
    var input=prompt("Enter any Dry Fruit name");
    var upprcase=input.toUpperCase();
    document.write("User input: "+input+"<br> Upper Case: "+upprcase);

}
//Write a program that takes user input. Convert and show the input in title case.
function ans11()
 {
    var str=prompt("enter any string");
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
   alert(str.join(' '));
  
  }
  //Write a program that converts the variable num to string. var num = 35.36 ; Remove the dot to display “3536” display in your browser.
  function ans12()
  {
    var a = 35.36;
    var b = a.toString();
   var c=b.replace(".","");
    document.write("NUMBER: "+a+"<br>RESULT: "+c);
   
  }
  //Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .
  function ans13()
  {
      var username=prompt("Enter your name:");
      for(var i=0; i<=username.length; i++)
      {
          if(username.slice(i,i+1)=="!"||username.slice(i,i+1)==","||username.slice(i,i+1)=="."||username.slice(i,i+1)=="@")
          {
              alert("enter a valid user name");
          }
      }
  }
  //You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability
  function ans14()
  {
      var index=0;
      var match="";
     var bakry_item=prompt("Welcome to ABCD Bakery.What do you want to order sir/mam?");
     var bakry_item=bakry_item.toLowerCase();
     var items=["cake", "apple pie", "cookie", "chips", "patties"];

      for(var i=0; i<items.length;  i++ )
      {
         if(items[i]==bakry_item)
          {  
             index=i;
             match=items[i];
          }
        }
        if(match==bakry_item)
        {
            alert(bakry_item+" is available at index "+index);

        }
      else
      {
        alert("We are sorry "+bakry_item+" is not available in our bakery");

      }
 }
 //Write a program to convert the following string to an array using string split method. var university = “University of Karachi”; Display the elements of array in your browser.
 function ans16()
 {
    var university = "University of Karachi ";
    university=university.split("");
    for(var i=0; i<university.length; i++)
    {
        document.write(university[i]+"<br>");
    }
 }
 //Write a program to display the last character of a user input.
 function ans17()
 {
    var str = prompt("Enter your city");
   
     var last=str.slice(-1);
     document.write("User Input: "+str+"<br> Last Character Of Input: "+last);
     
 }
 //You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.
 function ans18()
 {
     var string="The quick brown fox jumps the  over the lazy dog";
     var occurence=string.match(/the/gi).length;
    document.write("TEXT: "+string+"<br>There are "+occurence+" occurence of word 'the'");
 }
// **********************************<h1>Assignment 26-30</h1>*************************************//
//Write a program that takes a positive integer from user & display the following in your browser. a. number b. round off value of the number c. floor value of the number d. ceil value of the number
function ans2_1()
{
    var number=+prompt("enter a positive integer");
    var roundoff=Math.round(number);
    var floor=Math.floor(number);
    var ceil=Math.ceil(number);
    document.write("Number: "+number+"<br> Round Off Value: "+roundoff+"<br> Floor Value: "+floor+"<br> Ceil Value: "+ceil);

}
//Write a program that takes a negative floating point number from user & display the following in your browser. a. number b. round off value of the number c. floor value of the number d. ceil value of the number
function ans2_2()
{
    var number=+prompt("enter a negative integer");
    var roundoff=Math.round(number);
    var floor=Math.floor(number);
    var ceil=Math.ceil(number);
    document.write("Number: "+number+"<br> Round Off Value: "+roundoff+"<br> Floor Value: "+floor+"<br> Ceil Value: "+ceil);

}
//Write a program that displays the absolute value of a number. E.g. absolute value of -4 is 4 & absolute value of 5 is 5
function ans2_3()
{
    var number=+prompt("enter an integer");
    var absolute=Math.abs(number);
    document.write("The absolute value of "+number+" is "+absolute);

}

//Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:
function ans2_4()
{
    alert("random dice value: "+Math.floor(Math.random() * 7)); 
}
//Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser
function ans2_5()
{
    var coin=Math.floor(Math.random() * 3);
    if(coin==1)
    {
        alert(coin+"\n "+"random coin value Tails");
    }
    else if(coin==2)
    {
        alert(coin+"\n "+"random coin value Heads");

    }
}
//Write a program that shows a random number between 1 and 100 in your browser.
function ans2_6()
{
    var int=Math.floor(Math.random() * 100) + 1;
    alert("random number between 1 and 100 is: "+int); 
}
//Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be: a. 50 b. 50kgs c. 50.2kgs d. 50.2kilograms
function ans2_7()
{
    var st=prompt("enter your weight");
    var n=parseFloat(st);
    document.write("The weight of user is: "+n+" kilograms");
 
}
//Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.
function ans2_8()
{
    var secret_num=Math.floor(Math.random() * 10) + 1;
    // alert(secret_num);
    var guess_num=+prompt("enter a number between 1 to 10");
    if(guess_num==secret_num)
    {
        alert("congratulations");
    }
    else 
    {
        alert("Try again");

    }
}
//***************************************<h1>Assignment 35-38</h1>**************************************//
//Write a function that displays current date & time in your browser.
function current_date_time()
{
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+" "+time;
alert(dateTime);
 }
 //Write a function that takes first & last name and then it greets the user using his full name.
 function greet()
 {
     var first=prompt("enter first name:");
     var last=prompt("enter last name:");
     var full=first+" "+last;
     alert("good evening "+full);


 }
 //Write a function that adds two numbers (input by user) and returns the sum of two numbers.
 function sum()
 {
    var operand1=+prompt("Enter first operand ");
    var operand2=+prompt("Enter second operand ");
    var sum=operand1+operand2;
    return alert("Sum is: "+sum);


 }
 //Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.
 function calculator(operand1=+prompt("Enter first operand "),operator=prompt("Out of these +,-,*, / & %  enter an operator "),operand2=+prompt("Enter second operand "))
 {
    
    var sum=operand1+operand2;
    var sub=operand2-operand1;
    var mul=operand1*operand2;
    var div=operand1/operand2;
    var mod=operand1%operand2;
    if(operator=="+")
    {
       return alert("Sum is: "+sum);
    }
    else  if(operator=="-")
    {
        return  alert("Difference is: "+sub);
    }
    else  if(operator=="*")
    {
        return alert("Product is: "+mul);
    }
    else  if(operator=="/")
    {
        return  alert("Qoutient is: "+div);
    }
    else  if(operator=="%")
    {
        return alert("Modulus is: "+mod);
    }
 }
 //Write a function that squares its argument.
 function square(num=+prompt("Enter Number"))
 {
     var sq=num*num;
    
     return alert("square of "+num+" is "+sq);
     
 }
//Write a function that computes factorial of a number.
 function Factorial(n=+prompt("enter number")) 
 { 
    var ans=1; 
      
    for (var i = 2; i <= n; i++) 
    {
        ans = ans * i; 
    }
    return alert("factorial of "+n+" is "+ans); 
} 
//Write a function that take start and end number as inputs & display counting in your browser.
function counting()
{
    var start=+prompt("enter start number");
    var end=+prompt("enter end number");
    for(var i=start; i<=end; i++)
    {
        document.write(i+"<br>");
    }
}
//Write a nested function that computes hypotenuse of a right angle triangle. Hypotenuse2 = Base2 + Perpendicular2 Take base and perpendicular as inputs. Outer function : calculateHypotenuse() Inner function: calculateSquare()
  function hypoth()
  {
      var base=+prompt("enter base");
      var perp=+prompt("enter perpendicular");
      function sq()
      {
           base=base*base;
           perp=perp*perp;
      }
      sq();
  var hyp=Math.sqrt(base+perp);//square root
  return alert("hypothenius is: "+hyp);
  }
  // Write a function that calculates the area of a rectangle. A = width * height Pass width and height in following manner: i. Arguments as value ii. Arguments as variables
  function area_of_rectangle(width=4,height)
  {
      height=+prompt("enter height of triangle");
  var area=width*height;
      alert("area of triangle is: "+area);
      return area;
  }
  //Write a JavaScript function that checks whether a passed string is palindrome or not? A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.
  function palindrome(input)
  {
       input=prompt("enter a word");
     
     var check="";
       for( var i=input.length-1; i>=0; i--)
       {
           check+=input[i];//concatination of index one by one
       }
       if(input===check)
       {
         alert(input+" is palindrome");
       }
       else
       {
         alert(input+" is not a palindrome");

       }
      
  }
  //Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. EXAMPLE STRING : 'the quick brown fox' EXPECTED OUTPUT : 'The Quick Brown Fox'
  function titleCase(str=prompt("enter any string"))//titlecase
 {
    
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
   alert(str.join(' '));
  
  }
  //Create 2 functions that calculate properties of a circle, using the definitions here.
//Create a function called calcCircumference:
//• Pass the radius to the function.
//• Calculate the circumference based on the radius, and output
//"The circumference is NN".
//Create a function called calcArea:
//• Pass the radius to the function.
//• Calculate the area based on the radius, and output "The area is NN".
  function calcCircumference(radius=prompt("enter radius"))
  {
    var circumference=(Math.PI * radius) * 2;
    document.write("Circumference of circle is: "+circumference+"<br>"); 
    function calcArea()
    {
    var area=(Math.PI * radius) * radius;
    document.write("Area of circle is: "+area+"<br>"); 

    }
    calcArea();

  }
  // Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of
//occurrences of the specified letter within the string.
//Sample arguments : 'JSResourceS.com', 'o'
  function char_count(str=prompt("enter your string"), letter=prompt("enter letter to be count")) 
{
    str=str.toLowerCase();
    letter=letter.toLowerCase();
 var Count = 0;
 for (var i = 0; i< str.length; i++) 
 {
    if (str.charAt(i) === letter) 
      {
      Count += 1;
      }
  }
     alert(str+" contain "+Count+" occurence of "+letter);
     return Count;
}
//Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
//EXAMPLE STRING : 'Web Development Tutorial'
//EXPECTED OUTPUT : 'Development'
function findLongestWord(str=prompt("enter your string")) 
{
    var strSplit = str.split(" ");
    var longestWord = 0;
    var word="";
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
      word=strSplit[i];
       }
    }
    alert("The longest word in string: "+str+" is "+word);
    return word;
  }
  //********************************8<h1>Assignment 31-34</h1>********************//
  //Write a program that displays current date and time in your browser.
  function current_date_time()
{var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  

    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+" "+time;
alert(dateTime);
 }
 //Write a program that alerts the current month in words. For example December.
 function getmonth()
{
 var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];;
    var date = new Date();
   alert("Current Month: "+months[date.getMonth()] );
   
}
//Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.
function getDay()
{
    var days = [ 'Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];;
    var date = new Date();
   alert("Today is: "+days[date.getDay()].substring(0,3) );
}
//Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.
function gettDay()
{
    var days = [ 'Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];;
    var date = new Date();
  var day=days[date.getDay()];
  if(day===days[0]||day===days[6]){
      alert("It's Funday");
  }
  else{
      alert("No it's not a Funday Today:(")
  }

}
//Write a program that shows the message “First fifteen
//days of the month” if the date is less than 16th of the month
//else shows “Last days of the month”.
function date()
{
    var today = new Date();
    var t_d = today.getDate();
if(t_d < 16){
    alert("First Fifteen Days Of The Months");
}
else
{
    alert("Last Days Of The Month");
}
}
//Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.
function elapsed_milli_sec()
 {
  var startTime = new Date();
 var date = startTime.getFullYear()-100+'-'+(startTime.getMonth()+1)+'-'+startTime.getDate();
    var time = startTime.getHours() + ":" +startTime.getMinutes() + ":" + startTime.getSeconds();
    var dateTime = date+" "+time;
    var startTimee = new Date(dateTime);


 var  endTime = new Date();
  var timeDiff = endTime - startTimee; //in ms
  var milliseconds = timeDiff;
  // strip the ms

 var sec= timeDiff / 1000;
 var mint=sec/60;

document.write("Current Date: "+startTime+"<br>Elapsed milliseconds since Jan 1, 1970: "+milliseconds+"<br>Elapsed minutes since Jan 1, 1970: "+mint);

}
//Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.
function time()
{
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    if(time>="00:00:00"&&time<"12:00:00")
    {
        alert("its am");
    }
    
   else if(time>"12:00:00"&&time<="23:00:00")
    {
        alert("its pm");
    }

}
//Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.
function last_month_day_of_2020()
{
   var a= new Date(new Date().getFullYear(), 11, 31)
  alert("Later Date: "+a);

}
//Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015
function daysdifference() {
    var date1=new Date("april 25,2020");
    var date2=new Date();

    // The number of milliseconds in one day
    var ONEDAY = 1000 * 60 * 60 * 24;
    // Convert both dates to milliseconds
    date1 = date1.getTime();
     date2 = date2.getTime();
    // Calculate the difference in milliseconds
    var difference_ms = Math.abs(date2 - date1);

    // Convert back to days and return
   var result=difference_ms/ONEDAY;
  
   alert(result+" days has passed since 1st Ramzan,2020");
}
//Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.
function ElapsedSec()
{
    var date1=new Date("dec 5,2015 22:50:16");
    var date2=new Date();
    var seconds = Math.abs(date2 - date1)/1000;
    alert("On refrence date "+date1+" "+seconds+" had passed since beginning of 2015");
}
//Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.
function an_hour_ahead()
{
    var a = new Date();

   
    var date = a.getFullYear()+'-'+(a.getMonth()+1)+'-'+a.getDate();
    var time = a.getHours()+1 + ":" +a.getMinutes() + ":" + a.getSeconds();


    var dateTime = date+" "+time;
    var timezone = new Date(dateTime);
    document.write("Current Date: "+d+"<br> 1 hour ago: "+timezone);
}
//Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?
function Years_back()
{
    var d = new Date();
 var date = d.getFullYear()-100+'-'+(d.getMonth()+1)+'-'+d.getDate();
    var time = d.getHours() + ":" +d.getMinutes() + ":" + d.getSeconds();
 var dateTime = date+" "+time;
    var timezone = new Date(dateTime);
    document.write("Current Date: "+d+"<br> 100 years back: "+timezone);
}
//Write a program to ask the user about his age. Calculate and show his birth year in your browser.

function birth_year(age=prompt("enter your age"))
{
    age=parseInt(age);
    var today = new Date();
    var Current_year = today.getFullYear();
    var birthYear=Current_year-age;
    alert("Your age is: "+age+"\n Your Birth Year is: "+birthYear);
}
//Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields:
//a. Customer Name
//b. Current Month
//c. Number of units
//d. Charges per unit
//e. Net Amount Payable (within Due Date)
//f. Late Payment Surcharge
//g. Gross Amount Payable (after Due Date)
function k_electric()
{ var gross_amount;
    var customer_name=prompt("Enter your name");
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];;
    var date = new Date(); 
  var current_month=months[date.getMonth()];//june
  var next_month=months[date.getMonth()+1];//july
  var current_date= date.getFullYear()+'-'+current_month+'-'+date.getDate();
 var pre_month=months[date.getMonth()-1];//may
 var issue_date = date.getFullYear()+'-'+pre_month+'-'+"29";
  var due_date=date.getFullYear()+'-'+current_month+'-'+"12";

 var chargesPerUnit=+prompt("enter charges per unit");
  chargesPerUnit=chargesPerUnit.toFixed(2);
var Units=+prompt("enter number of units");
  Units=Units.toFixed(2);
 var net_amount= Units* chargesPerUnit;
 var late_pay_surcharge=350;

 //12 due 29 issue
//  if(current_date<issue_date){
//     alert("bill not isse")
// }
//  if(current_date>issue_date)
//  {

//   net_amount= Units* chargesPerUnit;

//      alert(" on time");
//  }
 if(current_date>due_date)
{
 gross_amount=net_amount+late_pay_surcharge;
    
}
document.write("Customer Name: "+customer_name+"<br>Current Month: "+current_month+"<br>Number Of Units: "+Units+"<br>Charges Per Unit: "+chargesPerUnit+"<br>Net Amount Payable"+"("+issue_date+")-("+due_date+"): "+net_amount+"<br>Last Payment Surcharge: "+late_pay_surcharge+"<br>Gross Amount Payable"+"("+due_date+"): "+gross_amount);

}






    


  

  
  


  