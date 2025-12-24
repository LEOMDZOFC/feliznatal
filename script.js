// =======================
// CONFIGURAÇÕES INICIAIS
// =======================
let estrelasClicadas = 0;
const totalEstrelas = 4;

const musica = document.getElementById("music");
const start = document.getElementById("start");
const msg = document.getElementById("msg");
const estrelas = document.querySelectorAll("#kolombaru li");

// =======================
// INICIAR EXPERIÊNCIA
// =======================
document.querySelector(".lovein").addEventListener("click", () => {
    start.style.display = "none";
    msg.style.display = "block";

    musica.volume = 0.6;
    musica.play().catch(()=>{});

    // Texto digitando
    new TypeIt("#typing", {
        speed: 60,
        cursor: false,
        waitUntilVisible: true
    })
    .type("Tenho uma mensagem especial de Natal para você 🎄")
    .pause(500)
    .break()
    .type("Leia com carinho ❤️")
    .go();
});

// =======================
// INTERAÇÃO DAS ESTRELAS
// =======================
estrelas.forEach((estrela) => {
    estrela.addEventListener("click", () => {
        if (estrela.classList.contains("ok")) return;

        estrela.classList.add("ok");
        estrela.innerHTML = "✨";
        estrela.style.transform = "scale(1.6) rotate(20deg)";
        estrela.style.transition = "0.3s";

        estrelasClicadas++;

        if (estrelasClicadas === totalEstrelas) {
            mensagemFinal();
        }
    });
});

// =======================
// MENSAGEM FINAL
// =======================
function mensagemFinal() {
    setTimeout(() => {
        Swal.fire({
            title: "🎄 Feliz Natal ✝️",
            html: `
              <p>Que Jesus abençoe sua vida,</p>
              <p>sua casa e sua família ❤️</p>
              <br>
              <b>Jesus é o maior presente ✨</b>
            `,
            background: "#0b1d26",
            color: "#fff",
            confirmButtonText: "Amém 🙏",
            confirmButtonColor: "#d4af37",
        });
    }, 500);
}

// =======================
// EFEITO DE NEVE
// =======================
function criarNeve() {
    const neve = document.createElement("div");
    neve.className = "snow";
    neve.innerHTML = Math.random() > 0.5 ? "❄" : "✨";

    neve.style.left = Math.random() * 100 + "vw";
    neve.style.fontSize = Math.random() * 10 + 12 + "px";
    neve.style.opacity = Math.random();
    neve.style.animationDuration = Math.random() * 5 + 5 + "s";

    document.body.appendChild(neve);

    setTimeout(() => {
        neve.remove();
    }, 10000);
}

setInterval(criarNeve, 200);

// =======================
// PAUSAR MÚSICA AO SAIR
// =======================
document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        musica.pause();
    } else {
        musica.play().catch(()=>{});
    }
});
