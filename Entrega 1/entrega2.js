//EN PROCESO!!



//Datos del docente
let nombre_docente ;
let apellido_docente ;

//Funcion constructora
function preg(pregunta_array, respuesta_array) {
    this.pregunta_array = pregunta_array;
    this.respuesta_array = respuesta_array;
}

//Array de preguntas
let preguntas = [];


//Agregar pregunta
let e = false;
let btn = document.getElementById("btn_1");
btn.addEventListener("click", function () {
    
    
        if(document.getElementById("pregunta").value != "" && document.getElementById("pregunta").className != "guardada"){
            
            
            
            nombre_docente = document.getElementById("nombre_docente").value;
            apellido_docente = document.getElementById("apellido_docente").value;
                
            let pregunta_respuesta = new preg(document.getElementById("pregunta").value, document.getElementById("respuesta").value);
            preguntas.push(pregunta_respuesta);

            document.getElementById("pregunta").id = "0";
            document.getElementById("respuesta").id = "0";

            let nueva_pregunta = document.createElement("div");
            nueva_pregunta.innerHTML= '<br>  <label for="" >Pregunta</label>    <input id="pregunta" type="text" placeholder="Pregunta"> <br>    <label for="" >Respuesta</label>    <input id="respuesta" type="text" placeholder="Respuesta"> ';
            document.body.append(nueva_pregunta);

            console.log(preguntas);

        }
        
      
        
});

//Guardar y finalizar
let btn_2 = document.getElementById("btn_2");
btn_2.addEventListener("click", function (){
    let pregunta_respuesta = new preg(document.getElementById("pregunta").value, document.getElementById("respuesta").value);
    preguntas.push(pregunta_respuesta);

    let saludo = document.createElement("div");
    saludo.innerHTML= "<p>Gracias!</p>"
    document.body.append(saludo);

    console.log(preguntas);
})
