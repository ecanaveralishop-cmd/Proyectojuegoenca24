
// referencia al btn iniciar esperado evento click ejecuta
$(".iniciar").on("click",function(){
    // animacion al boton de desvanecer en 5 segundos
    // cuando termina la animacion ejecuta funcion anonima
    $(this).fadeOut(5000,function(){
        // muestra la presentacion
        $(".presentacion").fadeIn("fast");
    });
});