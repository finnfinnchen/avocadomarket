var i = 0;
var count = 0;
var icon = document.getElementById('a(i)');

$('.btn').click(function(event){
  $('#a1').addClass('visible');
  add();
});
document.getElementById('avo').style.visibility = 'hidden';
document.getElementById('btn').onclick;


function add()
    {
      if(count < 3){
        count++;
        i++;
        // 使用console打印调试信息
        console.log("count:" + count);
        icon.style.visibility = 'visible';
        console.log(icon);
      }
      else
      {
        console.log("count: have reached its maxium value" + count);
        // 另一种输出调试信息的方法，显然过于粗暴，不如console
        alert("You have had enough avocado!");
        $('.btn').removeAttr('onclick');
      }
    };
