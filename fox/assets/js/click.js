$(document).ready(function(){ 
    $(".burger").click(function(){  	
        $(".menu_list").css({
        	"margin-top": "15px",
        	"background-color": "rgb(134,128,135)"
        }).toggle();
        $("li a").css({
        	"padding-right": "60px",
        });
    });

    $(".left_img").mouseenter(function(){
    	$(".left").css({
			"width": "97%",
		    "border-right": "0",
		    "z-index": "2"
        });
        $(".right").css("z-index", "1");
        $(".left").css({
			"animation-name": "left",
        	"animation-duration": "2s"
        });
        $(".title").css("left", "15vw");
        $(".title").css({
            "animation-name": "left_title",
        	"animation-duration": "2s"
        });
        $(this).css({
        	"top": "-18vw",
        	"right": "21vw",
			"transform": "none"
        });
        $(".right_block, .right_img").hide(1000);
        $(".left_block").css({
        	"top": "-18vw",
        	"right": "21vw"
        });
        $(".right_button").css("z-index", "2").show(2000); 
        $(".left_item").show(2000); 
    });

    $(".right_img").mouseenter(function(){
        $(".right").css({
			"width": "97%",
        	"border-left": "0",
		    "z-index": "2"
        });
        $(".left").css("z-index", "1");
        $(".right").css({
	        "animation-name": "right",
        	"animation-duration": "2s"
        });
        $(".right").css("left", "-3.5vw");
        $(".title").css("left", "15vw");
        $(".title").css({
            "animation-name": "right_title",
        	"animation-duration": "2s"
        });
        $(this).css({
        	"top": "7vw",
        	"right": "23.5vw",
			"transform": "none"
        });
        $(this).css({
        	"animation-name": "right_img",
        	"animation-duration": "2s"
        });
        $(".left_block, .left_img").hide(1000);
        $(".right_block").css({
        	"top": "7vw",
        	"right": "23.5vw"
        });
        $(".right_block").css({
        	"animation-name": "right_block",
        	"animation-duration": "2s"
        });
        $(".left_button").css("z-index","2").show(2000); 
        $(".point1").css("animation-name", "right_point1");
        $(".point2").css("animation-name", "right_point2");
        $(".point3").css("animation-name", "right_point3");
        $(".right_item").show(2000);
    });
    
    $(".right_button").click(function(){  
    	$(this).hide(); 
    	$(".right_item").hide();
    	$(".right").css({
			"width": "97%",
        	"border-left": "0",
		    "z-index": "2"
        });
        $(".left").css("z-index", "1");
        $(".right").css("left", "-3.5vw");
        $(".right_img").hide();
        $(".right_img_button").css({
        	"top": "7vw",
        	"right": "23.5vw",
			"transform": "none"
        }).show();
        $(".right_block").css({
        	"top": "7vw",
        	"right": "23.5vw"
        }).show();
        $(".left_button").css("z-index","2").show(2000); 
        $(".point1").css("animation-name", "right_point1");
        $(".point2").css("animation-name", "right_point2");
        $(".point3").css("animation-name", "right_point3");
        $(".right_item").show(2000);     
    });

    $(".left_button").click(function(){ 
    	$(this).hide();
    	$(".left_item").hide(); 
        $(".left").css({
			"width": "97%",
        	"border-right": "0",
		    "z-index": "2"
        });
        $(".right").css("z-index", "1");
        $(".left_img").hide();
        $(".left_img_button").css({
        	"top": "-18vw",
        	"right": "21vw",
			"transform": "none"
        }).show();
        $(".left_block").css({
        	"top": "-18vw",
        	"right": "21vw"
        }).show();
        $(".right_button").css("left", "55vw").show(2000);
        $(".point1").css("animation-name", "left_point1");
        $(".point2").css("animation-name", "left_point2");
        $(".point3").css("animation-name", "left_point3");
        $(".left_item").show(2000); 
    });

    $(".mobile_left_item").show(1000);

    $(".mobile_right_button").click(function(){  
    	$(this).hide(); 
    	$(".mobile_left_item").hide();
    	$(".mobile_right_item").hide();
        $(".mobile_right").css("width", "93%");
        $(".mobile_left").css("width", "7%");
        $(".mobile_left_img").hide();
        $(".mobile_right_img").show();
        $(".mobile_left_block").hide();
        $(".mobile_right_block").show();
        $(".mobile_left_button").show(); 
        $(".mobile_point1").css("animation-name", "right_point1");
        $(".mobile_point2").css("animation-name", "right_point2");
        $(".mobile_point3").css("animation-name", "right_point3");   
        $(".mobile_right_item").show(1000);  
    });

    $(".mobile_left_button").click(function(){ 
    	$(this).hide();
    	$(".mobile_right_item").hide();
    	$(".mobile_left_item").hide();
        $(".mobile_left").css("width", "93%");
        $(".mobile_right").css("width", "7%");
        $(".mobile_right_img").hide();
        $(".mobile_left_img").show();
        $(".mobile_right_block").hide();
        $(".mobile_left_block").show();
        $(".mobile_right_button").show();
        $(".mobile_point1").css("animation-name", "left_point1");
        $(".mobile_point2").css("animation-name", "left_point2");
        $(".mobile_point3").css("animation-name", "left_point3");
        $(".mobile_left_item").show(1000);
    });

});