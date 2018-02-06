$(document).ready(function(){

  $("#upload").on('submit', function(){
    const item1 = $('#name');
    const item2 = $('#image');
    const animeInfo = {
      name:item1.val(),
      imageurl: item1.val()
    };

    $.ajax({
       type: 'POST',
       url: '/upload',
       data: animeInfo,
       success: function(data){
         alert('success!');
         location.reload();
       },
     });

     return false;
  });

});
