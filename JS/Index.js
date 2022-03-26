let numPregunta = 1;

let textoPregunta = document.getElementById("pregunta");
let respuestasTexto = document.getElementsByClassName("respuestasTexto");
let boton = document.getElementsByClassName("botonRespuestas");
let botonContinuar = document.getElementById("botonContinuar");

let respuestaUsuario;
let numRespuestasCorrectas = 0;
let numRespuestasIncorrectas = 0;

let retroalimentacion = "";

let preguntasArray = 
    ["¿Cuál es el nombre real de BAD BUNNY?",
    "¿Cuál de estos artistas latinos han alcanzado un Grammy?",
    "¿Qué Artista femenina del genero urbano, se encuentra en embarazo?",
    "¿Con que famoso se encuentra casada Shakira?",
    "¿Cúal es el nombre de la ultima gira de Daddy Yankee?"
    ];
cambiarPregunta();
cambiarRespuestas();

//PARA CAMBIAR LAS PREGUNTAS
function cambiarPregunta(){

    if(numPregunta == 1){
        textoPregunta.innerHTML = preguntasArray[0];
    }else if(numPregunta == 2){
        textoPregunta.innerHTML = preguntasArray[1];
    }else if(numPregunta == 3){
        textoPregunta.innerHTML = preguntasArray[2];
    }else if(numPregunta == 4){
        textoPregunta.innerHTML = preguntasArray[3];
    }else if(numPregunta == 5){
        textoPregunta.innerHTML = preguntasArray[4];
    }
        
}

//PARA CAMBIAR LAS RESPUESTAS
function cambiarRespuestas(){
    if(numPregunta == 1){
        respuestasTexto[0].innerHTML = "Juan Luis Londoño Arias"
        respuestasTexto[1].innerHTML = "Nick Rivera Caminero"
        respuestasTexto[2].innerHTML = "William Omar Landrón Rivera"
        respuestasTexto[3].innerHTML = "Benito Antonio Martínez Ocasio"
    }else if(numPregunta == 2){
        respuestasTexto[0].innerHTML = "J Alvarez"
        respuestasTexto[1].innerHTML = "Juanes"
        respuestasTexto[2].innerHTML = "Paola Jara"
        respuestasTexto[3].innerHTML = "Sebastian Yatra"
    }else if(numPregunta == 3){
        respuestasTexto[0].innerHTML = "Karol G"
        respuestasTexto[1].innerHTML = "Baby G"
        respuestasTexto[2].innerHTML = "Greeicy Rendon"
        respuestasTexto[3].innerHTML = "Natti Natasha"
    }else if(numPregunta == 4){
        respuestasTexto[0].innerHTML = "Gerard piqué"
        respuestasTexto[1].innerHTML = "Silvestre Dangon"
        respuestasTexto[2].innerHTML = "Rafael Novoa"
        respuestasTexto[3].innerHTML = "Rafael Nadal"
    }else if(numPregunta == 5){
        respuestasTexto[0].innerHTML = "The World Tour"
        respuestasTexto[1].innerHTML = "La Última Vuelta Tour"
        respuestasTexto[2].innerHTML = "The Big Boss"
        respuestasTexto[3].innerHTML = "La Gasolina Tour"
    }
}

