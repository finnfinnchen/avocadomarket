//market game//
//jq
//我做的button是个废物
$('.btn').click(function(event){
  $('.avo').addClass('visible');
}
//js-button function
count = 0;
document.getElementById("btn").onclick = function() {add()};
function add()
    {
      if(count < 4){
        count++;
      }
      else
      {
        document.getElementById("btn").disabled=true;
      }
    };




function goToAnchor(anchorId) {
//    使用replace方法可以保证前一次浏览不会在浏览器中保留记录
    window.location.replace(window.location.href.split('#')[0] + anchorId);
  }
