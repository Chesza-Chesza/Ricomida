$(document).ready(function() {
    $("#enviarCorreo").click(function() {
        alert("El correo fue enviado correctamente")
    })
    $('.carousel').carousel()
    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    })
    $('.ingredients').dblclick(function() {
        $(this).css("color", "red")
    })
    $('.preparation').dblclick(function() {
        $(this).css("color", "red")
    })
    $('.card-1').click(function() {
        $('.card-11').toggle()
    })
    $('.card-2').click(function() {
        $('.card-22').toggle()
    })
    $('.card-3').click(function() {
        $('.card-33').toggle()
    })
})