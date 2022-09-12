//PARTE DOCENTE
alert("Parte Docente: Indique una pregunta.");

//Datos del docente
let nombre_docente = prompt ("Ingresa tu nombre");
let apellido_docente = prompt ("Ingresa tu apellido");
let cantidad_preguntas = parseInt(prompt("Cuantas preguntas desea agregar?"));
let preguntas = [];
let respuestas = [];
for (let i=0; i<cantidad_preguntas; i++){
    preguntas.push(prompt("Pregunta: "));
    respuestas.push(prompt("Respuesta: "));
}


//PARTE ALUMNO
alert ("Parte Alumno: Complete el siguiente cuestionario.");

//Datos del alumno
let nombre_alumno = prompt ("Ingresa tu nombre");
let apellido_alumno = prompt ("Ingresa tu apellido");
alert ("Bienvenido, tendras 3 intentos por pregunta. Cada intento fallido restara el 33% del puntaje de cada pregunta. Buena suerte!");

//Función para porcentaje
function porcentaje(i){
    let promedio_pregunta
    if(i==0){
        promedio_pregunta = 1;
    }
    else if(i==1){
        promedio_pregunta = 0.67;
    }
    else if(i==2){
        promedio_pregunta = 0.33;
    }
    else{
        promedio_pregunta = 0;
    }
    return promedio_pregunta;
}

let porcentaje_alumno = [];
let suma_promedios = 0;
//for (let j=0; j<cantidad_preguntas; j++){
for (let j=0; j<cantidad_preguntas; j++){
    let i = 0;
    let condicion = false;
    while (i<3 && condicion == false){
        let resp = parseFloat(prompt(preguntas[j]));
        if(resp == respuestas[j]){
            condicion = true
            alert("Respuesta correcta");   
        }
        else{
            res1 = parseFloat(prompt("Intenta nuevamente: ", preguntas[j])); 
            i++;
        }
    }
    porcentaje_alumno.push (porcentaje(i)*100);
    console.log("El porcentaje alcanzado en la pregunta ", j+1 ," es del ", porcentaje_alumno[j], "%");
    suma_promedios=suma_promedios+porcentaje_alumno[j];
}

//Promedio final


let nota_final = suma_promedios/preguntas.length;
console.log ("Tu calificacion final es", parseInt(nota_final),"%");




/*
//Ejercicio 1) 2*3=6
let i = 0;
let condicion = false
let res1 = parseFloat(prompt("2*3=__"));
while (i<3 && condicion == false){
    if(res1 == 6){
        condicion = true
        alert("Respuesta correcta");   
    }
    else{
        res1 = parseFloat(prompt("Intenta nuevamente. 2*3=__")); 
        i++;
    }
}
let puntaje_1 = porcentaje(i)*100;
console.log("El porcentaje alcanzado en la pregunta 1 es del ", porcentaje(i) * 100, "%");

//Ejercicio 2) 4-1.5=2.5
i = 0;
condicion = false
let res2 = parseFloat(prompt("4-1.5=__"));
while (i<3 && condicion == false){
    if(res2 == 2.5){
        condicion = true
        alert("Respuesta correcta");   
    }
    else{
        res2 = parseFloat(prompt("Intenta nuevamente. 4-1.5=__")); 
        i++;
    }
}
let puntaje_2 = porcentaje(i)*100;
console.log("El porcentaje alcanzado en la pregunta 2 es del ", porcentaje(i) * 100, "%");

//Ejercicio 3) 8/4=2
i = 0;
condicion = false
let res3 = parseFloat(prompt("8/4=__"));
while (i<3 && condicion == false){
    if(res3 == 2){
        condicion = true
        alert("Respuesta correcta");   
    }
    else{
        res3 = parseFloat(prompt("Intenta nuevamente. 8/4=__")); 
        i++;
    }
}
let puntaje_3 = porcentaje(i)*100;
console.log("El porcentaje alcanzado en la pregunta 3 es del ", porcentaje(i) * 100, "%");

//Promedio final
let nota_final = (puntaje_1+puntaje_2+puntaje_3)/3;
console.log ("Tu calificacion final es", nota_final,"%");
*/
