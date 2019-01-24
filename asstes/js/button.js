
var count = 0;
var countEl = document.getElementById("count");

document.getElementById("plus").onclick = function() {plus()};
document.getElementById("minus").onclick = function() {minus()};


function plus(){
    count++;
    countEl.value = count;
}
function minus(){
    count--;
    countEl.value = count;
}
