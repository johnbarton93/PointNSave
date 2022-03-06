$(document).ready(function(){

	$('.colors-picker').spectrum({
        allowEmpty:true,
        showInitial: true,
        showInput: true,
        locale: "fr",
        chooseText: "OK!",
      });

      $( "#screen-color" ).change(function() {
        $(this).css('background-color',$(this).val());
        $('.block-button').css('background',$(this).val());
      
        cookies.set('screen-color', $(this).val());
      });


      $( "#color-btn" ).change(function() {
        $(this).css('background-color',$(this).val());
        $('.btn7').css('background-color',$(this).val());
        $('.btn8').css('background-color',$(this).val());
        $('.btn7').css('border','2px solid'+$(this).val());
        $('.btn8').css('border','2px solid'+$(this).val());

        $('.btn9').css('border','2px solid'+$(this).val());
        $('.btn9').css('color',$(this).val());
        $('.btn9').css('background-color','#fff');
      
        cookies.set('btncolor', $(this).val());
      });

      $( "#color-btn2" ).change(function() {
        $(this).css('background-color',$(this).val());
        $('.btn10').css('background-color',$(this).val());
        $('.btn11').css('background-color',$(this).val());
        $('.btn10').css('border','2px solid'+$(this).val());
        $('.btn11').css('border','2px solid'+$(this).val());

        $('.btn12').css('border','2px solid'+$(this).val());
        $('.btn12').css('color',$(this).val());
        $('.btn12').css('background-color','#fff');
      
        cookies.set('btncolor2', $(this).val());
      });

      $( "#color-btn13" ).change(function() {
        $(this).css('background-color',$(this).val());
        $('.block-button2').css('background',$(this).val());

        $('.col13').css('background-color',$(this).val());
        $('.col13').css('border','2px solid'+$(this).val());

        $('.col132').css('border','2px solid'+$(this).val());
        $('.col132').css('color',$(this).val());
        $('.col132').css('background-color','#fff');
      
        cookies.set('col13bg', $(this).val());
      });

       $( "#color-btn3" ).change(function() {
        $(this).css('background-color',$(this).val());
        $('.btnbg').css('background-color',$(this).val());
        $('.btnbg2 .btn').css('border','2px solid'+$(this).val());
        $('.btnbg2 .btn').css('background-color',$(this).val());
      
        cookies.set('btncolor3', $(this).val());
      });

      $('#color-btn').css('background-color',cookies.get('btncolor'));
        $('.btn7').css('background-color',cookies.get('btncolor'));
        $('.btn8').css('background-color',cookies.get('btncolor'));
        $('.btn7').css('border','2px solid'+cookies.get('btncolor'));
        $('.btn8').css('border','2px solid'+cookies.get('btncolor'));

        $('.btn9').css('border','2px solid'+cookies.get('btncolor'));
        $('.btn9').css('color',cookies.get('btncolor'));
        $('.btn9').css('background-color','#fff');

        $('#color-btn2').css('background-color',cookies.get('btncolor2'));
        $('#color-btn13').css('background-color',cookies.get('col13bg'));
        
        $('.btn10').css('background-color',cookies.get('btncolor2'));
        $('.btn11').css('background-color',cookies.get('btncolor2'));
        $('.btn10').css('border','2px solid'+cookies.get('btncolor2'));
        $('.btn11').css('border','2px solid'+cookies.get('btncolor2'));

        $('.btn12').css('border','2px solid'+cookies.get('btncolor2'));
        $('.btn12').css('color',cookies.get('btncolor2'));
        $('.btn12').css('background-color','#fff');

        $('#color-btn3').css('background-color',cookies.get('btncolor3'));
        $('.btnbg').css('background-color',cookies.get('btncolor3'));
        $('.btnbg2 .btn').css('border','2px solid'+cookies.get('btncolor3'));
        $('.btnbg2 .btn').css('background-color',cookies.get('btncolor3'));

        $('.col13').css('background-color',cookies.get('col13bg'));
        $('.col13').css('border','2px solid'+cookies.get('col13bg'));

        $('.col132').css('border','2px solid'+cookies.get('col13bg'));
        $('.col132').css('color',cookies.get('col13bg'));
        $('.col132').css('background-color','#fff');

        $('#screen-color').css('background-color',cookies.get('screen-color'));
        $('.block-button').css('background',cookies.get('screen-color'));
        $('.block-button2').css('background',cookies.get('col13bg'));
});