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
              $('#output').find('img').remove();
              $('.template-logo').find('img').remove();
              $('.last-logo').find('img').remove();

              $('.template-logo').append(['<img class="thumb" title="', escape(theFile.name), '" src="', e.target.result, '" />'].join(''));
              $('.last-logo').append(['<img class="thumb" title="', escape(theFile.name), '" src="', e.target.result, '" />'].join(''));
            
              localStorage.setItem("logoinsert", ['<img class="thumb" title="', escape(theFile.name), '" src="', e.target.result, '" />'].join(''));
              cookies.set('logoins', ['<img class="thumb" title="', escape(theFile.name), '" src="', e.target.result, '" />'].join(''));
            } else if(out.id=='output2') {
                $('#output2').find('img').remove();
                $('.tbg').css('background-image','url('+e.target.result+')');
              
                bgimg = e.target.result;
                localStorage.setItem("bg", bgimg);
                localStorage.setItem("bg2", ['<img class="thumb" title="', escape(theFile.name), '" src="', e.target.result, '" />'].join(''));
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
    $('.template-logo').find('img').remove();
    $('.last-logo').find('img').remove();

    /*$('#output').append(cookies.get('logoins'));*/
    $('#output').append(localStorage.getItem("logoinsert"));
    $('#output2').append(localStorage.getItem("bg2"));
    $('.last-logo').append(localStorage.getItem("logoinsert"));
    /*$('.template-logo').append(cookies.get('logoins'));*/
    $('.template-logo').append(localStorage.getItem("logoinsert"));

    $('.tbg').css('background-image','url('+localStorage.getItem("bg")+')');


    document.getElementById('file').addEventListener('change', handleFileSelect, false);
    document.getElementById('file2').addEventListener('change', handleFileSelect, false);
   
   
});