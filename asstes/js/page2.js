
var avocados = Cookies.getJSON("avocado");
var x=0;
//console.log(avocados);
if(avocados[0] == "mexico"){
  $("#no1").text("1. Avocado from Mesico");
  x+=1.06;
}
else if (avocados[0] == "chile") {
  $("#no1").text("1. Avocado from Chile");
  x+=1.30;
}
else if (avocados[0] == "israel") {
  $("#no1").text("1. Avocado from Israel");
  x+=1.40;
}
else if (avocados[0] == "Columbia") {
  $("#no1").text("1. Avocado from Columbia");
  x+=1.10;
}
else if (avocados[0] == "NewZealand") {
  $("#no1").text("1. Avocado from NewZealand");
  x+=1.50;
}
else if (avocados[0] == "fairtrade") {
  $("#no1").text("1. Avocado from Fairtrade");
  x+=7;
}
//
if(avocados[1] == "mexico"){
  $("#no2").text("2. Avocado from Mesico");
  x+=1.06;
}
else if (avocados[1] == "chile") {
  $("#no2").text("2. Avocado from Chile");
  x+=1.30;
}
else if (avocados[1] == "israel") {
  $("#no2").text("2. Avocado from Israel");
  x+=1.40;
}
else if (avocados[1] == "Columbia") {
  $("#no2").text("2. Avocado from Columbia");
  x+=1.10;
}
else if (avocados[1] == "NewZealand") {
  $("#no2").text("2. Avocado from NewZealand");
  x+=1.50;
}
else if (avocados[1] == "fairtrade") {
  $("#no2").text("2. Avocado from Fairtrade");
  x+=7;
}
//
if(avocados[2] == "mexico"){
  $("#no3").text("3. Avocado from Mesico");
  x+=1.06;
}
else if (avocados[2] == "chile") {
  $("#no3").text("3. Avocado from Chile");
  x+=1.30;
}
else if (avocados[2] == "israel") {
  $("#no3").text("3. Avocado from Israel");
  x+=1.40;
}
else if (avocados[2] == "Columbia") {
  $("#no3").text("3. Avocado from Columbia");
  x+=1.10;
}
else if (avocados[2] == "NewZealand") {
  $("#no3").text("3. Avocado from NewZealand");
  x+=1.50;
}
else if (avocados[2] == "fairtrade") {
  $("#no3").text("3. Avocado from Fairtrade");
  x+=7;
}
$("#total").text(x);
