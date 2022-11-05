const url = "https://pokeapi.co/api/v2/generation/1/"

console.log(
    "valor del poke",
    $("#pokemon").data("poke"),
    $("#pokemon").data("entrenador")
    );


$.get(
    url, 
    function(datosQueVienenDesdeUrl){
    console.log(datosQueVienenDesdeUrl);
    /*
    const evolucionesNombre = [1,149,28]
    const evolucionesImg = [0,1,2]
    */
    const evoluciones = [
        {
            "nombre": "0",
            "imagen": "0"
        },
        {
            "nombre": "149",
            "imagen": "1"
        },
        {
            "nombre": "28",
            "imagen": "2"
        }
    ]
    console.log(evoluciones);
    let indice = parseInt($("#pokemon").data("poke"));
    console.log("indice", indice);
    let nombre = datosQueVienenDesdeUrl
    .pokemon_species

    $("#pokemon").html(
        `<img 
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${parseInt(evoluciones[indice].imagen) + 1}.png'
        >
        <h3>
            ${nombre[evoluciones[indice].nombre].name}
        </h3>`
    );

    $("#pokemon").click(
        function() {
            indice = indice == 2 ? indice : indice + 1
            //indice = indice + 1
            console.log("incremento el indice...", indice);
            $("#pokemon").html(
                `<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${parseInt(evoluciones[indice].imagen) + 1}.png'>
                <h3>${nombre[evoluciones[indice].nombre].name}</h3>`
            );
        }
    );

    $("#pokemon").hover(
        function() {
            $("#info").text("Si haces click, irá a su forma evolutiva final!")
        },
        function(){
            $("#info").text("")
        }
    );




    /* $("body")
    .html(
        datosQueVienenDesdeUrl
        .pokemon_species[0]
        .name)
 */
        //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
    /* $("body").text(JSON.stringify(datosQueVienenDesdeUrl)) */
})