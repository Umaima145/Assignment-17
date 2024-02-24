//Ch 4
//Q1
var alpha="",beta ="",gamma=""

//Q2
//Legal variable

var $name="i";
var name12= "uqs";
var _name="jwh";
var firstName="quc";
var $name_hd="ihd";

//Illegal Variables
// var +name="";
// var @user ="";
// var !name= "";
// var 12name = "";
// var *name = "";


//Q3

var legal = "$my_1stVariable"
document.write(
    "<h1>Rules for naming JS variables</h1>"+"<br> Variable names can only contain number,$ and _ . For example :  " + legal
)
var legal1= "$name, _name or name"
document.write("<br> Variable must be begin with a letter,$ or _ . For example : " + legal1 +
"<br> Variable are case sensitive " + "<br> Variable names should not be JS keywords")


//Ch 5
//Q1
var num1 = 5
var num2 = 3;
var sum = num1 + num2;
document.write(' <br> The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);

//Q2

var num3 = 5
var num4 = 3;
var multiply = num3 * num4;
document.write('<br> The multiplication of ' + num3 + ' and ' + num4 + ' is: ' + multiply);

var num5 = 5
var num6 = 3;
var divide = num5 / num6;
document.write('<br> The divide of ' + num5 + ' and ' + num6 + ' is: ' + divide);

// Q3
 var valueAfter 
 document.write("<br> Value after decleration is undefined" )
 var initial= 5
 document.write("<br> Initial Value:" + initial)
var increment= 5
document.write("<br> Value after increment:" + ++increment)
var addition = increment + 7
document.write( "<br> Value after addition: " , addition )
var decremnet = addition - 1
document.write("<br> Value after  decremnet: " ,  decremnet)
var divide = decremnet/3
document.write("<br> The reminder is:0 ")

//Q4
var buy=5
var ticketPrice =600
document.write("<br> Total cost to buy 5 tickets to a movie is ",buy*ticketPrice,"PKR")

//Q5
var four1 = 4 * 1, four2 = 4 * 2 , four3 = 4 * 3 , four4 = 4 * 4 , four5 = 4 * 5 , four6 = 4 * 6 , four7 = 4 * 7 , four8 = 4 * 8, four9 = 4 * 9, four10 = 4 * 10
document.write(
    "<br> 4 * 1 = " + four1, "<br> 4 * 2 = " + four2,"<br> 4 * 3 = " + four3,"<br> 4 * 4 = " + four4,"<br> 4 * 5 = " + four5,"<br> 4 * 6 = " + four6,"<br> 4 * 7 = " + four7,"<br> 4 * 8 = " + four8,"<br> 4 * 9 = " + four9,"<br> 4 * 10 = " + four10
)

//Q6

// Step 1: Store a Celsius temperature into a variable.
var celsiusTemperature = 25;

// Step 2: Convert Celsius to Fahrenheit
var fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
//Output1
document.write("<br> 25°C is  ",fahrenheitTemperature ,"°F")

// Step1: Store a  Fahrenheit temperature into a variable.
var fahrenheitTemperature1 = 70

// Step 2: Convert Fahrenheit to Celsius 
var celsiusTemperature1 = ( fahrenheitTemperature1 - 32) * 5/9;
//Output2
document.write("<br> 70°F is  ",celsiusTemperature1 ,"°C")



//Q7
// Variables
var priceItem1 = 650,priceItem2 = 100, quantityItem1 = 3, quantityItem2 = 7, shippingCharges = 100;

//  cost
var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

document.write("<br>Price of Item 1 is " + priceItem1 );
document.write("<br>Price of Item 2 is " + priceItem2 );
document.write("<br>Quantity of Item 1 is " + quantityItem1 );
document.write("<br>Quantity of Item 2 is " + quantityItem2 );
document.write("<br>Shipping Charges is " + shippingCharges );
document.write("<br>Total Cost is " + totalCost );


//Q8
// Total marks obtained by the student
var totalMarks = 980;

// Marks obtained by the student
var marksObtained = 804;

// Calculate the percentage
var percentage = (marksObtained / totalMarks) * 100;

// Display the result in the browser
document.write("<br> <h1> Mark Sheet </h1>")
document.write("<br>Total Marks:" , totalMarks);
document.write("<br>Marks Obtained:", marksObtained);
document.write("<br>Percentage:",percentage, "%");

//Q9
const usDollars = 10;
const saudiRiyals = 25;
const exchangeRateUSD = 104.80;
const exchangeRateSAR = 28;

const totalInPakistaniRupees = (usDollars * exchangeRateUSD) + (saudiRiyals * exchangeRateSAR);

document.write("<br><h1>Currency in PKR</h1>Total amount in Pakistani Rupees:",totalInPakistaniRupees);

//Q10


var numb = 10;
var result = (numb + 5) * 10 / 2;

document.write("<br><h1>Expression</h1>",result); 

//Q11
var currentYear=2024
var birthYear=2014
var yourAge = currentYear - birthYear
document.write("<br><h1>Age Calculator</h1>")
document.write("<br>Current Year:",currentYear)
document.write("<br>Birth Year:",birthYear)
document.write("<br> Your Age:",yourAge)

//Q12
// Store the radius of the circle
const radius = 20;

// Calculate the circumference
const circumference = 2 * Math.PI * radius;
//Outpu1
document.write("<br><h1>The Geometrizer</h1>")
document.write("<br>Radius of a circle:20")
document.write("<br>The circumference is ",circumference );

// Calculate the area
var area = Math.PI * Math.pow(radius, 2);

// Output the results
document.write("<br>The area is ", area);

//Q13
// var fvrt= "chocolate"
// var currentAge=17
// var estimated = 65
// var amount= 3


// Store your favorite snack into a variable
var favoriteSnack = " chocolate ";

// Store your current age into a variable
var currentAge = 17;

// Store a maximum age into a variable
var maxAge = 65;

// Store an estimated amount per day (as a number)
var amountPerDay = 3;

// Calculate how many you would eat total for the rest of your life
var yearsRemaining = maxAge - currentAge;
var daysRemaining = yearsRemaining * 365;
var totalAmount = daysRemaining * amountPerDay;

// Output the result to the screen
document.write("<br><h1>The Lifetime Supply Calculator</h1> ")
document.write("<br>You will need ",totalAmount,favoriteSnack," to last you until the ripe old age of " ,maxAge);


//Chapter 6-9
//Q1

var a = 10
document.write("<br><h1>Chapter 6-9 </h1>")
document.write("<br>Result")
document.write("<br>The value of a is: ",a) ;

document.write("<br>The value of ++a is:",++a)
document.write("<br>Now the value of ++a is: ",a)

document.write("<br>The value of a++ is:",a++)
document.write("<br>Now the value of a++ is:",a)

document.write("<br>The value of --a is:",--a)
document.write("<br>Now the value of a is:",a)

document.write("<br>The value of a-- is:",a--)
document.write("<br>Now the value of a-- is:",a)

//Q2
var a =2,b=1;
document.write("<br><h1>Q2</h1>")
document.write("<br>The value of a is:",a,"<br>The value of b is:",b)
document.write("<br>Var result:",--a - --b + ++b + b--);

//Q3
var userName="Enter your name"
var greet="Good to see you"
var us=prompt(userName)
var gt=alert(greet)

//Q5
var number = +prompt("Enter table number..","5");

document.write(
  "<br><h1>Table</h1>",number +"x 1 =" +number * 1 +"<br>" +number +"x 2 =" + number * 2 + "<br>" +number +"x 3 =" + number * 3 +"<br>" +number +"x 4 =" +number * 4 +"<br>" +number +"x 5 =" +number * 5 +"<br>" +number +"x 6 =" +number * 6 +"<br>" +number +"x 7 =" +number * 7 +"<br>" + number + "x 8 =" + number * 8 +"<br>" + number +"x 9 =" + number * 9 + "<br>" +number +"x 10 =" +number * 10 +"<br>");

//Q6
var subject1 = prompt("Enter the name of subject 1:");
var subject2 = prompt("Enter the name of subject 2:");
var subject3 = prompt("Enter the name of subject 3:");
var totalPerSubMarks1=100
var totalPerSubMarks2=100
var totalPerSubMarks3=100
var totalPerSubMarksF=totalPerSubMarks1+totalPerSubMarks2+totalPerSubMarks3
var obtainedMarksSub1=+prompt(("Enter obtained marks for "+ subject1+":"))
var obtainedMarksSub2=+prompt(("Enter obtained marks for "+ subject2+":"))
var obtainedMarksSub3=+prompt(("Enter obtained marks for "+ subject3+":"))

// Calculate total marks and percentage
var totalMarks1=obtainedMarksSub1 
var totalMarks2=obtainedMarksSub2 
var totalMarks3=obtainedMarksSub3
var obtainedMarksSub= obtainedMarksSub1+obtainedMarksSub2+obtainedMarksSub3
var totalmarksF=obtainedMarksSub1+obtainedMarksSub2+obtainedMarksSub3
var percentage1=(totalMarks1 /totalPerSubMarks1 )*100
var percentage2=(totalMarks2 /totalPerSubMarks2 )*100
var percentage3=(totalMarks3 /totalPerSubMarks3 )*100
var percentageF=(totalmarksF /totalPerSubMarksF)*100

var result="<br><h1>Result</h1><br><table><tr><td>Subjects</td><td>Total Marks</td><td>Obtained Marks</td><td>Percentage</td></tr>"+"<tr><td>" + subject1 + "</td>" + "<td>" + totalPerSubMarks1 + "</td>"+"<td>"+obtainedMarksSub1+"</td>"+"<td>"+percentage1+"%"+"</td>"+"<tr><td>" + subject2 + "</td>" + "<td>" + totalPerSubMarks2 + "</td>"+"<td>"+obtainedMarksSub2+"</td>"+"<td>"+percentage2+"%"+"</td>"+"<tr><td>" + subject3 + "</td>" + "<td>" + totalPerSubMarks3 + "</td>"+"<td>"+obtainedMarksSub3+"</td>"+"<td>"+percentage3+"%"+"</td>"+"<tr><td>"  + "</td>" + "<td>" + totalPerSubMarksF + "</td>"+"<td>"+obtainedMarksSub+"</td>"+"<td>"+percentageF+"%"+"</td>"+"</table>"
document.write(result)


//Home PDF Chapter 6-9
//Q1

document.write("<br><h1>Home PDF Chapter 6</h1>")
var x=1
document.write(x++);

var x=100
document.write("<br>",--x)

var x = 50
var y= x++
document.write("<br>", y  )

var y=50
var z=--y
document.write("<br>",z)

var num=5
var newNum=--num
document.write("<br>",newNum)

var originalValue = 5;
var newValue = ++originalValue ;
document.write("<br>",newValue)

var al=16
var alert1= ++al 
alert(alert1)

document.write("<br><h1>Home PDF Chapter 7</h1>")
//Q1
var calculatedNum = 2 + (2 * 6);
document.write("<br><h4>Q1</h4>",calculatedNum)

//Q2
var
calculatedNum = (2 + 2) * 6;
document.write("<br><h4>Q2</h4>",calculatedNum)

//Q3
var calculatedNum = (2 + 2) * (4 + 2);
document.write("<br><h4>Q3</h4>",calculatedNum)

//Q4
var calculatedNum = ((2 + 2) * 4) + 2;
document.write("<br><h4>Q4</h4>",calculatedNum)
//Q5
var cost =2 + (2 * 4) + 10;
document.write("<br><h4>Q5</h4>",cost)

//Q6
var units = (2 + (2 * 4) + 10);
document.write("<br><h4>Q6</h4>",units)

//CH7

document.write("<br><h1>Home PDF Chapter 8</h1>")
//Q1
var num = "2" + "2";
document.write("<br>",num )

//q2
var mess="Hello," + "Doly"
alert(mess)

//Q3
var mess1="33"+3
alert(mess1)

//Q4
alert("Pakistan"+" "+ "Zindabad")

//Q5
var vari="variable" + 45
document.write("<br>",vari)

//Q6
var i="I am"
var u="Umaima"
document.write("<br>",i+" "+u)

//Ch9
document.write("<br><h1>Home PDF Chapter 9</h1>")
//q1
var fN=prompt("Enter your first name")
document.write("<br>",fN)

//q2
var country = prompt("Country?", "China");
document.write("<br>",country)


//Q3
var correct=prompt("Enter your name")

//Q4
var name1=prompt("Enter your age","15+")
document.write("<br>",name1)

//Q5
var message = "Enter your name:";
var defaultResponse = "John Doe";

var userInput = prompt(message, defaultResponse);

//Q6

var message = "What is your favorite color?";
var defaultResponse = "Black";

var userInput = prompt(message, defaultResponse);
alert("Your favorite color is: " + userInput);g