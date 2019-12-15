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