$(function () {

  $('#registration').on('submit', function (ev) {
      if ($(this).valid()) {
          ev.preventDefault();

          if (confirm("Confirm Registration") == true) {
            window.location.href = "../../pages/Game/game1.html";
          } else {
            window.location.href = "../../pages/Log&Reg/login.html";
          }
          
          
      }
  }).validate({
      errorClass: 'mbsc-err-msg',
      errorPlacement: function (error, element) {
          element.parent().append(error);
      },
      highlight: function (element) {
          $(element).closest('.mbsc-input').addClass("mbsc-err");
      },
      unhighlight: function (element) {
          $(element).closest('.mbsc-input').removeClass("mbsc-err");
      },

      
      messages: {
          username: {
              required: 'Username is required.',
          },
          
          mobile: {
              required: 'Mobile number required',
              minlength: $.validator.format('Has to be only {0} characters'),
              maxlength: $.validator.format('Has to be only {0} characters')
          },
          email: {
              required: 'Email address is required',
              email: 'Invalid email address'
          },
          password: {
              required: 'Password is required',
              minlength: $.validator.format('Has to be at least {0} characters')
          },

          confirm: {
            required: 'Password is required',
        
        }

          
      }
  });

});


















/*let auth = firebase.auth();
let storeRef = firebase.storage().ref();

$(function() {
    $("#footer").load("../../components/footer.html");
    $("#navigation-bar").load("../components/navigationBar.html");
    $("#header").load("../components/header.html");

});

//Page Navigation
$(document).on("click", "#home-icon", function() {
    window.location.href = "../../pages/Log&Reg/login.html";
});

$(document).on("click", "#star-icon", function() {
    window.location.href = "../../pages/Log&Reg/login.html";
});

$(document).on("click", "#camera-icon", function() {
    window.location.href = "../../pages/Log&Reg/register.html";
});

$(document).on("click", "#train-icon", function() {
    window.location.href = "../../pages/Log&Reg/register.html";
});

$(document).on("click", "#settings-icon", function() {
    window.location.href = "../../pages/Log&Reg/register.html";
});


$(function() {


  $("#signup-btn").click(function() {
    let imgFile = document.getElementById("file-upload").files[0];
    let imgUpl = storeRef.child("avatars/" + imgFile.name).put(imgFile);
    let imgurl;

    $("#signup-btn").css("display", "none");
    $(".load-ellipsis").css("display", "block");

    imgUpl
      .then(snap => snap.ref.getDownloadURL())
      .then(url => {
        imgurl = url;
        auth
          .createUserWithEmailAndPassword(
            $("#email-input").val(),
            $("#password-input").val()
          )
          .then(user => {
            let authUser = auth.currentUser;
            let value = {
              displayName: $("#full-name").val(),
              photoURL: imgurl
            };
            authUser
              .updateProfile(value)
              .then(function() {
                window.location.href = "../../pages/Log&Reg/login.html";
              })
              .catch(function(error) {
                alert(error);
              });
          })
          .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
          });
      });
  });

  $("#login-btn").click(function() {
    if (!$("#email-input").val()) {
      $("#email-input").css("border", "0.5px solid #CD4D4D");
      $(".email-error-label").css("display", "block");
      return;
    } else if (!$("#password-input").val()) {
      $("#pasword-input").css("border", "0.5px solid #CD4D4D");
      $(".pw-error-label").css("display", "block");
      return;
    }

    $("#login-btn").css("display", "none");
    $(".load-ellipsis").css("display", "block");
    firebase
      .auth()
      .signInWithEmailAndPassword(
        $("#email-input").val(),
        $("#password-input").val()
      )
      .then(() => {
        window.location.href = "/pages/NewsFeed/game2.html";
      })
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  });
});

//Send email function to export favourites list
function sendEmail() {
  // getting the value of the send email modal inputs
  var receiver = document.getElementById("email-to").value;
  Email.send({
    Host: "smtp.gmail.com",
    Username: "trainbuddytest@gmail.com",
    Password: "Buddy678",
    To: receiver,
    From: "trainbuddytest@gmail.com",
    Subject: "Verification Code",
    Body: "1234"
  }).then(() => {
    $("#forgotpassword1-page").css("display", "none");
    $("#forgotpassword2-page").css("display", "block");
  });
} */
