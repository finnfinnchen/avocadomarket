//$(function(){

   // 开始写 jQuery 代码...
  // "#test" #id
  // "p" 元素
  // ".test" .class
//})

//function onTopClick() {
//         window.location.hash = "#abc";
//       }
   
    //<input  type="button" name="Submit" value="提交"  onclick="javascript:onTopClick();" />
    //<div id="abc">跳转到的位置</div>

//<a  class="begin">点击跳转</a>
//<div id="abc">将要跳转到这里</div>
//function click_scroll() {
//var scroll_offset = $("#mess").offset(); //得到pos这个div层的offset，包含两个值，top和left
//$("body,html").animate({
//scrollTop:scroll_offset.top //让body的scrollTop等于pos的top，就实现了滚动
//},0);
//}

function goToAnchor(anchorId) {
//    使用replace方法可以保证前一次浏览不会在浏览器中保留记录
    window.location.replace(window.location.href.split('#')[0] + anchorId);
  }

  
