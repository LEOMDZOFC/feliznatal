// ==========================
// INÍCIO (estrela principal)
// ==========================
document.addEventListener("DOMContentLoaded", () => {

  const startBtn = document.querySelector(".lovein");
  const startBox = document.getElementById("start");
  const msgBox = document.getElementById("msg");
  const music = document.getElementById("music");

  startBtn.addEventListener("click", () => {
    startBox.style.display = "none";
    msgBox.classList.remove("hidden");
    music.play();

    new TypeIt("#typing", {
      speed: 60,
      waitUntilVisible: true
    })
    .type("Tenho uma mensagem especial de Natal para você 🎄")
    .go();
  });

  // ==========================
  // CONTROLE DAS 4 ESTRELAS
  // ==========================
  let estrelasClicadas = 0;
  const estrelas = document.querySelectorAll("#kolombaru li");
  const mensagens = document.querySelectorAll(".sty2b, #opsL");
  const textoClique = document.getElementById("pesan1");
  const areaEstrelas = document.getElementById("kolombaru");

  estrelas.forEach((estrela) => {
    estrela.addEventListener("click", () => {

      if (!estrela.classList.contains("clicada")) {
        estrela.classList.add("clicada");
        estrela.style.opacity = "0.3";
        estrela.style.pointerEvents = "none";
        estrelasClicadas++;
      }

      if (estrelasClicadas === 4) {
        textoClique.style.display = "none";
        areaEstrelas.style.display = "none";
        mostrarMensagens();
      }
    });
  });

  function mostrarMensagens() {
    mensagens.forEach((msg, index) => {
      setTimeout(() => {
        msg.classList.remove("hidden");
        msg.style.animation = "fadeUp 1s ease";
      }, index * 1200);
    });
  }

  // ==========================
  // NEVE ❄️
  // ==========================
  function criarNeve() {
    const snow = document.createElement("div");
    snow.className = "snow";
    snow.innerHTML = "❄";
    snow.style.left = Math.random() * 100 + "vw";
    snow.style.fontSize = Math.random() * 10 + 10 + "px";
    snow.style.animationDuration = Math.random() * 5 + 5 + "s";
    document.body.appendChild(snow);

    setTimeout(() => {
      snow.remove();
    }, 10000);
  }

  setInterval(criarNeve, 200);

});
