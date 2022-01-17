var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var result = document.getElementById("res");
var form = document.getElementById("form");

form.addEventListener('submit', function(e){
    if(!num1.value|| !num2.value){
        alert("Please enter value");
    }
    else{
        var x= parseFloat(num1.value);
        var y= parseFloat(num2.value);

        var res = (x/y)*100;
        

        result.innerText = "Answer: "+ res + "%";
        e.preventDefault();
    }
})