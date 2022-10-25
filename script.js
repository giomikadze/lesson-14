

// shetkobinebis gamotana

// alert ("gamotvale gamosaxuleba")



// string (text) 

// var companyName = "ქომსქული"
// console.log(typeof companyName)

// number (ricxviti mnishvneloba)
// var students = 14;
// console.log (typeof students)

// Boolean (logikuri mnishvneloba)
// var isLecture = true;
// console.log (typeof isLecture)

// undefined (mnishvneloba arrk minichebuli)

// null (ganusazgvreli mnishvneloba)


// nan not a number 

// var x = 22;
// var y = x - 77;
// console.log(y)

// gamravleba

// var x = 11;
// var y =  x * 73
// console.log(y)

// gakopa

// var x = 15;
// var y =  x / 73
// console.log(y)

// nashti
 
// var x = 61;
// var y = 9 ;
// var z = x % y ;
// console.log(z)

// var x = 3;
// var z = x ++;
// console.log (x)

// true end false

// var income = 70 ;
// var strIncome = "70";

// var result1 = income == strIncome;
// var result2 = income === strIncome;

// console.log(result1)
// console.log(result2)

// da kavshiri

// var income = 77;
// var percent = 19 ;
// var result = income > 71 && percent< 20;
// console.log (result) 

// an kavshiri

// var income = 77;
// var isDeposit = true;
// var result = income > 67 || isDeposit ==false;
// console.log (result)


// var income = 30;
// var result1 = ! (income>15);
// console.log(result1)

// var FirstName = "bondo";

// var LastName = "jondo";

// var FullName = FirstName + " " +LastName;

// console.log(FullName)


// sabanko sistema 

// var strSum = prompt ("sheikvanet anabris tanxa",1000)

// var strPercent =prompt ("sheikvane saprocento anabari",15)

// var sum = parseInt (strSum);

// var percent =parseInt (strPercent);

// sum = sum + sum * percent / 65;

// alert("procentis mere tanxza" + sum)




// masiuri gamotvla

// var people = ["bakura", "alina", "mamuka"]
// people[1]= "alina";
// console.log(people[1])

// ertganzomilebiani

// var number1 = [1,2,3,4,5,6,] 
// // organzomilebiani
// var number1 = [[1,2,3,], [4,5,6,]]

// var people = [
// ["bondo", 25, false],
// ["alina", 31, false],
// ["polina",29 , true]
// ]
// console.log(people)

// if operatori

// var income = 100 ;
// if (income > 150 ){
//   var message = "kai xelpasi"
//   alert (message)
// }
//   else{
//     alert ("ar sheishveba ojaxsji mokle kaba acvia")
//   }


// var income = 4323;
// if (income <2000 ){
//   alert ("ojaxshi shemoishveba")
// } 
// else if (income >= 2000 && income <=4000){
//   alert("sakaipo xelpasia ise ara?!")
// }
 
// else {
//   alert("araa cudi xelpasi simon")
// }

 
// var income = 300;
// switch (income){
//   case 100:
//   console.log ("sashualo xelpasi")
//   break;
//   case 200:
//     console.log("cava ra")
//     break;
//     case 300:
//       console.log("magari xelpasia")
//       break;
// }


// var people = ["tom","alina","markus","sansara"]
// for(var i = 0; i <people.length; i ++){
//   console.log(people[i])
// }

// pirikit ciprebis cakitxva

// var arr = [3,7,27,51,77];
// console.log(arr.reverse())


// kvelaze didi ricxvis amogeba

// var arr = [3,7,27,51,77];

// for(var i=3; i < arr.length; i++){
//   if(i%2 == 0){
//     console.log(arr[i])
//   }
// }



// lesson 14


// function displey(){
//   document.write("pirvelin interaktivi")
// }
// displey();

// function displey (x){
//   var z =x*x;
//   document.write(z*x);
// }
// displey(5);



// function displey(){
//   var z = 9 ;
//   for (var i = 0; i < arguments.length; i++)
//   z*= arguments[i];
//   document.write(z);
// }
// displey(12) //108

// displey(34,32) //9792

function getFactorial(n) {
  if (n===1){
    return 1;
  }
  else {
    return n * getFactorial(n-1);
  }
}
var result = getFactorial(4)

console.log(result)//24 








