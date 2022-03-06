$(document).ready(function(){

 $('.colors-picker').spectrum({
        allowEmpty:true,
        showInitial: true,
        showInput: true,
        locale: "fr",
        chooseText: "OK!",
      });


      if(localStorage.getItem("bgorimg")=='1') {
         $( ".tbg" ).css('background',cookies.get('mainbg'));
         $( "#color1" ).css('background-color',cookies.get('mainbg'));
         $('#output2').find('img').remove();
      }

      $( "#color2" ).css('background-color',cookies.get('tab1Color'));
      $('.tab1-square').css('background-color',cookies.get('tab1Color'));

      $( "#color3" ).css('background-color',cookies.get('tab2Color'));
      $('.tab2-square').css('background-color',cookies.get('tab2Color'));

      $( "#color4" ).css('background-color',cookies.get('tab3Color'));
      $('.tab3-square').css('background-color',cookies.get('tab3Color'));

      $( "#color5" ).css('background-color',cookies.get('tab4Color'));
      $('.tab4-square').css('background-color',cookies.get('tab4Color'));

      $( "#text-color1" ).css('background-color',cookies.get('text-color1'));
      $('.tab1').css('color',cookies.get('text-color1'));

      $( "#text-color2" ).css('background-color',cookies.get('text-color2'));
      $('.tab2').css('color',cookies.get('text-color2'));

      $( "#text-color3" ).css('background-color',cookies.get('text-color3'));
      $('.tab3').css('color',cookies.get('text-color3'));

      $( "#text-color4" ).css('background-color',cookies.get('text-color4'));
      $('.tab4').css('color',cookies.get('text-color4'));

      $( "#color1" ).change(function() {
        $(this).css('background-color',$(this).val());
        $('.tbg').css('background',$(this).val());
        $('#output2').find('img').remove();
        cookies.set('mainbg', $(this).val());
        localStorage.setItem('bgorimg', 1);
      });

      $( "#color2" ).change(function() {
        $(this).css('background-color',$(this).val());
        $('.tab1-square').css('background-color',$(this).val());

        cookies.set('tab1Color', $(this).val());
      });

      $( "#color3" ).change(function() {
        $(this).css('background-color',$(this).val());
        $('.tab2-square').css('background-color',$(this).val());

        cookies.set('tab2Color', $(this).val());
      });

      $( "#color4" ).change(function() {
        $(this).css('background-color',$(this).val());
        $('.tab3-square').css('background-color',$(this).val());

        cookies.set('tab3Color', $(this).val());
      });

      $( "#color5" ).change(function() {
        $(this).css('background-color',$(this).val());
        $('.tab4-square').css('background-color',$(this).val());

        cookies.set('tab4Color', $(this).val());
      });

      $( "#text-color1" ).change(function() {
        $(this).css('background-color',$(this).val());
        $('.tab1').css('color',$(this).val());

        cookies.set('text-color1', $(this).val());
      });

      $( "#text-color2" ).change(function() {
        $(this).css('background-color',$(this).val());
        $('.tab2').css('color',$(this).val());

        cookies.set('text-color2', $(this).val());
      });

      $( "#text-color3" ).change(function() {
        $(this).css('background-color',$(this).val());
        $('.tab3').css('color',$(this).val());

        cookies.set('text-color3', $(this).val());
      });

      $( "#text-color4" ).change(function() {
        $(this).css('background-color',$(this).val());
        $('.tab4').css('color',$(this).val());

        cookies.set('text-color4', $(this).val());
      });
});