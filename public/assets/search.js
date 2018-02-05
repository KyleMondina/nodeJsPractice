$(document).ready(function(){

  $("#search").on('submit', function(){
    var item = $('form input');
    var data3 = {item3:item.val()};

    $.ajax({
       type: 'POST',
       url: '/search',
       data: data3,
       success: function(data){
         //do something with the data via front-end framework
         alert(data.item3);
         location.reload();
       },
     });

     

     return false;
  });

});
