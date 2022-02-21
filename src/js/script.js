$(document).ready(function(){
  $("body").on('click', '[href*="#"]', function(e){
    var fixed_offset = 0;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
  });

  /*promt begin*/
  $('.prompt').on('click', function(e) {
      if($(this).hasClass('sel')) {
        $(this).removeClass('sel');
        $(this).parent('.funcs').parent('.line').find('.information').removeClass('show');
      } else {
        $('.information').removeClass('show');
        $('.prompt').removeClass('sel');
        $(this).addClass('sel');
        $(this).parent('.funcs').parent('.line').find('.information').addClass('show');
      }
      /*
      $(this).toggleClass('sel');
      $(this).parent('.funcs').parent('.line').find('.information').toggleClass('show');*/
  });
  /*promt end*/

  $('#menu-after').on('click', function(e) {
      document.getElementById("menu-tabs").style.left = "0";
  });

   $('#closenav').on('click', function(e) {
     document.getElementById("menu-tabs").style.left = "-100%";
  });

  /*choose the template BEGIN*/
  $('.choose').on('click', function(e) {
     cookies.set('templateId', $(this).attr('id'));
     cookies.set('templateName', $(this).find('.title').text());
  });

  var templateId = cookies.get('templateId');
  var templateName = cookies.get('templateName');

  $('#' + templateId + '-cont').addClass('show');
  $('.' + templateId + '-cont').addClass('show');
  $('.chtitle').text(templateName);
/*
  if(templateId=='template3') {
    $('.tabinp').attr('maxlength','19');
  } else if(templateId=='template4') {
    $('.tabinp').attr('maxlength','10');
  }*/

  if(templateId=='template3') {
    $(".tabinp").each(function(index) {
      if($(this).attr('id')!='tab30') {
        $('.tabinp').attr('maxlength','19');
      }
    });
  } else if(templateId=='template4') {
    $(".tabinp").each(function(index) {
      if($(this).attr('id')!='tab30') {
        $('.tabinp').attr('maxlength','10');
      }
    });
  }
  /*choose the template END*/

  /*tab text* BEGIN*/
  
  var tab1Text = 'Tab 1';
  var tab2Text = 'Tab 2';
  var tab3Text = 'Tab 3';
  var tab4Text = 'Tab 4';
  var tab5Text = 'Events';
  var tab6Text = 'Event Details';
  var tab7Text = 'Call Us';
  var tab8Text = 'Register';
  var tab9Text = 'add to calendar';
  var tab10Text = 'Map';
  var tab11Text = 'Restaurants & Bars';

  var tab12Text = 'Call us';
  var tab13Text = 'visit website';
  var tab14Text = 'video';

  var tab15Text = 'Directory Category';
  var tab16Text = 'Directory Categories';

  var tab17Text = 'SIGN UP';
  var tab18Text = 'Register as';

  var tab19Text = 'first name';
  var tab20Text = 'last name';
  var tab21Text = 'email';
  var tab22Text = 'password';
  var tab23Text = 'zip code';

  var tab24Text = 'Board Of Directors';
  var tab25Text = 'Businers Professionals';
  var tab26Text = 'LEAD Alumni';
  var tab27Text = 'Governmant / Military';
  var tab28Text = 'Student';
  var tab29Text = 'Other';
  var tab30Text = 'Appliation Name here';

  var tab31Text = 'COMMUNITY GUIDE';
  var tab32Text = 'RESOURCES INFORMATION';
  var tab33Text = 'Call Us';
  var tab34Text = 'Visit Our Website';
  var tab35Text = 'Washington Small Business Development Center';
  var tab36Text = 'The Washington Small Business Development Center (WSBDC) has advisors that can provide one-to-one assistance to help you think through your options and make informed decisions. Find business resiliency workbooks, webinars and business resources related to protecting your';


  $('.tabtext').keyup(function(){
    var attrper = $(this).attr('id');
    var str = $(this).attr('id') + 'Text';
    cookies.set(str, $(this).val());
    var myVar = eval(str);
    myVar = cookies.get(str);

    cookies.set(str + 'clickInp', '1');

    $('.' + $(this).attr('id')).text(myVar);
  });


  $( '.tabtext' ).focusout(function(){ 
    if($(this).val()=='') {
      var strnew3 = $(this).attr('id') + 'Text';
      var varnew3 = eval(strnew3);

      $(this).val(varnew3);
      $('.' + $(this).attr('id')).text(varnew3);
      tab1Text = cookies.set(strnew3, varnew3);
    }
  });

  for (let i = 1; i <= 36; i++) { 
     var strnew = String('tab' + i + 'Text');
     var varnew = eval(strnew);
     varnew = cookies.get(strnew);
 
     if(varnew) {
       $('.tab' + i).text(varnew);
       $('#tab' + i).val(varnew);
     } else {
       $('.tab' + i).text(eval(strnew));
       $('#tab' + i).val(eval(strnew));
     }
  }

/*
  $(".tabtext").each(function(index) {
     var strnew = $(this).attr('id') + 'Text';
     var varnew = eval(strnew);
     varnew = cookies.get(strnew);
 
     if(varnew) {
       $('.' + $(this).attr('id')).text(varnew);
       $('#' + $(this).attr('id')).val(varnew);
     } else {
       $('.' + $(this).attr('id')).text(eval(strnew));
       $('#' + $(this).attr('id')).val(eval(strnew));
     }
  });
*/


/*delete BEGIN*/

$('.delicon').on('click', function(e) {
  var lineid = $(this).parent('.funcs').parent('.line').find('.tabinp').attr('id');
  var sotsid = $(this).attr('id');

  if(!$(this).hasClass('sel')) {
    $(this).addClass('sel');
    $('.' + lineid + '-square').addClass('hide');

    $('#' + sotsid + '-square').addClass('hide');

    cookies.set(lineid + 'del', '1');
    cookies.set(sotsid + 'del', '1');

  } else if($(this).hasClass('sel'))  {
    $(this).removeClass('sel');
    $('.' + lineid + '-square').removeClass('hide');
    cookies.set(lineid + 'del', '0');

    $('#' + sotsid + '-square').removeClass('hide');
    cookies.set(sotsid + 'del', '0');
  }
});

  var tab1del = cookies.get('tab1del');
  var tab2del = cookies.get('tab2del');
  var tab3del = cookies.get('tab3del');
  var tab4del = cookies.get('tab4del');

  var facebookdel = cookies.get('facebookdel');
  var instagramdel = cookies.get('instagramdel');
  var twitterdel = cookies.get('twitterdel');
  var youtubedel = cookies.get('youtubedel');

  if(facebookdel==1) {
    $('#facebook-square').addClass('hide');
    $('#facebook').addClass('sel');
  } else if(facebookdel==0) {
    $('#facebook-square').removeClass('hide');
    $('#facebook').removeClass('sel');
  }

  if(instagramdel==1) {
    $('#instagram-square').addClass('hide');
    $('#instagram').addClass('sel');
  } else if(instagramdel==0) {
    $('#instagram-square').removeClass('hide');
    $('#instagram').removeClass('sel');
  }

  if(twitterdel==1) {
    $('#twitter-square').addClass('hide');
    $('#twitter').addClass('sel');
  } else if(twitterdel==0) {
    $('#twitter-square').removeClass('hide');
    $('#twitter').removeClass('sel');
  }

  if(youtubedel==1) {
    $('#youtube-square').addClass('hide');
    $('#youtube').addClass('sel');
  } else if(youtubedel==0) {
    $('#youtube-square').removeClass('hide');
    $('#youtube').removeClass('sel');
  }

  if(tab1del==1) {
    $('.tab1-square').addClass('hide');
    $('.del1').addClass('sel');
  } else if(tab1del==0) {
    $('.tab1-square').removeClass('hide');
    $('.del1').removeClass('sel');
  }

  if(tab2del==1) {
    $('.tab2-square').addClass('hide');
    $('.del2').addClass('sel');
  } else if(tab2del==0) {
    $('.tab2-square').removeClass('hide');
    $('.del2').removeClass('sel');
  }

  if(tab3del==1) {
    $('.tab3-square').addClass('hide');
    $('.del3').addClass('sel');
  } else if(tab3del==0) {
    $('.tab3-square').removeClass('hide');
    $('.del3').removeClass('sel');
  }

  if(tab4del==1) {
    $('.tab4-square').addClass('hide');
    $('.del4').addClass('sel');
  } else if(tab4del==0) {
    $('.tab4-square').removeClass('hide');
    $('.del4').removeClass('sel');
  }



  /*delete END*/


});


