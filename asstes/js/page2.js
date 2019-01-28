
var avocados = Cookies.getJSON("avocado");
var x=0;
//console.log(avocados);
for(var i = 0, len = avocados.length; i < len; ++i){
  // i的值为0 1 2， id 为no1 no2 no3
  var id = "#no" + (i + 1);
  switch(avocados[i]){
    case "mexico":
      $(id).text((i + 1) + ". Avocado from Mesico");
      x+=1.06;
      break;
    case "chile":
      $(id).text((i + 1) + ". Avocado from Chile");
      x+=1.30;
      break;
    case "israel":
      $(id).text((i + 1) + ". Avocado from Israel");
      x+=1.40;
      break;
    case "Columbia":
      $(id).text((i + 1) + ". Avocado from Columbia");
      x+=1.10;
      break;
    case "NewZealand":
      $(id).text((i + 1) + ". Avocado from NewZealand");
      x+=1.50;
      break;
    case "fairtrade":
      $(id).text((i + 1) + ". Avocado from Fairtrade");
      x+=7;
      break;
    default:
      break;
  }
}

//两位小数
x = x.toFixed(2);
$("#total").text(x);
