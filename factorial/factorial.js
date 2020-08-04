// factorial of any number

// foctorial of 5 = 5 * 4 * 3 * 2 * 1 = 120

// using arror function and using recursive function
//  let factorial = (val) =>{ 
//     if (val == 0){
//         return 1;
//     }
//     else{
//         return val * factorial(val - 1)
//     }
// } 

// using normal function and loops
let factvalue = 1;
function factorial(val){
   while (val >= 1){
       factvalue = factvalue * val;
       val--;
   }
   return factvalue;
}

FactorialNumber = factorial(3);
document.getElementById("app").innerHTML = FactorialNumber;