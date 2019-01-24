
var count = 0;
var countEl = document.getElementById("count");

document.getElementById("plus").onclick = function() {plus()};
document.getElementById("minus").onclick = function() {minus()};
document.getElementById("disable").onclick = function() {disable()};


function plus(){
    count++;
    countEl.value = count;
}
function minus(){
    count--;
    countEl.value = count;
}
function disable(){
  document.getElementById("plus").onclick = '';;
  document.getElementById("minus").onclick = '';;
}
