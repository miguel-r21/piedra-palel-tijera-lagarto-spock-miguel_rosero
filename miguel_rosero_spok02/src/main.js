function gana(jugadaJugador, jugadaCPU) {
    if (jugadaJugador === "Piedra") {
        return jugadaCPU === "Tijera" || jugadaCPU === "Lagarto";
    }
    if (jugadaJugador === "Papel") {
        return jugadaCPU === "Piedra" || jugadaCPU === "Spock";
    }
    if (jugadaJugador === "Tijera") {
        return jugadaCPU === "Papel" || jugadaCPU === "Lagarto";
    }
    if (jugadaJugador === "Lagarto") {
        return jugadaCPU === "Papel" || jugadaCPU === "Spock";
    }
    if (jugadaJugador === "Spock") {
        return jugadaCPU === "Tijera" || jugadaCPU === "Piedra";
    }
    return false;
}
function jugadaRandom() {
    var opciones = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"];
    var index = Math.floor(Math.random() * opciones.length);
    return opciones[index];
}
function jugar(jugadaJugador) {
    var cpu = jugadaRandom();
    var miEleccionDiv = document.querySelector(".mieleccion");
    var eleccionCPUDiv = document.querySelector(".eleccionCPU");
    var reglasDiv = document.querySelector(".reglas");
    miEleccionDiv.textContent = "T\u00FA elegiste: ".concat(jugadaJugador);
    eleccionCPUDiv.textContent = "CPU eligi\u00F3: ".concat(cpu);
    if (jugadaJugador === cpu) {
        reglasDiv.textContent = "¡Empate!";
    }
    else if (gana(jugadaJugador, cpu)) {
        reglasDiv.textContent = "¡Ganaste!";
    }
    else {
        reglasDiv.textContent = "¡Perdiste!";
    }
}
document.addEventListener("DOMContentLoaded", function () {
    var botones = document.querySelectorAll(".btn");
    botones.forEach(function (boton) {
        boton.addEventListener("click", function () {
            var _a;
            var texto = (_a = boton.textContent) === null || _a === void 0 ? void 0 : _a.trim();
            jugar(texto);
        });
    });
});
