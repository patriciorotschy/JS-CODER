//EN PROCESO!!

//Datos del docente
let nombre_docente ;
let apellido_docente ;
let cantidad_preguntas;


let btn = document.getElementById("btn_1");
btn.addEventListener("click", function () {
    nombre_docente = document.getElementById("nombre_docente");
    apellido_docente = document.getElementById("apellido_docente");
    cantidad_preguntas = parseInt(document.getElementById("cantidad_preguntas"));
    
    for (let i=0; i<cantidad_preguntas; i++){
        let pregunta = document.createElement("div");
        pregunta.innerHTML= '<br><label for="" class="preguntas">Pregunta</label><input type="text" placeholder="Pregunta">    <br><label for="" class="respuesta">Respuesta</label><input type="text" placeholder="Respuesta">';
        document.body.appendChild(pregunta);
    }
});
