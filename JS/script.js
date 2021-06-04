 function calc() {
     ap = document.getElementById("ap").value;
     lg = document.getElementById("lg").value;
     met = document.getElementById("met").value;
     pcr = document.getElementById("pcr").value;
     quant = ap * lg * met;
     pcr1 = quant / pcr;
     pcr_result = pcr1.toString();
     document.getElementById("result").innerHTML = Math.round(quant);
     document.getElementById("result_pcr").innerHTML = pcr_result[0];
 }