// wishing a user happy birthday

let greeting = '';

function checkBirthDay(){
    let Bday = confirm('Is today your BirthDay\npress "OK" if yes and "cancel" if no');
    if(Bday == true){
      greeting = "Hey! wishing you a happy BirthDay";
    }
    else{
      greeting = "Hey! we will wish you soon";
    }
}

checkBirthDay();
document.getElementById("app").innerHTML = greeting;