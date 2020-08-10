
let result = "";
function Createtriangle(count){
   let starCount;
   for (let i = 1; i <= count ; i++){
     for (starCount = 1; starCount <= i; starCount++){
          result += "*";
      }
      result += "<br>";
   }
}

let triangleRowCount = Number(prompt("How larger do you want the triangle to be. Enter a number"));
Createtriangle(triangleRowCount);
document.getElementById("app").innerHTML = result;