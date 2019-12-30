// $(".sm-responsive-nav").find('ul').append('<li id="sm-nav-collaps"><i class="fas fa-bars"></i></li>');

$("#header_nav").smNavMenu();

$("#tarcking").click(function(){
    $(".dml-banner-search label").addClass('label');
})

$("#tarcking").focusout(function(){
    var data = $(this).val();
    if(data == ""){
        $(".dml-banner-search label").removeClass('label');
    }
})

$(".contact-show-btn").click(function(e){
    e.preventDefault();
    // $(".drop-down").css('margin-right', '0px');
    $(".drop-down").addClass('show');
    $(".close-menu").addClass('show');
    $(".contact-show-btn").addClass('hide');
})

$(".close-menu").click(function(e){
    e.preventDefault();
    $(".drop-down").removeClass('show');
    $(".close-menu").removeClass('show');
    $(".contact-show-btn").removeClass('hide');
})


$("#show-mobile-nav").click(function(e){
    e.preventDefault();
    $("#sm-mobile-nav").addClass('show');
})

$(".mobile-nav-close-btn").click(function(e){
    e.preventDefault();
    $("#sm-mobile-nav").removeClass('show');
})

// $(".nav-contact-menu ul li").hover(function(){
//     $(".drop-down").css('display', 'block');
//     $(".drop-down").addClass('fadeInDown animated');
// });