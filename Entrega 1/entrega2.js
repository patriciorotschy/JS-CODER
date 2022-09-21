
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

let btn = document.getElementById("btn_1");
let padre_preguntas = document.getElementById("padre_preguntas");
btn.addEventListener("click", function () {
    
    
        if(document.getElementById("pregunta").value != ""){
            
            
            
            nombre_docente = document.getElementById("nombre_docente").value;
            apellido_docente = document.getElementById("apellido_docente").value;
                
            let pregunta_respuesta = new preg(document.getElementById("pregunta").value, document.getElementById("respuesta").value);
            preguntas.push(pregunta_respuesta);

            document.getElementById("pregunta").id = "0";
            document.getElementById("respuesta").id = "0";

            let nueva_pregunta = document.createElement("div");
            nueva_pregunta.innerHTML= '<br>  <label for="" >Pregunta</label>    <input id="pregunta" type="text" placeholder="Pregunta"> <br>    <label for="" >Respuesta</label>    <input id="respuesta" type="text" placeholder="Respuesta"> ';
            padre_preguntas.append(nueva_pregunta);

            console.log(preguntas);

        }
        else{
            Swal.fire({
                title: 'Error!',
                text: 'Debe agregar la pregunta para continuar',
                icon: 'error',
                confirmButtonText: 'OK'
            })
        }       
});

//Guardar y finalizar
let btn_2 = document.getElementById("btn_2");

btn_2.addEventListener("click", function (){
    
    if(document.getElementById("pregunta").value != ""){
                
        let pregunta_respuesta = new preg(document.getElementById("pregunta").value, document.getElementById("respuesta").value);
        preguntas.push(pregunta_respuesta);

        let saludo = document.createElement("div");
        saludo.innerHTML= '<p>Gracias!</p>'

        padre_preguntas.append(saludo);

        console.log(preguntas);

        let array_JSON = JSON.stringify (preguntas);

        localStorage.setItem ("preguntas", array_JSON);

    }
    else{
        Swal.fire({
            title: 'Error!',
            text: 'Debe agregar la pregunta para continuar',
            icon: 'error',
            confirmButtonText: 'OK'
        })
    }
    
})

//Boton Parte Alumno

let btn_3 = document.getElementById("btn_3");
btn_3.addEventListener("click", function (){
    
    padre_preguntas.remove ();
    
})
