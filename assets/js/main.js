    
window.mobileCheck = function() {
      let check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
      return check;
    };
    
window.mobileAndTabletCheck = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};
            
$(function ($) {
  "use strict";

  jQuery(document).ready(function () {

    

    
    if(!window.mobileCheck()){
      const app = new SpeRuntime.Application();
      app.start('./scene.json');
    }
    
    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);


    let dob = '19991208';
    let year = Number(dob.substr(0, 4));
    let month = Number(dob.substr(4, 2)) - 1;
    let day = Number(dob.substr(6, 2));
    let today = new Date();
    let age = today.getFullYear() - year;
    if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
      age--;
    }
    $("#ageid").html(age);


    $(".toggle-icon").on("click", function () {
      $(".my-navbar").toggleClass("show");
      $(".mainmenu-area").toggleClass("show");
    });

    if (window.innerWidth > 991){
      $(".toggle-icon #nav-icon3").addClass("open");
      $(".my-navbar").toggleClass("show");
      $(".mainmenu-area").toggleClass("show");
    }


    $("#nav-icon3").click(function () {
      $(this).toggleClass("open");
    });

    $(".my-navbar .mynav-item").on("click", function (e) {
      if (!$(this).hasClass("active")) {
        var tabNum = $(this).index();
        var nthChild = tabNum + 2;
        $(".my-navbar .mynav-item").removeClass("active");
        $(this).addClass("active");
        $("#main > section.active").removeClass("active");
        $("#main > section:nth-child(" + nthChild + ")").addClass("active");

        if($(this).context.innerText == "HOME"){
          parallax.enable();
        }else{
          parallax.disable();
        }
      }
      e.preventDefault();
    });


    $("#home .pagelink3").on("click", function (e) {
      e.preventDefault();
      if (e.target.parentNode.id = "g-p-a-h") {
        $(".my-navbar .mynav-item").removeClass("active");
        $(".my-navbar .mynav-item.cv").addClass("active");
        $(".my-navbar .mynav-item .cv").addClass("active");
        
        $("#main > section.active").removeClass("active");
        $(".cv").addClass("active");
        parallax.disable();
        }
    });

    $("#home .pagelink2").on("click", function (e) {
      e.preventDefault();
      if (e.target.parentNode.id = "g-p-a-h") {
        $(".my-navbar .mynav-item").removeClass("active");
        $(".my-navbar .mynav-item.about").addClass("active");
        $(".my-navbar .mynav-item .about").addClass("active");
        
        $("#main > section.active").removeClass("active");
        $(".about").addClass("active");
        parallax.disable();
        }
    });
    $("#home .pagelink").on("click", function (e) {
      e.preventDefault();
      if (e.target.parentNode.id = "g-p-f-h") {
        $(".my-navbar .mynav-item").removeClass("active");
        $(".my-navbar .mynav-item.portfolio").addClass("active");
        $(".my-navbar .mynav-item .portfolio").addClass("active");
        
        $("#main > section.active").removeClass("active");
        $(".project-gallery").addClass("active");
        parallax.disable();
      }
    });



    //Mixitup js
    $(".project-gallery").mixItUp();

    /*Typed Activate*/
    var $typed = $("#typed");
    if ($typed.length > 0) {
      $typed.typed({
        strings: ["DÃ©veloppeur fullstack", "Ã‰tudiant ingÃ©nieur", "Crypto enthousiaste"],
        stringsElement: null,
        typeSpeed: 40,
        startDelay: 150,
        backSpeed: 10,
        backDelay: 400,
        loop: true,
        loopCount: 550,
        showCursor: true,
        cursorChar: "_",
        attr: null,
        contentType: "html",
      });
    }

    // statistics jquery circle progressbar initialization
    var $section = $("#statisticsSection");
    if ($section.length > 0) {
      $(".progress-circle").loading();
    }

    $(".lightbox").magnificPopup({
      type: "image",
    });

    $(".image-preview").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });

    // Ajax On Modal 
    /*
    $(".service-area-wrapper").each(function () {
      $(this).magnificPopup({
        delegate: ".service-modal:visible",
        type: "ajax",
        tLoading:
          '<div class="preloader"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>',
        mainClass: "mfp-fade",
        closeBtnInside: true,
        midClick: true,
        gallery: {
          enabled: true,
        },
      });
    });
    */

    $('.project-gallery-item').each(function() {
      $(this).magnificPopup({
        delegate: '.pp:visible',
          type: "ajax",
        tLoading: '<div class="preloader"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>',
        mainClass: "mfp-fade",
        closeBtnInside: true,
        midClick: true,
        gallery: {
            enabled: true,
          },
        callbacks: {
          ajaxContentAdded: function() {
            $(".owl-carousel").each(function (index) {
              var a = $(this);
              $(this).owlCarousel({
              autoplay: a.data('autoplay'),
              center: a.data('center'),
              autoplayTimeout: a.data('autoplaytimeout'),
              autoplayHoverPause: a.data('autoplayhoverpause'),
              loop: a.data('loop'),
              speed: a.data('speed'),
              nav: a.data('nav'),
              dots: a.data('dots'),
              autoHeight: a.data('autoheight'),
              autoWidth: a.data('autowidth'),
              margin: a.data('margin'),
              stagePadding: a.data('stagepadding'),
              slideBy: a.data('slideby'),
              lazyLoad: a.data('lazyload'),
              navText:['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
              animateOut: a.data('animateOut'),
              animateIn: a.data('animateIn'),
              video: a.data('video'),
              items: a.data('items'),
              responsive:{
                0:{items: a.data('items-xs'),},
                576:{items: a.data('items-sm'),},
                768:{items: a.data('items-md'),},
                992:{items: a.data('items-lg'),}
              }	
                      });
                  });
              }
          }
      });
	  

	});

  $(window).on('load', function () {
    /*Preloader*/
    var preLoder = $("#preloader");
    preLoder.addClass('hide');
  });




});
});
