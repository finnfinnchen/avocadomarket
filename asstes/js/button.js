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
        /* 
        Little difference between two syntax
            .disabled   the button unable to be clicked,
            .onclick = ' '   the button still could be clicked, just no actions
        You may choose one according to your demands
        */
        document.getElementById("plus").onclick = '';
        // document.getElementById("plus").disabled=true;
      }
    };
