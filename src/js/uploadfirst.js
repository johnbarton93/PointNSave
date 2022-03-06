$(document).ready(function(){
    function handleFileSelect(evt) {
    var file = evt.target.files; // FileList object
    var f = file[0];

    var reader = new FileReader();
    var out = this.parentNode.parentNode.querySelector('.output');

    var bgimg;
    
    // Closure to capture the file information.
    reader.onload = (function(theFile) {
        return function(e) {
            // Render thumbnail.
            var div = document.createElement('div');

            div.innerHTML = ['<img class="thumb" title="', escape(theFile.name), '" src="', e.target.result, '" />'].join('');
            
            if(out.id=='output') {
                /*alert('dfg');*/
              $('#output').find('img').remove();
              $('.template-logo').find('img').remove();
              $('.last-logo').find('img').remove();
/*
              $('#output').append(['<img class="thumb" title="', escape(theFile.name), '" src="', e.target.result, '" />'].join(''));
*/
              $('.template-logo').append(['<img class="thumb" title="', escape(theFile.name), '" src="', e.target.result, '" />'].join(''));
              $('.last-logo').append(['<img class="thumb" title="', escape(theFile.name), '" src="', e.target.result, '" />'].join(''));
            
              localStorage.setItem("logoinsert", ['<img class="thumb" title="', escape(theFile.name), '" src="', e.target.result, '" />'].join(''));
              cookies.set('logoins', ['<img class="thumb" title="', escape(theFile.name), '" src="', e.target.result, '" />'].join(''));
            } else if(out.id=='output2') {

                $('#output2').find('img').remove();
                $('.tbg').css('background-image','url('+e.target.result+')');
              /*
                $('#output2').append(['<img class="thumb" title="', escape(theFile.name), '" src="', e.target.result, '" />'].join(''));
                */
                bgimg = e.target.result;
                localStorage.setItem("bg", bgimg);
                localStorage.setItem("bg2", ['<img class="thumb" title="', escape(theFile.name), '" src="', e.target.result, '" />'].join(''));
            } else if(out.id=='outputlogo') {
            
                $('.small-logo').find('img').remove();
                $('.small-logo').append(['<img class="thumb" title="', escape(theFile.name), '" src="', e.target.result, '" />'].join(''));
                localStorage.setItem("applogo", ['<img class="thumb" title="', escape(theFile.name), '" src="', e.target.result, '" />'].join(''));
            }

            out.insertBefore(div, null);
            $('#name-file').text(theFile.name);
        };
    })(f);
    // Read in the image file as a data URL.
    reader.readAsDataURL(f);
    }
    

    $('#output').find('img').remove();
    $('#output2').find('img').remove();
    
    if(localStorage.getItem("applogo")) {
      $('.small-logo').find('img').remove();
    } else {
        $('.small-logo').append('<img src="img/logo2.jpg" alt="logo 2" />');
    }

    $('.template-logo').find('img').remove();
    $('.last-logo').find('img').remove();

    /*$('#output').append(cookies.get('logoins'));*/
    $('#output').append(localStorage.getItem("logoinsert"));
    $('#output2').append(localStorage.getItem("bg2"));
    $('.small-logo').append(localStorage.getItem("applogo"));
    $('.last-logo').append(localStorage.getItem("logoinsert"));
    /*$('.template-logo').append(cookies.get('logoins'));*/
    $('.template-logo').append(localStorage.getItem("logoinsert"));

    if(localStorage.getItem("bgorimg")=='0') {
      $('.tbg').css('background-image','url('+localStorage.getItem("bg")+')');
      $('#color1').css('background-color','transparent');
    } 

    document.getElementById('file3').addEventListener('change', handleFileSelect, false);
   
   
});