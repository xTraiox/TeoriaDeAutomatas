// DATOS
const nombre = "emilianomontalvorocha";
const matricula = "2115459";
const iniciales = "emr";

const letras = [...new Set(nombre.split(""))];
const digitos = [...new Set(matricula.split(""))];
const alfabeto = [...letras, ...digitos, "."];

document.getElementById("reglaIniciales").innerHTML =
    `Debe contener las iniciales: 
     <strong style="color: var(--lavender)">"${iniciales}"</strong>`;

document.getElementById("reglaMatricula").innerHTML =
    `Debe terminar con: 
     <strong style="color: var(--lavender)">".${matricula}"</strong>`;

document.getElementById("reglaAlfabeto").innerHTML =
    `Solo puede usar caracteres del alfabeto permitido: 
     <strong style="color: var(--lavender)">
     { ${alfabeto.join(", ")} }
     </strong>`;


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

const tabla = document.getElementById("tabla");

const claseFila = esValida ? "fila-valida" : "fila-invalida";

tabla.insertAdjacentHTML("beforeend", `
    <tr class="${claseFila}">
        <td>${contador}</td>
        <td>${cadena}</td>
        <td style="color:${esValida ? '#2e7d32' : '#c62828'}">
            ${esValida ? "Válida" : "No válida"}
        </td>
        <td>${esValida ? "-" : error}</td>
    </tr>
`);


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

function abrirModal() {
    const modal = document.getElementById("modal");
    const boton = document.querySelector(".btn-modal");

    boton.classList.add("morph");

    setTimeout(() => {
        modal.style.display = "flex";
        modal.classList.add("activo");
        boton.classList.add("activo");
    }, 200);
}

function cerrarModal() {
    const modal = document.getElementById("modal");
    const boton = document.querySelector(".btn-modal");

    modal.classList.remove("activo");

    setTimeout(() => {
        modal.style.display = "none";
        boton.classList.remove("morph");
        boton.classList.remove("activo");
    }, 300);
}

window.onclick = function(event) {
    const modal = document.getElementById("modal");

    if (event.target === modal) {
        cerrarModal();
    }
}

function irMenu(){
    window.location.href = "index.html";
}

function irMenu(){
    document.body.classList.add("salida");

    setTimeout(() => {
        window.location.href = "index.html";
    }, 300);
}