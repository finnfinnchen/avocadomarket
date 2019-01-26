//market game//
//jq //让牛油果依次出现，ok！
$('.btn').click(function(event){
  $('#a1').addClass('visible');
  add();
  $('.btn').click(function(event){
    $('#a2').addClass('visible');
    $('.btn').click(function(event){
      $('#a3').addClass('visible');
    });
  });
});
//js-button function
var count = 0;
function add()
    {
      if(count < 3){
        count++;
        // 使用console打印调试信息
        console.log("count:" + count);
      }
      else
      {
        console.log("count: have reached its maxium value" + count);
        // 另一种输出调试信息的方法，显然过于粗暴，不如console
        alert("You have had enough avocado!");
        $('.btn').removeAttr('onclick');
      }
    };
