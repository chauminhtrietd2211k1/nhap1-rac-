// JavaScript Document
$(document).ready(function(){
  $(".navbar-toggle").click(function(){
    $(".menu").slideToggle("slow");
  });
});


$('#banner').owlCarousel({
   	 loop:true,	// cho lap lại
	items:1,	// xuất hiện 1 ảnh thôi
	smartSpeed:1000,   	// tốc độ thay đổi ảnh
	nav:true,
	autoplay:true,		// cho phép tự động chạy
    autoplayTimeout:10000,  // thời gian chờ khi chuyển ảnh khi chạy tự động

	  })
/*$('#dichvu-chayngang').owlCarousel({
   	 loop:true,	// cho lap lại	
	margin:15,
	smartSpeed:1000,   	// tốc độ thay đổi ảnh	
	autoplay:true,		// cho phép tự động chạy
    autoplayTimeout:10000,  // thời gian chờ khi chuyển ảnh khi chạy tự động
	 responsive:{
        0:{
            items:1 // xuất hiện 1 ảnh thôi
        },
        600:{
            items:2 // xuất hiện 3 ảnh thôi
        },
        1000:{
            items:4 // xuất hiện 4 ảnh di
        }
    }

	  })*/

$('#dichvu-chayngang').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})


$('#tes').owlCarousel({
   	 loop:true,	// cho lap lại
	items:2,	// xuất hiện 1 ảnh thôi
	margin:30,
	smartSpeed:1000,   	// tốc độ thay đổi ảnh
	
	autoplay:true,		// cho phép tự động chạy
    autoplayTimeout:10000,  // thời gian chờ khi chuyển ảnh khi chạy tự động

	  })
$('#dichvu-chayngang').owlCarousel({
   	 loop:true,	// cho lap lại
	items:1,	// xuất hiện 1 ảnh thôi
	smartSpeed:1000,   	// tốc độ thay đổi ảnh
	nav:true,
	autoplay:true,		// cho phép tự động chạy
    autoplayTimeout:10000,  // thời gian chờ khi chuyển ảnh khi chạy tự động

	  })