//PARA SABER SI ESTÁ BIEN O MAL
function verificarRespuesta(){

    if(numPregunta == 1 && respuestaUsuario == "D"){
        
        console.log("BIEEN");
        numPregunta++;
        retroalimentacion = "Excelente!"
        abrirVentana();
        respuestaCorrecta();

    }else if(numPregunta == 1 && respuestaUsuario != "D"){

        console.log("MAL");
        numPregunta++;
        retroalimentacion = "Lo siento, la respuesta era <br> \"Benito Antonio Martínez Ocasio\" "
        abrirVentana();
        respuestaIncorrecta();
        
    }else if(numPregunta == 2 && respuestaUsuario == "B"){

        console.log("BIEEN");
        numPregunta++;
        retroalimentacion = "Excelente!"
        abrirVentana();
        respuestaCorrecta();

    }else if(numPregunta == 2 && respuestaUsuario != "B"){
        
        console.log("MALLL");
        numPregunta++;
        retroalimentacion = "Lo siento, la respuesta era <br> \"Juanes\""
        abrirVentana();
        respuestaIncorrecta();

    }else if(numPregunta == 3 && respuestaUsuario == "C"){
        
        console.log("BIENN");
        numPregunta++;
        retroalimentacion = "Excelente!"
        abrirVentana();
        respuestaCorrecta();

    }else if(numPregunta == 3 && respuestaUsuario != "C"){
        
        console.log("MALLL");
        numPregunta++;
        retroalimentacion = "Lo siento, la respuesta era <br> \"Greeicy Rendon\""
        abrirVentana();
        respuestaIncorrecta();

    }else if(numPregunta == 4 && respuestaUsuario == "A"){
        
        console.log("BIENN");
        numPregunta++;
        retroalimentacion = "Excelente!"
        abrirVentana();
        respuestaCorrecta();

    }else if(numPregunta == 4 && respuestaUsuario != "A"){
        
        console.log("MALLL");
        numPregunta++;
        retroalimentacion = "Lo siento, la respuesta era <br> \"Gerard piqué\""
        abrirVentana();
        respuestaIncorrecta();

    }else if(numPregunta == 5 && respuestaUsuario == "B"){
        
        console.log("BIENN");
        numPregunta++;
        retroalimentacion = "Excelente!";
        abrirVentana();
        respuestaCorrecta();


    }else if(numPregunta == 5 && respuestaUsuario != "B"){
        
        console.log("MAALL");
        numPregunta++;
        retroalimentacion = "Lo siento, la respuesta era <br> \"La Última Vuelta Tour\"";
        abrirVentana();
        respuestaIncorrecta();

      
        
    }

}

//PARA DECIR QUE ESTÁ BUENA LA RESPUESTA
function respuestaCorrecta(){

    numRespuestasCorrectas++;

}

//PARA DECIR QUE ESTÁ MALA LA RESPUESTA
function respuestaIncorrecta(){

    numRespuestasIncorrectas++;
}


//PARA GUARDAR LA RESPUESTA DEL USUARIO//////////////////////////////
function botonA(){
    respuestaUsuario = "A"
    verificarRespuesta()
    console.log(respuestaUsuario)
}
function botonB(){
    respuestaUsuario = "B"
    verificarRespuesta()
    console.log(respuestaUsuario)
}
function botonC(){
    respuestaUsuario = "C"
    verificarRespuesta()
    console.log(respuestaUsuario)
}
function botonD(){
    respuestaUsuario = "D"
    verificarRespuesta()
    console.log(respuestaUsuario)
}
///////////////////////////////////////////////////////////


//VENTANA EMERGENTE


let overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup');
  
function abrirVentana(){

    document.getElementById("retroalimentacion").innerHTML = retroalimentacion;
    overlay.classList.add('active');
	popup.classList.add('active');
    

}

function cerrarVentana(){

    overlay.classList.remove('active');
	popup.classList.remove('active');
}

function siguientePregunta(){

    if(numPregunta == 6){

        botonContinuar.innerHTML = "Reiniciar";
        cambiarPregunta();
        cambiarRespuestas();
        cerrarVentana();
        acabarQuiz();

        numPregunta = 1;
        numRespuestasCorrectas = 0;
        numRespuestasIncorrectas = 0;
        

    }else{
        
        cambiarPregunta();
        cambiarRespuestas();
        cerrarVentana();
        botonContinuar.innerHTML = "Continuar";
    }
    
    

}


//PARA FINALZIAR EL QUIZ
function acabarQuiz(){

    document.getElementById("retroalimentacion").innerHTML = "Total: " + numRespuestasCorrectas + "/5";
    overlay.classList.add('active');
	popup.classList.add('active');

}
