function addition () {
     getValues(); 
     //assign variables for different math operations 
     sum = num1+num2; //addition 
     document.getElementById("Result").innerHTML = "Sum= " + sum; 
  } 
  function subtraction () {
    getValues(); 
    //assign variables for different math operations 
    sum = num1-num2; //addition 
    document.getElementById("Result").innerHTML = "Sum= " + sum; 
 } 
 
  function getValues(){ 
    num1 = document.getElementById("num1").value; 
    num2 = document.getElementById("num2").value; 
    num1 = parseInt(num1); 
    num2 = parseInt(num2); 
  
} 
