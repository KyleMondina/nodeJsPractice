$(document).ready(function(){

  $("#search").on('submit', function(){
    const item = $('form input');
    const animeName = {name:item.val()};

    $.ajax({
       type: 'POST',
       url: '/search',
       data: animeName,
       success: function(data){
         alert("connection successful");
       },
     });

     return false;
  });

});
