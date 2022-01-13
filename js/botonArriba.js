$(document).ready(function(){ //Todo lo que escribamos aquí adentro e va a ejecutar cuando allá cargado el documento

    //Al presionar el botón nos lleve hacía la parte de arriba
    $('.hacia-arriba').click(function(){
        $('body, html').animate({
            scrollTop: '0px'
        }, 300);
    }); //Accedemos al botón

    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
            $('.hacia-arriba').slideDown(200);
        } else{
            $('.hacia-arriba').slideUp(200);
        }
    }); //Cuando bajemos que muestre el botón

    const form = document.getElementById("form");

    form.addEventListener("submit", function(event){
        form.reset();
    });
});