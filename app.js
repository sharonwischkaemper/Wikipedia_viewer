$(document).ready(function(){

   
    $('#search_btn').on('click', function(){
        var search_area = $('#search_area').val();
        var url = "http://en.wikipedia.org/w/api.php?action=opensearch&search=" + search_area + "&format=json&callback=?";
       
       $.ajax({
            url: url,
            type: 'GET',
            async: false,
            dataType: 'json',
            success: function(data, status, jqXHR){
                console.dir(data);

                data.splice(0, 1);

                 var new_array = [];

                var titles = data[0];
                var descriptions = data[1];
                var urls = data[2];

                for (var i = 0; i < titles.length; i++){
                    var obj = {};
                    
                    obj.title = titles[i] || 'unkown title';
                    obj.description = descriptions[i] || 'unkown descriptions';
                    obj.url = urls[i] || 'unkown url';

                    new_array.push(obj);
                    console.log(obj);

                
                var content = '<div class="well"><a href='+ obj.url + '><h2>'
               + obj.title +'</h2></a>' + '<p>'+ obj.description + '</p></div></div>';
               
                 $('#wiki').append(content);
                   }
                }
     })

 })

});


