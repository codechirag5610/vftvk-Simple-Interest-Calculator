function compute(){
    var p = document.getElementById("principal").value;
    var q = document.getElementById("rate").value;
    var r = document.getElementById("years").value;
    var res = (p*q*r)/100;
    var year = new Date().getFullYear() + parseInt(r);
    if(p == ""){
        alert("Please enter a principal value");
        document.getElementById("principal").focus();
    }
    if(p <= 0){
      alert("Please enter a positive principal value");
      document.getElementById("principal").focus();
    }
    document.getElementById("result").innerHTML = " If you deposit " + p + " at an interest rate of " + q + " you will get " + res + " in year " + year;
}


var slider = document.getElementById("rate");
var output = document.getElementById("rate_val");
output.innerHTML = slider.value + "%";
slider.oninput = function() {
    output.innerHTML = this.value + "%";
}
    
