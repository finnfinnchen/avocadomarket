var count = 0;
var countEl = document.getElementById("count");

document.getElementById("plus").onclick = function() {plus()};
function plus()
    {
      if(count < 4){
        count++;
        countEl.value = count;
      }
      else
      {
        document.getElementById("plus").disabled=true;
      }
    };
