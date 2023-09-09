var inputNumber = document.getElementById("inputfiled");
inputNumber.addEventListener("input", function() {
    document.getElementById("sisi").innerHTML = document.fform.inputfiled.value + " cm";
    document.getElementById("sisi2").innerHTML = document.fform.inputfiled.value + " cm";
    
});
function formreset(){
  document.getElementById("fform").innerHTML.reset();
}
function jumlahkan(){
    var action = document.fform.rumus.value;
    var sisi =  document.fform.inputfiled.value;
    if(action == 'k'){
        document.getElementById("kalimat").innerHTML = "Keliling persegi";
        document.getElementById("rumus").innerHTML = "S + S + S + S ";
        document.getElementById("operator").innerHTML = sisi + "+" + sisi + "+" + sisi + "+" + sisi;
        document.getElementById("hasil") .innerHTML = sisi*4;
    }
    else if(action == 'l'){
        document.getElementById("kalimat").innerHTML = "Luas persegi";
        document.getElementById("rumus").innerHTML = "S x S";
        document.getElementById("operator").innerHTML = sisi + "x" + sisi;
        document.getElementById("hasil").innerHTML = sisi*sisi;
    }
}
