  
//   let feedback = {};
//   $(() => {
// 	$("#submit").click(() => {
// 	  addFeedback();
// 	  alert("Sent Successfully!");
// 	});
//   });
  
//   function addFeedback() {
// 	dbRef
// 	  .ref("feedbacks")
// 	  .push()
// 	  .set(
// 		{
// 		  name: $("#full-name").val(),
// 		  message: $("#message").val()
// 		},
// 		error => {
// 		  if (error) {
// 			alert(error);
// 		  }
// 		}
// 	  );
// 	}

	// const track = document.querySelector('.track');
	// let initialPosition = null;
	// let moving = false;
	// let transform = 0;
	
	// const gestureStart = (e) => {
	//   initialPosition = e.pageX;
	//   moving = true;
	//   const transformMatrix = window.getComputedStyle(track).getPropertyValue('transform');
	//   if (transformMatrix !== 'none') {
	// 	transform = parseInt(transformMatrix.split(',')[4].trim());
	//   }
	// }
	
	// const gestureMove = (e) => {
	//   if (moving) {
	// 	const currentPosition = e.pageX;
	// 	const diff = currentPosition - initialPosition;
	// 	track.style.transform = `translateX(${transform + diff}px)`;  
	//   }
	// };
	
	// const gestureEnd = (e) => {
	//   moving = false;
	// }
	
	// if (window.PointerEvent) {
	//   window.addEventListener('pointerdown', gestureStart);
	
	//   window.addEventListener('pointermove', gestureMove);
	
	//   window.addEventListener('pointerup', gestureEnd);  
	// } else {
	//   window.addEventListener('touchdown', gestureStart);
	
	//   window.addEventListener('touchmove', gestureMove);
	
	//   window.addEventListener('touchup', gestureEnd);  
	  
	//   window.addEventListener('mousedown', gestureStart);
	
	//   window.addEventListener('mousemove', gestureMove);
	
	//   window.addEventListener('mouseup', gestureEnd);  
	// }

	
var totalLikes = 0;
var totalUnlikes = 0;

function postReply(commentId) {
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
	
					var obj = getLikesUnlikes(id);
	
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

		var obj = getLikesUnlikes(data[i].id);
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

	function getLikesUnlikes(id) {

		$.ajax({
			type: 'POST',
			async: false,
			url: 'get-like-unlike.php',
			data: {
				id: id
			},
			success: function (data) {
				totalLikes = data;
			}
	
		});
	
	}

	
	
	
	
	
  