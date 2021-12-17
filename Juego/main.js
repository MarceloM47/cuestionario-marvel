const temporizador = document.getElementById("temporizador");
const pregunta1 = document.querySelector(".pregunta1")
var puntaje = 0

//Temporizador
window.onload = updateClock;

    var totalTime = 30;

    function updateClock(){
    document.getElementById('temporizador').innerHTML = totalTime;
    if(totalTime==0){
        alert("Tiempo terminado!");
        validar()
    }else{
        totalTime-=1;
        setTimeout("updateClock()",1000);
    }
}

//Funcion para validar las respuestas correctas
function validar(){
    //Respuesta de pregunta 1
    if (document.getElementById('respuesta1').checked){
        puntaje++;
    }

    //Respuesta de pregunta 2
    if (document.getElementById('respuesta2').checked){
        puntaje++;
    }

    //Respuesta de pregunta 3
    if (document.getElementById('respuesta3').checked){
        puntaje++;
    }

    //Respuesta de pregunta 4
    if (document.getElementById('respuesta4').checked){
        puntaje++;
    }
    alert("Tu puntaje es: "+puntaje+"/4")
}

//Funcion para parar el tiempo
function time_stop(){
    totalTime = 0
}