document.getElementById("plus").clickTimes = 0
document.getElementById("plus").onclick = test;

function test ()
{
        if(this.clickTimes<4)
        {
            this.clickTimes++;

            countEl.value = this.clickTimes;
        }
        else
        {
          document.getElementById("plus").disabled=true;
        }
    }


//1.0
    document.getElementById("plus").onclick = function() {plus()};
    //document.getElementById("disable").onclick = function() {disable()};

    function plus()
    {
      count++;
      countEl.value = count;
      return count;
    };

    if (count<=3){
      function enable()
      {
        document.getElementById("plus").disabled=false;
      }

    }
    else {
      function disable()
      {
        document.getElementById("plus").disabled=true;
        //document.getElementById("plus").onclick = '';;
      }
    }
