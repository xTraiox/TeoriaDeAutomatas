// VARIABLES BASE
const i = "2115459";
const w = "mr";
const j = "emiliano";
const wInv = w.split("").reverse().join("");

// ================= REGLAS =================

// Regla 1
document.getElementById("regla1").innerHTML =
`Debe iniciar con la matrícula:
<strong style="color: var(--lavender)">"${i}"</strong>`;

// Regla 2
document.getElementById("regla2").innerHTML =
`Debe contener repeticiones de:
<strong style="color: var(--lavender)">w = "${w}"</strong>
<br>Donde n ≥ 1`;

// Regla 3
document.getElementById("regla3").innerHTML =
`Después debe aparecer nuevamente:
<strong style="color: var(--lavender)">"${i}"</strong>`;

// Regla 4
document.getElementById("regla4").innerHTML =
`Luego deben aparecer:
<strong style="color: var(--lavender)">2n repeticiones de w⁻¹ = "${wInv}"</strong>`;

// Regla 5
document.getElementById("regla5").innerHTML =
`Debe terminar con:
<strong style="color: var(--lavender)">j² = "${j + j}"</strong>`;

// Regla 6 (EXPLICACIÓN COMPLETA)
document.getElementById("regla6").innerHTML =
`
Valores usados:
<br>
<strong style="color: var(--lavender)">
i = ${i} <br>
w = ${w} <br>
w⁻¹ = ${wInv} <br>
j = ${j}
</strong>
`;

let contador = 0;

function validar(){
    const cadena = document.getElementById("cadena").value;
    const resultado = document.getElementById("resultado");

    let restante = cadena;
    let error = "";
    let esValida = true;
    let n = 0;

    if(!restante.startsWith(i)){
        error = "No inicia con la matrícula";
        esValida = false;
    }

    if(esValida){
        restante = restante.slice(i.length);

        while(restante.startsWith(w)){
            n++;
            restante = restante.slice(w.length);
        }

        if(n < 1){
            error = "n debe ser ≥ 1";
            esValida = false;
        }

        if(esValida && !restante.startsWith(i)){
            error = "Falta segunda matrícula";
            esValida = false;
        }

        if(esValida){
            restante = restante.slice(i.length);

            let esperado = 2*n;
            let count = 0;

            while(restante.startsWith(wInv)){
                count++;
                restante = restante.slice(wInv.length);
            }

            if(count !== esperado){
                error = `Se esperaban ${esperado} repeticiones`;
                esValida = false;
            }

            if(esValida && restante !== j + j){
                error = "Terminación incorrecta";
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
    document.getElementById("cadena").value="";
    document.getElementById("resultado").textContent="";
}