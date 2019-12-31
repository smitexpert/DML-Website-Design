// $(".sm-responsive-nav").find('ul').append('<li id="sm-nav-collaps"><i class="fas fa-bars"></i></li>');

$(window).on('load', function(){
    $('body').css('display', 'block');
});

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

$("#show-mobile-contact").click(function(e){
    e.preventDefault();
    if(!$("#mobile-contact-show").hasClass('show')){
        $("#mobile-contact-show").addClass('show');
    }else{
        $("#mobile-contact-show").removeClass('show');
    }
})

$(document).mouseup(function(e) 
{
    var container = $("#mobile-contact-show");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.removeClass('show');
    }
});

// $(".nav-contact-menu ul li").hover(function(){
//     $(".drop-down").css('display', 'block');
//     $(".drop-down").addClass('fadeInDown animated');
// });