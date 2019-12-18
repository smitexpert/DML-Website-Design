(function($){
    $.fn.smNavMenu = function(){
        // var rightMenu = $(".sm-nav-right-menu ul").html();
        $(this).addClass('sm-responsive-nav');
        $(".sm-responsive-nav ul").prepend('<li class="toggle-menu"><a href="#">Menu</a><button id="sm-nav-collaps"><i class="fas fa-bars"></i></button></li>');
        $("#sm-nav-collaps").click(function(){
            $(".sm-responsive-nav ul li a").toggleClass("toggle");
        })
    }
})(jQuery)

