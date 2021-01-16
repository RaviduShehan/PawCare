$(function () {

  $('#log').on('submit', function (ev) {
    if ($(this).valid()) {
      alert('Confirmed');
      ev.preventDefault();

      window.location.href = "../../pages/Log&Reg/login.html";

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