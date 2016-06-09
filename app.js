$(document).ready(function(){
    $('#btn_span').click(function(){
        $.get('https://en.wikipedia.org/wiki/Special:Random',function(data){
             console.dir(data);
            
             $('.articles').html()
        });
    });

















   });



