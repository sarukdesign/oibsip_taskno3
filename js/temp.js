
//celsius to fahrenheit


let btn = document.querySelector("#btn");

btn.addEventListener('click',()=>{
    function ctf(celsius){
        let fahrenheit = Math.round((celsius * (9/5)) + 32);
        return fahrenheit;
    }


    function ftc(fahrenheit){
        let celsius = Math.round((fahrenheit -32) * (5/9));
        return celsius;
    }

// Checks if Celsius or Fahrenheit is selected

let tempSelected = document.querySelector("#tem");
let valueTemp = tempSelected.options[tempSelected.selectedIndex].value;


// Checks the value inside the Temperature input

let n = document.querySelector("#num").value;
let result;

if (valueTemp == 1){
    result = ctf(n);
document.querySelector("#res").innerHTML=" The result is : "+ result + "°Fahrenheit";
}
else{
    result = ftc(n);
    document.querySelector("#res").innerHTML=" The result is : "+ result + "°Celsius";
}
}
)

// Clearing the input field and result after clicking on reset button
let btn1 =  document.querySelector("#btn1");
btn1.addEventListener('click',()=>{
    document.querySelector("#convert").reset();
    document.querySelector("#res").innerHTML="";

}
)