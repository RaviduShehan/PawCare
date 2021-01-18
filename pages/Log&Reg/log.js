
$(function () {

    $('#logc').on('submit', function (ev) {
        if ($(this).valid()) {
             
            ev.preventDefault();
                   
          window.location.href ="../../pages/HomePage/index.html";
            
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
            
            email: {
                required: 'Email address is required'
            },
            password: {
                required: 'Password is required'
                
            }
        }
    });

});