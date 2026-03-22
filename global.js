function abrirModal() {
    const modal = document.getElementById("modal");
    const boton = document.querySelector(".btn-modal");

    if(!modal || !boton) return;

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

    if(!modal || !boton) return;

    modal.classList.remove("activo");

    setTimeout(() => {
        modal.style.display = "none";
        boton.classList.remove("morph", "activo");
    }, 300);
}

window.addEventListener("click", function(event) {
    const modal = document.getElementById("modal");
    if (modal && event.target === modal) cerrarModal();
});

function irMenu(){
    const app = document.querySelector(".app");

    if(app) app.classList.add("salida");

    setTimeout(() => {
        window.location.href = "index.html";
    }, 300);
}

window.addEventListener("DOMContentLoaded", () => {
    const app = document.querySelector(".app");

    if(app){
        app.classList.add("entrada");

        setTimeout(() => {
            app.classList.remove("entrada");
        }, 50);
    }
});

window.addEventListener("pageshow", () => {
    const app = document.querySelector(".app");

    if(app){
        app.classList.remove("salida", "entrada");
        app.style.opacity = "1";
        app.style.transform = "none";
    }
});

function toggleTema(){
    const body = document.body;
    const icono = document.getElementById("iconoTema");

    body.classList.toggle("light");

    const esClaro = body.classList.contains("light");

    // Guardar preferencia
    localStorage.setItem("tema", esClaro ? "claro" : "oscuro");

    // Cambiar icono
    icono.className = esClaro 
        ? "fa-solid fa-sun" 
        : "fa-solid fa-moon";
}

// Cargar tema al iniciar
window.addEventListener("DOMContentLoaded", () => {
    const temaGuardado = localStorage.getItem("tema");

    if(temaGuardado === "claro"){
        document.body.classList.add("light");
        document.getElementById("iconoTema").className = "fa-solid fa-sun";
    }
});