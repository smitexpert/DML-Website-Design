(function($){
    $.fn.smNavMenu = function(){
        $(this).addClass('sm-responsive-nav');
        $(".sm-responsive-nav ul").prepend('<li class="toggle-menu"><a href="#">Menu</a> <button id="sm-nav-collaps"><i class="fas fa-bars"></i></li>');
        $("#sm-nav-collaps").click(function(){
            $(".sm-responsive-nav ul li a").toggleClass("toggle");
        })
    }
})(jQuery)