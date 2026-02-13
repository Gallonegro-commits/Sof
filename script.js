const messages = [
"Sofi, cada día contigo es mi favorito",
"Me encanta cómo me haces sentir en casa",
"Eres la razón por la que sonrío sin darme cuenta",
"No cambiaría ni un solo momento contigo",
"Tu risa es mi sonido favorito del mundo",
"Contigo hasta lo aburrido se vuelve especial",
"Gracias por elegirme también",
"Me gusta más la vida desde que estás en ella",
"Eres justo lo que necesitaba sin saber que lo necesitaba",
"Sofía, eres mi persona favorita",
"No sé qué hice bien para merecerte, pero aquí estoy",
"Me encanta que seas tú",
"Contigo quiero todos los días, no solo los buenos",
"Tu felicidad es mi felicidad",
"Amo cómo me miras cuando crees que no me doy cuenta",
"Gracias por ser exactamente como eres",
"Me gusta despertar sabiendo que existes",
"Eres mi lugar seguro, Sofi",
"Contigo todo se siente correcto",
"Te amo en tus días buenos y más en los difíciles",
"Eres la mejor decisión que he tomado",
"Me gusta la versión de mí que soy cuando estoy contigo",
"Sofi, contigo el tiempo se pasa volando",
"Eres mi calma en medio del caos",
"Me encanta compartir la vida contigo",
"Tu amor me hace mejor persona",
"Cada momento a tu lado vale oro",
"Eres mi tipo favorito de locura",
"Me gusta cómo encajamos, tú y yo",
"Sofía, eres mi hogar",
"No necesito mucho, solo necesito que seas tú",
"Me gusta que seas la primera en mi mente cada mañana",
"Contigo aprendí lo que es amar de verdad",
"Eres mi sí en un mundo lleno de quizás",
"Me encanta lo fácil que es amarte",
"Sofi, eres mi mejor aventura",
"Tu amor es mi lugar favorito",
"Me gusta que seas mía y yo tuyo",
"Eres todo lo que está bien en mi vida",
"Te amo más de lo que las palabras pueden decir"
];

// Array de poemas - ahora con más variedad
const poems = [
// Poema 1 - Personal
{
text: `
Sofía,
no llegaste a cambiar mi vida,
llegaste a darle sentido.

Eres la calma en mis días,
la sonrisa que siempre busco,
el amor que quiero cuidar.

Si el mundo se detiene,
yo sigo contigo.
Si todo cambia,
yo te elijo.

Siempre tú,
siempre nosotros.
❤️
`,
delay: 5000
},

// Poema 2 - Personal
{
text: `
A veces me pregunto
qué hubiera sido de mí
si no te hubiera encontrado.

Pero luego te veo sonreír
y sé que no importa,
porque estás aquí.

Y mientras estés,
todo lo demás
puede esperar.

Te amo, Sofi.
💕
`,
delay: 13000
},

// Poema 3 - Citado: Mario Benedetti
{
text: `
"Te quiero
porque tus manos
trabajan por la justicia.

Si te quiero es porque sos
mi amor, mi cómplice y todo
y en la calle codo a codo
somos mucho más que dos."

— Mario Benedetti
❤️
`,
delay: 21000
},

// Poema 4 - Personal
{
text: `
Sofía,

No necesito promesas grandiosas
ni palabras rebuscadas.

Solo quiero despertares contigo,
risas sin razón,
y silencios cómodos.

Quiero lo simple,
lo real,
lo nuestro.

Y eso ya es todo.
💖
`,
delay: 29000
},

// Poema 5 - Citado: Pablo Neruda
{
text: `
"Es tan corto el amor
y tan largo el olvido."

Pero contigo, amor,
el olvido no existe.
Solo tú, siempre tú.

— Inspirado en Pablo Neruda
💕
`,
delay: 37000
},

// Poema 6 - Personal
{
text: `
Me gusta que no tengamos
que ser perfectos.

Me gusta que podamos
ser nosotros,
con todo y nuestras imperfecciones.

Porque al final del día,
eres tú la que quiero,
no una versión editada,
sino la real.

La que se enoja,
la que me ama.

Esa eres tú, Sofi.
Y esa es la que amo.
❤️
`,
delay: 45000
},

// Poema 7 - Citado: Jaime Sabines
{
text: `
"No es que muera de amor,
muero de ti.
Muero de ti, amor, de amor de ti,
de urgencia mía de mi piel de ti."

Así te amo, Sofía.
Con urgencia, con todo.

— Jaime Sabines
💗
`,
delay: 53000
},

// Poema 8 - Personal
{
text: `
Hay días en los que todo sale mal,
días grises, días pesados.

Pero luego pienso en ti
y todo se acomoda un poco.

No sé si eso es amor
o magia,
pero sea lo que sea,
no quiero que se acabe.

Gracias por ser mi luz, Sofi.
✨
`,
delay: 61000
},

// Mensaje final
{
text: `
Sofía, te amo con calma, con intención y con todo mi corazón.

No sé qué nos depare la vida, pero sí sé que quiero caminarla contigo.

Cada momento a tu lado es un regalo que atesoro.

Gracias por estos meses increíbles.
Gracias por ser tú.
Gracias por amarme.

Siempre tú, siempre nosotros.

Feliz San Valentín, mi amor.
Te amo. 💕

— Tuyo, siempre.
`,
delay: 69000
}
];

