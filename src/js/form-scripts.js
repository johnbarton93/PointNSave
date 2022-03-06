$("#contactForm").on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
       // submitMSG(false, "Did you fill in the form properly?");
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
});

 $('.button-form').on('click', function(e) {

    var email = $('#email').val();
    var phone = $('#phone').val();
    var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
    var pattern2 = /^\d+$/;

   /* if($('#phone').val() != '') {
        if(pattern2.test(phone)) {
           $('#phone').css('border', '1px solid #a1b2bd');  
        } else {
           $('#phone').css('border', '1px solid red');
        }
      }*/

    $(".req").each(function(index) {
        if ($(this).val() == '') {
            $(this).css('border', '1px solid red');
            $(this).parent('.checkbox-block').find('.checkmark').css('border', '1px solid red');
        } else {
            if($(this).attr('id')=='email') {
                if(pattern.test(email)) {
                   $('#email').css('border', '1px solid #a1b2bd');  
                 } else {
                   $('#email').css('border', '1px solid red');
                }
            } else if($(this).attr('id')=='phone') {
                if(pattern2.test(phone)) {
                   $('#phone').css('border', '1px solid #a1b2bd');  
                } else {
                   $('#phone').css('border', '1px solid red');
                }
            }
            else {
              $(this).css('border', '1px solid #a1b2bd');
              $(this).parent('.checkbox-block').find('.checkmark').css('border', '1px solid #a1b2bd');
            }
        }
    });
           
});

function submitForm(){
    // Initiate Variables With Form Content
    var firstname = $("#firstname").val(),
        lastname = $("#lastname").val(),
        email = $("#email").val(),
        phone = $("#phone").val(),
        desiredoffering = $("#desiredoffering").val(),
        city = $("#city").val(),
        capacity2 = $("#capacity2").val(),
        quote = $("#quote").val(),
        message = $("#message").val(),
        captcha = $("#captcha").val();
  

    $.ajax({
        type: "POST",
        url: "php/form-process.php",
        data: "&firstname=" + firstname + "&lastname=" + lastname + "&email=" + email 
        + "&phone=" + phone + "&desiredoffering=" + desiredoffering + "&city=" + city 
        + "&capacity2=" + capacity2 + "&quote=" + quote + "&message=" + message + "&captcha=" + captcha,
        success : function(text){
            if (text == "success"){
                formSuccess();
            } else {
                formError();
                submitMSG(false,text);
            }
        }
    });
}

function formSuccess(){
    $("#contactForm")[0].reset();
    submitMSG(true, "Thank you. We'll contact you soon!")
}

function formError(){
    $("#contactForm").removeClass().addClass('shake animated form-block').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function submitMSG(valid, msg){
    if(valid){
        var msgClasses = "h3 tc text-success";
    } else {
        var msgClasses = "h3 tc text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}