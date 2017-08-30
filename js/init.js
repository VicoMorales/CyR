(function($){
		  $(function(){

		    $('.button-collapse').sideNav();
		 	$('.modal').modal({startingTop: '4%', endingTop: '17%'});
				
		  }); // end of document ready

  $(window).scroll(function() {
		  if ($(document).scrollTop() > 80) {
		    $('nav').addClass('shrink');
		     $('nav ul a').addClass('shrink-item');
		   $("nav img").attr("src", "img/logo-color.png");
		  } else {
		    $('nav').removeClass('shrink');
		    $('nav ul a').removeClass('shrink-item');
		   $("nav img").attr("src", "img/logo-blanco.png");
		  }	
	});
    $("#btn-video").click(function(){
        $(".about  .play").removeClass("play");

    });
     $("#arrow-left").click(function(){
        $(".about .tab").addClass("play");

    });
     $('#home').scrollSpy({scrollOffset: 1});
     $('#nosotros').scrollSpy({scrollOffset: 0});
	$('#marcas').scrollSpy({scrollOffset: 0});
	$('#contactanos').scrollSpy({scrollOffset: 0});

	if ($(window).width()<=600) {
		$(".about .tab").addClass("ancho-mobile");
	} else {
		$(".about .tab").removeClass("ancho-mobile");
	}

	

})(jQuery); // end of jQuery name space