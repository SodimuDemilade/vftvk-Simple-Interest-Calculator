// function for rate slider
 function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
// compute interest button action
function compute()
{
    var principal = document.getElementById("principal").value;
    // principal validation
    if (principal <= 0) {
    alert("Enter a positive number");
    document.getElementById("principal").focus();
    return false;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    // print out result of computation
    document.getElementById("result").innerHTML="If you deposit "
    +principal+",\<br/>at an interest rate of "
    +rate+"%.\<br/>You will receive an amount of "+interest+
    ",\<br/>in the year "+year;
}