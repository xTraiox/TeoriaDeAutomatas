const i = "2115459";
const w = "mr";
const j = "emiliano";
const wInv = w.split("").reverse().join("");

// REGLAS DINÁMICAS EN EL MODAL 
document.getElementById("regla1").innerHTML =
`La cadena debe iniciar con la matrícula 
<strong style="color: var(--lavender)">"${i}"</strong>`;

document.getElementById("regla2").innerHTML =
`Debe contener una o más repeticiones (n veces) de las iniciales 
<strong style="color: var(--lavender)">"${w}"</strong>`;

document.getElementById("regla3").innerHTML =
`Después debe aparecer nuevamente la matrícula 
<strong style="color: var(--lavender)">"${i}"</strong>`;

document.getElementById("regla4").innerHTML =
`Luego deben aparecer exactamente el doble de repeticiones (2n) de la inversa de las iniciales 
<strong style="color: var(--lavender)">"${wInv}"</strong>`;

document.getElementById("regla5").innerHTML =
`Finalmente debe terminar con el nombre repetido dos veces 
<strong style="color: var(--lavender)">"${j + j}"</strong>`;

document.getElementById("regla6").innerHTML =
`Donde <strong>n</strong> es un número entero mayor o igual a 1 (n ≥ 1). 
Ejemplo: si n = 2, entonces debes tener 2 veces "${w}" y 4 veces "${wInv}"`;

document.getElementById("regla6").innerHTML += `
<br><br>
<span style="color: var(--lavender)">
Ejemplo concreto:<br>
n = 1 → ${w} → ${wInv}${wInv}<br>
n = 2 → ${w}${w} → ${wInv}${wInv}${wInv}${wInv}
</span>`;

let contador = 0;

function validar(){

    const cadena = document.getElementById("cadena").value;
    const resultado = document.getElementById("resultado");

    let restante = cadena;
    let error = "";
    let esValida = true;
    let n = 0;

    if(!restante.startsWith(i)){
        error = `La cadena debe iniciar con la matrícula "${i}"`;
        esValida = false;
    }

    if(esValida){
        restante = restante.slice(i.length);

        while(restante.startsWith(w)){
            n++;
            restante = restante.slice(w.length);
        }

        if(n < 1){
            error = `Debe contener al menos una repetición de las iniciales "${w}" (n ≥ 1)`;
            esValida = false;
        }

        if(esValida && !restante.startsWith(i)){
            error = `Después de "${w}" debe aparecer nuevamente la matrícula "${i}"`;
            esValida = false;
        }

        if(esValida){
            restante = restante.slice(i.length);

            let esperado = 2 * n;
            let contador = 0;

            while(restante.startsWith(wInv)){
                contador++;
                restante = restante.slice(wInv.length);
            }

            if(contador !== esperado){
                error = `Se esperaban ${esperado} repeticiones de "${wInv}" pero se encontraron ${contador}`;
                esValida = false;
            }

            if(esValida && restante !== j + j){
                error = `La cadena debe terminar con "${j + j}" (nombre repetido dos veces)`;
                esValida = false;
            }
        }
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
    document.getElementById("cadena").value = "";
    document.getElementById("resultado").textContent = "";
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