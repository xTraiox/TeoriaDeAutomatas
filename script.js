// CONFIGURA TUS DATOS
const nombre = "emilianomontalvo";
const matricula = "2115459";
const iniciales = "em";

const letras = [...new Set(nombre.split(""))];
const digitos = [...new Set(matricula.split(""))];
const alfabeto = [...letras, ...digitos, "."];

document.getElementById("alfabeto").textContent =
"{ " + alfabeto.join(", ") + " }";

let contador = 0;

function validar(){

    const cadena = document.getElementById("cadena").value;
    const resultado = document.getElementById("resultado");

    let esValida = true;
    let error = "-";

    if(!cadena || !digitos.includes(cadena[0])){
        esValida=false;
        error="No inicia con dígito válido";
    }
    else if(cadena.includes("..")){
        esValida=false;
        error="Tiene puntos consecutivos";
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
        error="No contiene iniciales";
    }

    if(esValida && !cadena.endsWith("." + matricula)){
        esValida=false;
        error="No termina con ." + matricula;
    }

    resultado.textContent = esValida ? "Cadena Válida" : "Cadena No Válida";
    resultado.className = esValida ? "resultado valido" : "resultado invalido";

    contador++;

    document.getElementById("tabla").innerHTML += `
        <tr>
            <td>${contador}</td>
            <td>${cadena}</td>
            <td style="color:${esValida ? '#16a34a' : '#dc2626'}">
                ${esValida ? "Válida" : "No válida"}
            </td>
            <td>${esValida ? "-" : error}</td>
        </tr>
    `;
}

function abrirModal() {
    const modal = document.getElementById("modal");
    const boton = document.querySelector(".btn-modal");

    modal.style.display = "flex";
    boton.classList.add("activo"); 
}

function cerrarModal() {
    const modal = document.getElementById("modal");
    const boton = document.querySelector(".btn-modal");

    modal.style.display = "none";
    boton.classList.remove("activo"); 
}


function limpiar(){
    document.getElementById("cadena").value="";
    document.getElementById("resultado").textContent="";
}

// Cerrar si da click fuera del modal
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    const boton = document.querySelector(".btn-modal");

    if (event.target == modal) {
        modal.style.display = "none";
        boton.classList.remove("activo");
    }
}
