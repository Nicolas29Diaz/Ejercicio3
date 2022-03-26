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
    ["Esta es la pregunta número uno, ¿esta es la pregunta numero qué?",
    "Esta es la pregunta número dos, ¿esta es la pregunta numero qué?",
    "Esta es la pregunta número tres, ¿esta es la pregunta numero qué?",
    "Esta es la pregunta número cuatro, ¿esta es la pregunta numero qué?",
    "Esta es la pregunta número cinco, ¿esta es la pregunta numero qué?"
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
        respuestasTexto[0].innerHTML = "La uno"
        respuestasTexto[1].innerHTML = "La dos"
        respuestasTexto[2].innerHTML = "La tres"
        respuestasTexto[3].innerHTML = "La cuatro"
    }else if(numPregunta == 2){
        respuestasTexto[0].innerHTML = "La uno"
        respuestasTexto[1].innerHTML = "La cuatro"
        respuestasTexto[2].innerHTML = "La tres"
        respuestasTexto[3].innerHTML = "La dos"
    }else if(numPregunta == 3){
        respuestasTexto[0].innerHTML = "La uno"
        respuestasTexto[1].innerHTML = "La dos"
        respuestasTexto[2].innerHTML = "La cuatro"
        respuestasTexto[3].innerHTML = "La tres"
    }else if(numPregunta == 4){
        respuestasTexto[0].innerHTML = "La uno"
        respuestasTexto[1].innerHTML = "La dos"
        respuestasTexto[2].innerHTML = "La cuatro"
        respuestasTexto[3].innerHTML = "La tres"
    }else if(numPregunta == 5){
        respuestasTexto[0].innerHTML = "La cinco"
        respuestasTexto[1].innerHTML = "La dos"
        respuestasTexto[2].innerHTML = "La tres"
        respuestasTexto[3].innerHTML = "La cuatro"
    }
}

//PARA SABER SI ESTÁ BIEN O MAL
function verificarRespuesta(){

    if(numPregunta == 1 && respuestaUsuario == "A"){
        
        console.log("BIEEN");
        numPregunta++;
        retroalimentacion = "Excelente!"
        abrirVentana();
        respuestaCorrecta();

    }else if(numPregunta == 1 && respuestaUsuario != "A"){

        console.log("MAL");
        numPregunta++;
        retroalimentacion = "Lo siento, la respuesta era La uno"
        abrirVentana();
        respuestaIncorrecta();
        
    }else if(numPregunta == 2 && respuestaUsuario == "D"){

        console.log("BIEEN");
        numPregunta++;
        retroalimentacion = "Excelente!"
        abrirVentana();
        respuestaCorrecta();

    }else if(numPregunta == 2 && respuestaUsuario != "D"){
        
        console.log("MALLL");
        numPregunta++;
        retroalimentacion = "Lo siento, la respuesta era La dos"
        abrirVentana();
        respuestaIncorrecta();

    }else if(numPregunta == 3 && respuestaUsuario == "D"){
        
        console.log("BIENN");
        numPregunta++;
        retroalimentacion = "Excelente!"
        abrirVentana();
        respuestaCorrecta();

    }else if(numPregunta == 3 && respuestaUsuario != "D"){
        
        console.log("MALLL");
        numPregunta++;
        retroalimentacion = "Lo siento, la respuesta era La tres"
        abrirVentana();
        respuestaIncorrecta();

    }else if(numPregunta == 4 && respuestaUsuario == "C"){
        
        console.log("BIENN");
        numPregunta++;
        retroalimentacion = "Excelente!"
        abrirVentana();
        respuestaCorrecta();

    }else if(numPregunta == 4 && respuestaUsuario != "C"){
        
        console.log("MALLL");
        numPregunta++;
        retroalimentacion = "Lo siento, la respuesta era La cuatro"
        abrirVentana();
        respuestaIncorrecta();

    }else if(numPregunta == 5 && respuestaUsuario == "A"){
        
        console.log("BIENN");
        numPregunta++;
        retroalimentacion = "Excelente!";
        abrirVentana();
        respuestaCorrecta();


    }else if(numPregunta == 5 && respuestaUsuario != "A"){
        
        console.log("MAALL");
        numPregunta++;
        retroalimentacion = "Lo siento, la respuesta era La cinco";
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
