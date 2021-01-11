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
  