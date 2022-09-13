//EN PROCESO!!


//Datos del docente
let nombre_docente ;
let apellido_docente ;
let cantidad;


let btn = document.getElementById("btn_1");
btn.addEventListener("click", function () {
    nombre_docente = document.getElementById("nombre_docente").value;
    apellido_docente = document.getElementById("apellido_docente").value;
    cantidad_preguntas = document.getElementById("cantidad_preguntas").value;
    
    for (let i=0; i<cantidad_preguntas; i++){
        let pregunta = document.createElement("div");
        pregunta.innerHTML= '<br><label>Pregunta</label><input class="preguntas" type="text" placeholder="Pregunta">    <br><label>Respuesta</label><input class="respuestas" type="text" placeholder="Respuesta">';
        document.body.append(pregunta);
    }
    
    let nuevo_boton = document.createElement("p");
    nuevo_boton.innerHTML= '<button id="btn_2">Siguiente</button>';
    document.body.append(nuevo_boton);


    let preguntas = [];
    let respuestas = [];

    let btn_2 = document.getElementById("btn_2");
    btn_2.addEventListener("click", function (){
    preguntas.push(document.getElementsByClassName("preguntas").value);
    respuestas.push(document.getElementsByClassName("respuestas").value);
    console.log(preguntas);
    console.log(respuestas);
});

});
