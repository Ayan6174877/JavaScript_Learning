/*  check that the value entered by the user is a numbwr or not and if it is 
a number then check whether its prime or not */

// prime number are only divisible by 1 and themselves
// remainder nned not to be 0

let getNumber = Number(prompt("Enter a number")); // Number converts anu string into a number
let isPrime = true;
let check;
let checkRemainder;
function CheckPrime(){
    if(!Number.isNaN(getNumber)) // returns false if number entered is not a number
        {
            check = getNumber / 2; // half the number entered to check when divided produces a remainder 0 or not
            // if the number is 0 or 1 then its not prime
            if (getNumber == 0 || getNumber == 1){
               isPrime = false;
            }
            else {
                for(i = 2 ; i <= check ; i++){
                    if(getNumber % i == 0) // if the remainder is 0 then the number is completely divisible and is not prime
                    {
                       isPrime = false;
                        break;
                    }
                }
            }
        }
        else{
            alert("not a number");
        }
}


CheckPrime();
if(isPrime){
    alert(getNumber + " is a prime number" );
}
else{
    alert(getNumber + " is not a prime number" );
}






