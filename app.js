
function start () {
    var yourCity;
    var url_ip = 'https://ipinfo.io';
    $.ajax({
        url: url_ip,
        dataType: 'json',
        type: 'GET'

    })
        .done(function (done) {
            console.log(done);
            showResults(done);

        })
        .fail(function (fail) {
            console.log(fail);
        });
    function showResults(data) {
        $.each(data, function (i, value) {
            yourCity = data.city;
            

        })

        $(function () {
            var url = 'https://api.openweathermap.org/data/2.5/weather';
            var rules = {
                q: yourCity,
                appid: "90bdec30e54ffb77680aceeaf28fcda8",
            };

            $.ajax({
                url: url,
                dataType: 'json',
                data: rules,
                type: 'GET'

            })
                .done(function (done) {
                    console.log(done);
                    showResults(done);

                })
                .fail(function (fail) {
                    console.log(fail);
                });
            function showResults(data) {
                
                $.each(data, function (i, value) {       
                 late=data.coord.lat;
                lon=Math.floor(data.coord.lon);
                initMap();
                return false;
                           
                })
                
                function initMap() {

                    var uluru = {lat:data.coord.lat, lng: data.coord.lon};
                    var map = new google.maps.Map(document.getElementById('map'), {
                      zoom: 20,
                      center: uluru
                    });
                    var marker = new google.maps.Marker({
                      position: uluru,
                      map: map
                    });
            
                  }
               
            };
            
            
        });

    }
     
   
     };
     
  
$(function(){
    $(".mobile-tab").hide(); 
   $("#burg").on("click",function(){
     $(".mobile-tab").slideToggle(1000);
   }); 
 }
 
 );  
 (function($) {
    $.fn.extend({
    toggleSwitch: function(){
    
    
    $('.toggle-switch').on('click',function(){
    if($(this).hasClass('toggle-off')){
    $(this).removeClass('toggle-off').addClass('toggle-on')
    $(".section_map").css("display", "block");
    start();
    }else{
    $(this).removeClass('toggle-on').addClass('toggle-off')
    $(".section_map").css("display", "none");
    
    }
    
    })
    
    }
    })
    })(jQuery)
    
    $(document).ready(function(){
    $('.toggle-switch').toggleSwitch();
    });