// Fecha en que se hicieron novios: 19 de octubre 2025 a las 3 PM
const startDate = new Date('2025-10-19T15:00:00');

function updateCounter() {
const now = new Date();
const diff = now - startDate;

const days = Math.floor(diff / (1000 * 60 * 60 * 24));
const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

document.getElementById('days').textContent = days;
document.getElementById('hours').textContent = hours;
document.getElementById('minutes').textContent = minutes;
}

// Actualizar contador cada segundo
setInterval(updateCounter, 1000);
updateCounter();

function createMessage() {
const msg = document.createElement("div");
msg.classList.add("message");
msg.innerText = messages[Math.floor(Math.random() * messages.length)];
msg.style.left = Math.random() * 85 + "vw";
msg.style.top = Math.random() * 70 + "vh";
document.getElementById("floating-messages").appendChild(msg);
setTimeout(() => msg.remove(), 7000);
}

function createHeart() {
const heart = document.createElement("div");
heart.classList.add("heart");
const hearts = ["❤️", "💕", "💖", "💗", "💝"];
heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];
heart.style.left = Math.random() * 95 + "vw";
heart.style.animationDuration = (6 + Math.random() * 4) + "s";

// Efecto al hacer clic en un corazón
heart.addEventListener('click', function(e) {
createHeartBurst(e.clientX, e.clientY);
this.remove();
});

document.getElementById("hearts").appendChild(heart);
setTimeout(() => heart.remove(), 10000);
}

// Crear explosión de corazones al hacer clic
function createHeartBurst(x, y) {
for (let i = 0; i < 8; i++) {
const miniHeart = document.createElement("div");
miniHeart.style.position = "fixed";
miniHeart.style.left = x + "px";
miniHeart.style.top = y + "px";
miniHeart.style.fontSize = "20px";
miniHeart.innerText = "💖";
miniHeart.style.pointerEvents = "none";
miniHeart.style.zIndex = "1000";

const angle = (Math.PI * 2 * i) / 8;
const velocity = 100;
const vx = Math.cos(angle) * velocity;
const vy = Math.sin(angle) * velocity;

document.body.appendChild(miniHeart);

let posX = x, posY = y;
let opacity = 1;

const animate = setInterval(() => {
posX += vx * 0.05;
posY += vy * 0.05;
opacity -= 0.02;

miniHeart.style.left = posX + "px";
miniHeart.style.top = posY + "px";
miniHeart.style.opacity = opacity;

if (opacity <= 0) {
clearInterval(animate);
miniHeart.remove();
}
}, 16);
}
}

// Crear partículas (estrellas)
function createParticle() {
const particle = document.createElement("div");
particle.classList.add("particle");
particle.style.left = Math.random() * 100 + "vw";
particle.style.top = Math.random() * 100 + "vh";
particle.style.animationDelay = Math.random() * 3 + "s";
document.getElementById("particles").appendChild(particle);

setTimeout(() => particle.remove(), 6000);
}

function showPoem(text, delay) {
setTimeout(() => {
const box = document.createElement("div");
box.classList.add("poem");
box.innerText = text;
document.body.appendChild(box);

setTimeout(() => box.classList.add("show"), 100);

// Cerrar el poema al hacer clic en cualquier parte
setTimeout(() => {
box.addEventListener("click", () => {
box.style.opacity = "0";
box.style.transform = "translate(-50%, -50%) scale(0.8)";
setTimeout(() => box.remove(), 1000);
});
}, 500);

// Auto-cerrar después de un tiempo
setTimeout(() => {
if (document.body.contains(box)) {
box.style.opacity = "0";
box.style.transform = "translate(-50%, -50%) scale(0.8)";
setTimeout(() => box.remove(), 1000);
}
}, 12000); // Se cierran después de 12 segundos
}, delay);
}

/* Animaciones */
setInterval(createMessage, 900);
setInterval(createHeart, 600);
setInterval(createParticle, 300);

/* Mostrar todos los poemas según sus delays */
poems.forEach(poem => {
showPoem(poem.text, poem.delay);
});

/* Control de música mejorado */
const music = document.getElementById("music");
const musicBtn = document.getElementById("music-toggle");
const musicIcon = document.getElementById("music-icon");
let isPlaying = false;

musicBtn.addEventListener("click", () => {
if (!isPlaying) {
music.volume = 0;
music.play();

// Fade in
const fadeIn = setInterval(() => {
if (music.volume < 0.3) {
music.volume = Math.min(music.volume + 0.02, 0.3);
} else {
clearInterval(fadeIn);
}
}, 100);

musicIcon.textContent = "🎵";
musicBtn.classList.add("playing");
isPlaying = true;
} else {
// Fade out
const fadeOut = setInterval(() => {
if (music.volume > 0.02) {
music.volume = Math.max(music.volume - 0.02, 0);
} else {
music.pause();
clearInterval(fadeOut);
}
}, 100);

musicIcon.textContent = "🔇";
musicBtn.classList.remove("playing");
isPlaying = false;
}
});

// Efectos adicionales al hacer clic en el fondo
document.body.addEventListener("click", (e) => {
if (e.target === document.body || e.target.classList.contains('container')) {
createHeartBurst(e.clientX, e.clientY);
}
});

