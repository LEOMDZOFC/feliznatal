let estrelasClicadas = 0;
const totalEstrelas = 4;

const start = document.getElementById("start");
const msg = document.getElementById("msg");
const musica = document.getElementById("music");
const estrelas = document.querySelectorAll("#kolombaru li");
const mensagens = document.getElementById("mensagens");

// INÍCIO
document.querySelector(".lovein").addEventListener("click", () => {
    start.style.display = "none";
    msg.style.display = "block";

    musica.volume = 0.6;
    musica.play().catch(()=>{});

    new TypeIt("#typing", {
        speed: 60,
        cursor: false
    })
    .type("Tenho uma mensagem especial de Natal para você 🎄")
    .pause(500)
    .break()
    .type("Clique nas estrelas ✨")
    .go();
});

// CLIQUE NAS ESTRELAS
estrelas.forEach((estrela) => {
    estrela.addEventListener("click", () => {

        if (estrela.classList.contains("clicada")) return;

        estrela.classList.add("clicada");
        estrela.innerHTML = "✨";
        estrela.style.transform = "scale(1.6)";
        estrela.style.transition = "0.3s";

        estrelasClicadas++;

        if (estrelasClicadas === totalEstrelas) {
            revelarMensagens();
        }
    });
});

// MOSTRAR MENSAGENS
function revelarMensagens() {
    document.getElementById("pesan1").style.display = "none";
    document.getElementById("kolombaru").style.display = "none";

    mensagens.style.display = "block";
    mensagens.style.animation = "fadeUp 1.2s ease";

    Swal.fire({
        title: "✝️ Jesus te ama",
        html: "Que o amor de Cristo ilumine sua vida ❤️",
        background: "#0b1d26",
        color: "#fff",
        confirmButtonText: "Amém 🙏",
        confirmButtonColor: "#d4af37"
    });
}

// NEVE
function criarNeve() {
    const neve = document.createElement("div");
    neve.className = "snow";
    neve.innerHTML = "❄";
    neve.style.left = Math.random() * 100 + "vw";
    neve.style.fontSize = Math.random() * 10 + 12 + "px";
    neve.style.animationDuration = Math.random() * 5 + 5 + "s";
    document.body.appendChild(neve);

    setTimeout(() => neve.remove(), 10000);
}
setInterval(criarNeve, 200);
