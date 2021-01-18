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
  

  var totalLikes = 0;
var totalUnlikes = 0;

function postReply(id) {
	$('#id').val(id);
	$("#comment").focus();
}

	$(document).ready(function () {
		listComment();
	});
	
	function listComment() {
		$.post("comment-list.php",
			function (data) {
                var data = JSON.parse(data);
                console.log("aaaa",data);
	
				var comments = "";
				var replies = "";
				var item = "";
				var parent = -1;
				var results = new Array();
	
				var list = $("<ul class='outer-comment'>");
				var item = $("<li>").html(comments);
	
				for (var i = 0;
					(i < data.length); i++) {
					var id = data[i]['id'];
					parent = data[i]['parent_id'];
					// console.log("aaa=>",data[i]);
	
					//var obj = getLikesUnlikes(id);
	
					if (parent == "0") {
						user_icon = "<img src='../../assets/images/comments.png'   id='img_comment" + 
						"' class='head-avatar3'  />";
						comments =
							"\
											<div class='comment-row'>\
												<div class='comment-info'>\
												<span class='comment_img'>" +
												user_icon + "&ensp;\
							</span>\
													<span class='posted-by'>" +
							data[i]['firstname']+ "&nbsp; "+  data[i]['lastname'] +
							"</span>\
													<span class='commet-row-label'>at</span> \
													<span class='posted-at'>" +
							data[i]['comment_date'] +
							"</span>\
												</div>\
												<div class='comment-text'>" +
							data[i]['comment'] +
							"</div>\
												<div>\
													<a class='btn-reply' onClick='postReply(" +
													data[i]['id'] +
							")'>Reply</a>\
												</div>\
											</div>";
	
						var item = $("<li>").html(comments);
						list.append(item);
						var reply_list = $('<ul>');
						item.append(reply_list);
						listReplies(id, data, reply_list);
					}	
				}
				$("#output").html(list);
			});
	}



function listReplies(id, data, list) {

	for (var i = 0;
		(i < data.length); i++) {

		//var obj = getLikesUnlikes(data[i].id);
		//console.log("aaa=>",data[i].parent_id);
		if (id == data[i].parent_id) {
			
			user_icon = "<img src='../../assets/images/comments.png'   id='img_comment" + 
						"' class='head-avatar3'  />";
			var comments =
				"\
                                        <div class='comment-row'>\
                                            <div class='comment-info'>\
											<span class='comment_img'>" +
											user_icon + "&ensp;\
						</span>\
                                                <span class='posted-by'>" +
												data[i]['firstname']+ "&nbsp; "+  data[i]['lastname'] +
				"</span>\
                                                <span class='commet-row-label'>at</span> \
                                                <span class='posted-at'>" +
				data[i]['comment_date'] +
				"</span>\
                                            </div>\
                                            <div class='comment-text'>" +
				data[i]['comment'] +
				"</div>\
                                            <div>\
                                                <a class='btn-reply' onClick='postReply(" +
				data[i]['id'] +
				")'>Reply</a>\
                                            </div>\
                                        </div>";

			var item = $("<li>").html(comments);
			var reply_list = $('<ul>');
			list.append(item);
			item.append(reply_list);
			listReplies(data[i].id, data, reply_list);
		}
	}
}