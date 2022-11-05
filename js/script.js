

$("img.ojo").click(
    function(){
        if (
            $("#contrasña").attr("type") == 'password'
        ) {
            $("#contrasña").attr("type",'text')
            $("img.ojo").addClass("logo-img")
        } else {
            $("#contrasña").attr("type",'password')
            $("img.ojo").removeClass("logo-img")
        }
    }
)












/*setTimeout(function(){
    var $ = jQuery
    jQuery("#uno").text('Cambiar contenido')

    $(".test").html("<img class='test2'  src='https://jquery.com/jquery-wp-content/themes/jquery/content/donate.png'>")

    $(".test2").before("<div class='jquery'>Otro mas</div>")

    $(".perro.animal").html("<img src='https://www.fundacion-affinity.org/sites/default/files/los-10-sonidos-principales-del-perro.jpg'>")

    $(".perro.animal img")
    .addClass('img-responsive')

    $("body")
    .css("background-color","red")
    .css("color", "#fff")

}, 3000)*/



