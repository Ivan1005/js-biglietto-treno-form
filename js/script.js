
 document.getElementById("genera").addEventListener("click" , function() {
      var myElement = document.getElementById("bot").classList.add("show");
      var x = document.getElementById("nome").value;
      document.getElementById("nome-biglietto").innerHTML = x;
      var km = document.getElementById("km").value;
      var prezzo = km * 0.21;
      var prezzoFinale = prezzo;
      var eta = document.getElementById("eta").value;
      if (eta == "minorenne") {
        prezzoFinale = prezzo * 0.8;
      } else if (eta == "over") {
        prezzoFinale = prezzo * 0.6;
      }
      document.getElementById("sconto").innerHTML = "sconto" + "<br>" + eta;
      var finale = prezzoFinale.toFixed(2);
      document.getElementById("price").innerHTML = finale;
      document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * (9 - 1) + 1);
      document.getElementById("vagone").innerHTML = Math.floor(Math.random() * (99999 - 90000) + 90000);
      
});

document.getElementById("annulla").addEventListener("click" , function() {
  var myElement = "";
  myElement = document.getElementById("bot").classList.remove("show");
  document.getElementById("myForm").reset();
});
