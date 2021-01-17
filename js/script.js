$(document).ready(function() {
	$("body").on('click', '.top', function() {
		$("nav.menu").toggleClass("menu_show");
	});
});

$(document).ready(function(){
  
	/* 1. Visualizing things on Hover - See next part for action on click */
	$('#stars li').on('mouseover', function(){
	  var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on
	 
	  // Now highlight all the stars that's not after the current hovered star
	  $(this).parent().children('li.star').each(function(e){
		if (e < onStar) {
		  $(this).addClass('hover');
		}
		else {
		  $(this).removeClass('hover');
		}
	  });
	  
	}).on('mouseout', function(){
	  $(this).parent().children('li.star').each(function(e){
		$(this).removeClass('hover');
	  });
	});
	
	
	/* 2. Action to perform on click */
	$('#stars li').on('click', function(){
	  var onStar = parseInt($(this).data('value'), 10); // The star currently selected
	  var stars = $(this).parent().children('li.star');
	  
	  for (i = 0; i < stars.length; i++) {
		$(stars[i]).removeClass('selected');
	  }
	  
	  for (i = 0; i < onStar; i++) {
		$(stars[i]).addClass('selected');
	  }
	  
	  var ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);
    
	  
	  
	});
	
	
  });
  
  


window.addEventListener("load", () => {
	document.body.classList.remove("preload");
});

document.addEventListener("DOMContentLoaded", () => {
	const nav = document.querySelector(".nav");

	document.querySelector("#btnNav").addEventListener("click", () => {
		nav.classList.add("nav--open");
	});

	document.querySelector(".nav__overlay").addEventListener("click", () => {
		nav.classList.remove("nav--open");
	});
});



$(document).on("input", "#distance-range", function() {
	let control = $(this),
	  min = control.attr("min"),
	  max = control.attr("max"),
	  val = control.val(),
	  thumbWidth = control.data("thumbwidth");
  
	let range = max - min;
  
	let position = ((val - min) / range) * 100;
	let offsetPosition =
	  Math.round((thumbWidth * position) / 100) - thumbWidth / 2;
	let output = control.next("output");
  
	output
	  .css("left", "calc(" + position + "% - " + offsetPosition + "px)")
	  .text(val);
  
	$("#range-val").html(control.val());
  });

//Navigation Fucntions
$(document).on("click", "#nav-text1", function() {
	window.location.href = "../../pages/HomePage/index.html";
  });

  $(document).on("click", "#nav-text2", function() {
	window.location.href ="../../pages/Aboutus/about.html";
  });
  
  $(document).on("click", "#nav-text3", function() {
	window.location.href ="../../pages/Service/servicehome.html";
  });
  $(document).on("click", "#nav-text4", function() {
	window.location.href ="../../pages/Petsitting/petsitting.html";
  });
  $(document).on("click", "#nav-text5", function() {
	window.location.href ="../../pages/Aboutus/about.html";
  });
  $(document).on("click", "#nav-text6", function() {
	window.location.href ="../../pages/Aboutus/about.html";
  });
  $(document).on("click", "#nav-text7", function() {
	window.location.href ="../../pages/Aboutus/about.html";
  });
  $(document).on("click", "#nav-text8", function() {
	window.location.href ="../../pages/PostAJob/postajob.html";
  });
  $(document).on("click", "#nav-text9", function() {
	window.location.href ="#stars";
  });
  $(document).on("click", "#nav-text10", function() {
	window.location.href ="../../pages/BecomeASitter/sitterLogin.html";
  });
  $(document).on("click", "#nav-text11", function() {
	window.location.href ="../../pages/MyPtofile/myprofile.html";
  });
  $(document).on("click", "#nav-text12", function() {
	window.location.href ="../../pages/Log&Reg/login.html";
  });

  //Bredcrumbs 
  $(document).on("click", "#service2", function() {
	window.location.href = "../../pages/Service/servicehome.html";
  });
  $(document).on("click", "#service3", function() {
	window.location.href = "../../pages/Petsitting/petsitting.html";
  });
  
  //ServiceDetails
  $(document).on("click", "#serviceProvider1", function() {
	window.location.href ="../../pages/ServiceDetails/index.html";
  });
  $(document).on("click", "#serviceProvider2", function() {
	window.location.href ="../../pages/ServiceDetails/index.html";
  });
  
//ABoutus bredcrumbs
$(document).on("click", "#homePage", function() {
	window.location.href ="../../pages/HomePage/index.html";
  });

//navigatings for loging and registration
$(document).on("click", "#link1", function() {
	window.location.href ="../../pages/Log&Reg/login.html";
  });
  $(document).on("click", "#link2", function() {
	window.location.href ="../../pages/Log&Reg/register.html";
  });

  //Navigations in myprofile
  $(document).on("click", "#favouriteList", function() {
	window.location.href ="../../pages/Favourites/index.html";
  });
  $(document).on("click", "#logut", function() {
	window.location.href ="../../pages/HomePage/index.html";
  });
  $(document).on("click", "#favouriteList", function() {
	window.location.href ="../../pages/Favourites/index.html";
  });
//Navigations in service
$(document).on("click", "#petsitting", function() {
	window.location.href ="../../pages/Petsitting/petsitting.html";
  });
  $(document).on("click", "#game-button-enter", function() {
	window.location.href ="../../pages/Game/game1.html";
  });

  //Navigations in Game
  $(document).on("click", "#go-back-btn1", function() {
	window.location.href ="../../pages/Game/game1.html";
  });