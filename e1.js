// DATOS
const nombre = "emilianomontalvorocha";
const matricula = "2115459";
const iniciales = "emr";

const letras = [...new Set(nombre.split(""))];
const digitos = [...new Set(matricula.split(""))];
const alfabeto = [...letras, ...digitos, "."];

document.getElementById("alfabeto").textContent =
"{ " + alfabeto.join(", ") + " }";

document.getElementById("reglaIniciales").innerHTML =
`Debe contener las iniciales: <strong>"${iniciales}"</strong>`;

document.getElementById("reglaMatricula").innerHTML =
`Debe terminar con: <strong>".${matricula}"</strong>`;

document.getElementById("reglaAlfabeto").innerHTML =
`Alfabeto permitido: <strong>{ ${alfabeto.join(", ")} }</strong>`;

let contador = 0;

function validar(){
    const cadena = document.getElementById("cadena").value;
    const resultado = document.getElementById("resultado");

    let esValida = true;
    let error = "-";

    if(!cadena || !digitos.includes(cadena[0])){
        esValida=false;
        error="Debe iniciar con un dígito válido";
    }
    else if(cadena.includes("..")){
        esValida=false;
        error="No se permiten puntos consecutivos";
    }
    else{
        for(let c of cadena){
            if(!alfabeto.includes(c)){
                esValida=false;
                error="Carácter fuera del alfabeto";
                break;
            }
        }
    }

    if(esValida && !cadena.includes(iniciales)){
        esValida=false;
        error="No contiene las iniciales";
    }

    if(esValida && !cadena.endsWith("." + matricula)){
        esValida=false;
        error="No termina con ." + matricula;
    }

    resultado.textContent = esValida ? "Cadena válida" : "Cadena no válida";
    resultado.className = esValida ? "resultado valido" : "resultado invalido";

    agregarFila(cadena, esValida, error);
}

function agregarFila(cadena, esValida, error){
    contador++;

    const fila = document.createElement("tr");
    fila.classList.add(esValida ? "fila-valida" : "fila-invalida");

    fila.innerHTML = `
        <td>${contador}</td>
        <td>${cadena}</td>
        <td>${esValida ? "Válida" : "No válida"}</td>
        <td>${esValida ? "-" : error}</td>
    `;

    document.getElementById("tabla").appendChild(fila);
}

function limpiar(){
    document.getElementById("cadena").value="";
    document.getElementById("resultado").textContent="";
}