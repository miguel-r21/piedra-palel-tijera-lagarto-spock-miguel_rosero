type Jugada = "Piedra" | "Papel" | "Tijera" | "Lagarto" | "Spock";

// Variables de contador
let victorias = 0;
let derrotas = 0;
let empates = 0;

function gana(jugadaJugador: Jugada, jugadaCPU: Jugada): boolean {
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

function jugadaRandom(): Jugada {
  const opciones: Jugada[] = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"];
  const index = Math.floor(Math.random() * opciones.length);
  return opciones[index];
}

function jugar(jugadaJugador: Jugada): void {
  const cpu = jugadaRandom();

  const miEleccionDiv = document.querySelector(".mieleccion")!;
  const eleccionCPUDiv = document.querySelector(".eleccionCPU")!;
  const resultado = document.querySelector(".resultado")!;
  const contadorDiv = document.querySelector(".contador")!;

  const emojiMap: Record<Jugada, string> = {
  Piedra: "🪨",
  Papel: "📄",
  Tijera: "✂️",
  Lagarto: "🦎",
  Spock: "🖖",
  };

  miEleccionDiv.innerHTML = `Tú elegiste: ${emojiMap[jugadaJugador]}`;
  eleccionCPUDiv.innerHTML = `CPU: ${emojiMap[cpu]}`;

  if (jugadaJugador === cpu) {
    resultado.textContent = "¡Empate!";
    empates++;
  } else if (gana(jugadaJugador, cpu)) {
    resultado.textContent = "¡Ganaste!";
    victorias++;
  } else {
    resultado.textContent = "¡Perdiste!";
    derrotas++;
  }

  // Actualizar contadores en pantalla
  contadorDiv.innerHTML = `
    <p>Victorias: ${victorias}</p>
    <p>Empates: ${empates}</p>
    <p>Derrotas: ${derrotas}</p>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".btn");

  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      const texto = (boton as HTMLElement).getAttribute("data-jugada") as Jugada;
      jugar(texto);
    });
  });
});
